
import {tasks,labels} from './bank.mjs';
import {start,moveCard,recordAttempt,report,nextHint} from '../engine.mjs';
const $=s=>document.querySelector(s),key='logic-link:notes:v1',esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let data={log:[],drafts:{},current:tasks[0].id,review:''};try{data={...data,...JSON.parse(localStorage.getItem(key)||'{}')};}catch{}
let task=tasks.find(t=>t.id===data.current)||tasks[0],state=data.drafts[task.id]||start(task);
function save(){data.current=task.id;data.drafts[task.id]=state;try{localStorage.setItem(key,JSON.stringify(data));}catch{$('#result').textContent='저장 공간을 확인해 주세요.';}}
function paint(){
 $('#title').textContent=task.title;$('#question').textContent=task.problem;
 $('#note-nav').innerHTML=tasks.map((t,i)=>'<button data-task="'+t.id+'" class="'+(t.id===task.id?'selected':'')+'">'+(i+1)+'. '+t.title+'</button>').join('');
 function card(id,zone,i){const c=task.cards.find(c=>c.id===id);return '<article class="card"><button class="card-text" data-card="'+id+'" data-to="'+(zone==='pool'?'order':'pool')+'">'+(zone==='order'?(i+1)+'. ':'')+esc(c.text)+'</button>'+(zone==='order'?'<div class="card-actions"><button data-up="'+id+'" '+(i===0?'disabled':'')+' aria-label="'+(i+1)+'번째 설명 위로">↑</button><button data-down="'+id+'" '+(i===state.order.length-1?'disabled':'')+' aria-label="'+(i+1)+'번째 설명 아래로">↓</button></div>':'')+'</article>';}
 $('#choices').innerHTML=state.pool.map((id,i)=>card(id,'pool',i)).join('');$('#answer').innerHTML=state.order.map((id,i)=>card(id,'order',i)).join('');
 $('#explanation').value=state.explanation||'';$('#review').value=data.review;
 $('#report').innerHTML=report(data.log,Object.keys(labels)).map(r=>'<div class="record-row"><strong>'+labels[r.code]+'</strong> · '+r.status+' ('+r.independent+'/2) · '+r.explanation+'</div>').join('');
 $('#history').innerHTML=data.log.slice().reverse().map(r=>'<div class="record-row">'+esc(tasks.find(t=>t.id===r.taskId)?.title||'')+' · '+(r.event==='hint'?'도움말 사용':(r.correct?'순서 맞음':'다시 살펴보기')+' · '+(r.first?'첫 응답':'다시 시도')+(r.assisted?' · 도움 사용':'')+'<p>'+esc(r.explanation||'')+'</p><small>'+r.order.map(id=>esc(tasks.find(t=>t.id===r.taskId).cards.find(c=>c.id===id)?.text||id)).join(' → ')+'</small>')+'</div>').join('')||'<p>아직 기록이 없어요.</p>';
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-card]');if(b){state=moveCard(state,b.dataset.card,b.dataset.to);save();paint();}
 const u=e.target.closest('[data-up]'),d=e.target.closest('[data-down]');if(u||d){const id=u?.dataset.up||d.dataset.down;state=moveCard(state,id,'order',state.order.indexOf(id)+(u?-1:1));save();paint();}
 const t=e.target.closest('[data-task]');if(t){save();task=tasks.find(x=>x.id===t.dataset.task);state=data.drafts[task.id]||start(task);$('#result').textContent='새로운 상황에서 근거를 이어 보세요.';save();paint();}
});
$('#explanation').oninput=e=>{state.explanation=e.target.value;save();};
$('#submit').onclick=()=>{const text=$('#explanation').value.trim();if(!text){$('#result').textContent='이 순서로 놓은 이유도 한 문장 남겨 주세요.';return;}data.log=recordAttempt(data.log,task,state.order,{explanation:text});save();const r=data.log.at(-1);paint();$('#result').textContent=r.correct?'근거가 바르게 이어졌어요. 내 설명도 다시 읽어 보세요.':'아직 이어지지 않는 부분이 있어요. 근거와 순서를 다시 살펴보세요.';};
$('#help').onclick=()=>{data.log.push({event:'hint',taskId:task.id,code:task.code,at:new Date().toISOString()});const hint=nextHint(task,state.order);save();paint();$('#result').textContent=hint;};
$('#retry').onclick=()=>{state=start(task);save();paint();$('#result').textContent='카드를 다시 놓았어요. 앞서 남긴 기록은 보관돼요.';};
$('#save-review').onclick=()=>{data.review=$('#review').value;save();$('#review-status').textContent='피드백을 저장했어요.';};
$('#export').onclick=()=>{const result={game:'logic-link',version:1,exportedAt:new Date().toISOString(),...data,summary:report(data.log,Object.keys(labels)),scope:'제시된 6개 도형 영역의 순서 표본. 설명은 별도 검토 필요. 공식 이수 판정 아님.'};const a=document.createElement('a');const url=URL.createObjectURL(new Blob([JSON.stringify(result,null,2)],{type:'application/json'}));a.href=url;a.download='logic-link-notes.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('#new-learner').onclick=()=>$('#new-dialog').showModal();$('#cancel-new').onclick=()=>$('#new-dialog').close();$('#confirm-new').onclick=()=>{try{localStorage.setItem(key+':archive:'+Date.now(),JSON.stringify(data));}catch{}data={log:[],drafts:{},current:tasks[0].id,review:''};task=tasks[0];state=start(task);save();paint();$('#new-dialog').close();$('#result').textContent='새 노트를 열었어요.';};
paint();
