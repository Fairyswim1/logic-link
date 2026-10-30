import {problemHtml} from '../problem-layout.mjs';
import {mathHtml} from '../math-text.mjs';
import {figure,mountFigureZoom} from '../figures.mjs';
import {createProofBoard} from '../dnd-board.mjs';

import {tasks,labels} from './bank.mjs';
import {start,moveCard,recordAttempt,report,nextHint} from '../engine.mjs';
const $=s=>document.querySelector(s),key='logic-link:notes:proof-v2',esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const renderBoard=createProofBoard(document.querySelector('#proof-board'));
mountFigureZoom();
let data={log:[],drafts:{},current:tasks[0].id,review:''};try{data={...data,...JSON.parse(localStorage.getItem(key)||'{}')};}catch{}
let task=tasks.find(t=>t.id===data.current)||tasks[0],state=data.drafts[task.id]||start(task);
function save(){data.current=task.id;data.drafts[task.id]=state;try{localStorage.setItem(key,JSON.stringify(data));}catch{$('#result').textContent='저장 공간을 확인해 주세요.';}}
function paint(){
 $('#title').textContent=task.title;$('#question').innerHTML=problemHtml(task);$('#note-figure').innerHTML=figure(task);
 $('#note-nav').innerHTML=tasks.map((t,i)=>'<button data-task="'+t.id+'" class="'+(t.id===task.id?'selected':'')+'">'+(i+1)+'. '+t.title+'</button>').join('');
 renderBoard({level:task,state,onMove:(id,to,index)=>{state=moveCard(state,id,to,index);save();paint();}});
 $('#explanation').value=state.explanation||'';$('#review').value=data.review;
 $('#report').innerHTML=report(data.log,Object.keys(labels)).map(r=>'<div class="record-row"><strong>'+labels[r.code]+'</strong> · '+r.status+' ('+r.independent+'/2) · '+r.explanation+'</div>').join('');
 $('#history').innerHTML=data.log.slice().reverse().map(r=>'<div class="record-row">'+esc(tasks.find(t=>t.id===r.taskId)?.title||'')+' · '+(r.event==='hint'?'도움말 사용':(r.correct?'순서 맞음':'다시 살펴보기')+' · '+(r.first?'첫 응답':'다시 시도')+(r.assisted?' · 도움 사용':'')+'<p>'+esc(r.explanation||'')+'</p><small>'+r.order.map(id=>mathHtml(tasks.find(t=>t.id===r.taskId).cards.find(c=>c.id===id)?.text||id)).join(' → ')+'</small>')+'</div>').join('')||'<p>아직 기록이 없어요.</p>';
}
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-task]');if(t){save();task=tasks.find(x=>x.id===t.dataset.task);state=data.drafts[task.id]||start(task);$('#result').textContent='새로운 상황에서 근거를 이어 보세요.';save();paint();}
});
$('#explanation').oninput=e=>{state.explanation=e.target.value;save();};
$('#submit').onclick=()=>{const text=$('#explanation').value.trim();if(!text){$('#result').textContent='이 순서로 놓은 이유도 한 문장 남겨 주세요.';return;}data.log=recordAttempt(data.log,task,state.order,{explanation:text});save();const r=data.log.at(-1);paint();$('#result').textContent=r.correct?'근거가 바르게 이어졌어요. 내 설명도 다시 읽어 보세요.':'아직 이어지지 않는 부분이 있어요. 근거와 순서를 다시 살펴보세요.';};
$('#help').onclick=()=>{data.log.push({event:'hint',taskId:task.id,code:task.code,at:new Date().toISOString()});const hint=nextHint(task,state.order);save();paint();$('#result').innerHTML=mathHtml(hint);};
$('#retry').onclick=()=>{state=start(task);save();paint();$('#result').textContent='카드를 다시 놓았어요. 앞서 남긴 기록은 보관돼요.';};
$('#save-review').onclick=()=>{data.review=$('#review').value;save();$('#review-status').textContent='피드백을 저장했어요.';};
$('#new-learner').onclick=()=>$('#new-dialog').showModal();$('#cancel-new').onclick=()=>$('#new-dialog').close();$('#confirm-new').onclick=()=>{try{localStorage.setItem(key+':archive:'+Date.now(),JSON.stringify(data));}catch{}data={log:[],drafts:{},current:tasks[0].id,review:''};task=tasks[0];state=start(task);save();paint();$('#new-dialog').close();$('#result').textContent='새 노트를 열었어요.';};
paint();
