
import {levels,chapters,practice} from './levels.mjs';
import {start,check,moveCard,nextHint,stars} from './engine.mjs';
import {figure} from './figures.mjs';
import {createTutorialContext,mountTutorial} from './tutorial.mjs';
import {bindSoundControls} from './sound.mjs';
const $=s=>document.querySelector(s),ctx=createTutorialContext('logic-link'),sound=bindSoundControls('logic-link:sound');
const key='logic-link:save:v1';let save={completed:{},current:levels[0].id,drafts:{},history:[]};
try{save={...save,...JSON.parse(ctx.storage.getItem(key)||'{}')};}catch{}
let level=ctx.practice?practice:levels.find(x=>x.id===save.current)||levels[0],state=start(level),libraryGrade=level.grade;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function persist(){try{if(!ctx.practice){save.current=level.id;save.drafts[level.id]=state;ctx.storage.setItem(key,JSON.stringify(save));}}catch{$('#feedback').textContent='진행을 저장하지 못했어요. 브라우저 저장 공간을 확인해 주세요.';}}
function restore(){const d=save.drafts[level.id];if(d&&d.levelId===level.id&&[...d.pool,...d.order].length===level.cards.length&&new Set([...d.pool,...d.order]).size===level.cards.length&&[...d.pool,...d.order].every(id=>level.cards.some(c=>c.id===id)))state=d;}
if(!ctx.practice)restore();
function card(id,zone,i){const c=level.cards.find(x=>x.id===id),error=state.feedback?.card===id;return '<article class="card'+(error?' error':'')+'" data-card="'+id+'" data-in="'+zone+'"><button class="grip" aria-label="카드 끌기: '+esc(c.text)+'" data-grip="'+id+'">⠿</button><span class="card-number">'+(zone==='order'?i+1:'')+'</span><button class="card-text" data-move="'+id+'" data-to="'+(zone==='pool'?'order':'pool')+'" aria-label="'+(zone==='pool'?'잇기: ':'빼기: ')+esc(c.text)+'">'+esc(c.text)+'</button>'+(zone==='order'?'<div class="card-actions"><button data-shift="-1" data-id="'+id+'" aria-label="'+(i+1)+'번째 카드 위로" '+(i===0?'disabled':'')+'>↑</button><button data-shift="1" data-id="'+id+'" aria-label="'+(i+1)+'번째 카드 아래로" '+(i===state.order.length-1?'disabled':'')+'>↓</button><button data-move="'+id+'" data-to="pool" aria-label="'+(i+1)+'번째 카드 빼기">×</button></div>':'')+'</article>';}
function paint(){
 $('#chapter-label').textContent=ctx.practice?'같이 해보는 연습':('중'+level.grade+' · '+chapters.find(c=>c.grade===level.grade).name+' · '+level.unit);
 $('#book-title').textContent=level.title;$('#problem').textContent=level.problem;$('#figure').innerHTML=figure(level.figure);
 $('#pool').innerHTML=state.pool.map((id,i)=>card(id,'pool',i)).join('')||'<p class="blank">모든 카드를 옮겼어요.</p>';
 $('#order').innerHTML=state.order.map((id,i)=>card(id,'order',i)).join('');
 $('#pool-count').textContent=state.pool.length+'장';$('#order-count').textContent=state.order.length;
 $('#attempts').textContent=state.won?'복원 완료 · '+'★'.repeat(stars(state)):state.locked?'이번 책은 잠시 닫혔어요':'남은 확인 '+(3-state.failures)+'번 · 필요한 카드 '+level.goal+'장';
 $('#feedback').textContent=state.feedback?.message||'필요한 설명을 골라 순서대로 이어 주세요.';
 $('#check').disabled=state.won||state.locked;$('#hint').disabled=state.won||state.locked;$('#reset').textContent=state.locked?'다시 도전':'다시 놓기';
 const completed=Object.keys(save.completed).filter(id=>levels.some(l=>l.id===id)).length;
 $('#progress-label').textContent='복원한 책 '+completed+' / '+levels.length;$('#progress').max=levels.length;$('#progress').value=completed;
}
function move(id,to,index){if(state.won||state.locked)return;state=moveCard(state,id,to,index);sound.play('select');persist();paint();}
function choose(id){level=levels.find(l=>l.id===id);state=start(level);restore();libraryGrade=level.grade;$('#library').close();document.body.classList.remove('show-order');persist();paint();window.scrollTo({top:0});}
function tabs(order){document.body.classList.toggle('show-order',order);$('#pool-tab').classList.toggle('active',!order);$('#order-tab').classList.toggle('active',order);}
document.addEventListener('click',e=>{
 const moveButton=e.target.closest('[data-move]');if(moveButton){move(moveButton.dataset.move,moveButton.dataset.to);return;}
 const shift=e.target.closest('[data-shift]');if(shift){const i=state.order.indexOf(shift.dataset.id);move(shift.dataset.id,'order',i+Number(shift.dataset.shift));return;}
 const book=e.target.closest('[data-book]');if(book)choose(book.dataset.book);
 const grade=e.target.closest('[data-grade]');if(grade){libraryGrade=Number(grade.dataset.grade);paintLibrary();}
});
$('#pool-tab').onclick=()=>tabs(false);$('#order-tab').onclick=()=>tabs(true);
$('#reset').onclick=()=>{state=start(level);persist();paint();sound.play('select');};
$('#hint').onclick=()=>{state.hints++;state.feedback={message:nextHint(level,state.order)};persist();paint();};
$('#check').onclick=()=>{
 state=check(level,state);sound.play(state.won?'win':'error');
 if(!ctx.practice){save.history.push({level:level.id,at:new Date().toISOString(),order:[...state.order],correct:state.won,hints:state.hints,attempt:state.failures+(state.won?1:0)});save.history=save.history.slice(-800);}
 if(state.won&&!ctx.practice){save.completed[level.id]=Math.max(save.completed[level.id]||0,stars(state));}
 persist();paint();if(state.won&&!ctx.practice)reward();
};
function reward(){
 const all=levels.every(l=>save.completed[l.id]),chapter=levels.filter(l=>l.grade===level.grade).every(l=>save.completed[l.id]);
 $('#reward-title').textContent=all?'생각의 서고가 다시 빛나요!':chapter?chapters.find(c=>c.grade===level.grade).name+' 완성!':'한 권의 이야기를 되찾았어요';
 $('#reward-copy').textContent=all?'모든 책을 이어 세 서가의 불빛을 되살렸어요. 모은 세 책갈피는 서가에 남아요. 더 적은 도움으로 다시 도전하거나 나의 생각 노트에 설명을 남겨 보세요.':chapter?chapters.find(c=>c.grade===level.grade).reward+'를 얻었어요. 다른 학년의 서가도 열어 보세요.':'★'.repeat(stars(state))+' · 다음 책에는 어떤 근거가 기다릴까요?';
 $('#reward-dialog').classList.toggle('ending',all);$('#reward-dialog').showModal();
}
$('#next-book').onclick=()=>{$('#reward-dialog').close();const index=levels.indexOf(level),next=levels.slice(index+1).find(l=>!save.completed[l.id])||levels.find(l=>!save.completed[l.id]);if(next)choose(next.id);else openLibrary();};
$('#reward-shelf').onclick=()=>{$('#reward-dialog').close();openLibrary();};
function paintLibrary(){
 $('#grade-tabs').innerHTML=chapters.map(c=>'<button data-grade="'+c.grade+'" class="'+(libraryGrade===c.grade?'selected':'')+'">중'+c.grade+' '+c.name+'</button>').join('');
 $('#collection').innerHTML=chapters.map(c=>{const earned=levels.filter(l=>l.grade===c.grade).every(l=>save.completed[l.id]);return '<div><img src="assets/reward.png" class="'+(earned?'':'locked-medal')+'" alt="'+c.reward+(earned?' 획득':' 미획득')+'"><small>'+c.reward+'</small></div>';}).join('');
 const search=$('#search').value.trim();
 $('#book-grid').innerHTML=levels.filter(l=>l.grade===libraryGrade&&(!search||(l.title+' '+l.unit+' '+l.problem).includes(search))).map(l=>'<button class="book" data-book="'+l.id+'"><strong>'+esc(l.title)+'</strong><small>'+esc(l.unit)+'</small><small class="earned">'+(save.completed[l.id]?'★'.repeat(save.completed[l.id]):'아직 복원하지 않은 책')+'</small></button>').join('')||'<p>찾는 책이 없어요. 다른 단원 이름으로 찾아보세요.</p>';
}
function openLibrary(){paintLibrary();$('#library').showModal();}
$('#library-open').onclick=openLibrary;$('#library-close').onclick=()=>$('#library').close();$('#search').oninput=paintLibrary;
let drag=null;
document.addEventListener('pointerdown',e=>{const grip=e.target.closest('[data-grip]');if(!grip||state.won||state.locked||e.button>0)return;e.preventDefault();const id=grip.dataset.grip;drag={id,startX:e.clientX,startY:e.clientY,active:false};grip.setPointerCapture?.(e.pointerId);});
document.addEventListener('pointermove',e=>{if(!drag)return;if(!drag.active&&Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>6){drag.active=true;drag.ghost=document.createElement('div');drag.ghost.className='drag-ghost';drag.ghost.textContent=level.cards.find(c=>c.id===drag.id).text;document.body.append(drag.ghost);document.querySelector('[data-card="'+drag.id+'"]')?.classList.add('dragging');}if(!drag.active)return;e.preventDefault();Object.assign(drag.ghost.style,{left:Math.min(innerWidth-200,e.clientX+12)+'px',top:e.clientY+12+'px',width:'200px'});document.querySelectorAll('.drop-before').forEach(n=>n.classList.remove('drop-before'));const node=document.elementFromPoint(e.clientX,e.clientY);node?.closest('[data-card]')?.classList.add('drop-before');if(e.clientY<60)scrollBy(0,-12);if(e.clientY>innerHeight-70)scrollBy(0,12);});
function dragEnd(e,cancel=false){if(!drag)return;const d=drag;drag=null;d.ghost?.remove();document.querySelectorAll('.dragging,.drop-before').forEach(n=>n.classList.remove('dragging','drop-before'));if(cancel||!d.active)return;const node=document.elementFromPoint(e.clientX,e.clientY),target=node?.closest('[data-card]'),zone=node?.closest('[data-zone]')?.dataset.zone||(node?.closest('#order-tab')?'order':node?.closest('#pool-tab')?'pool':null);if(zone){let index=Infinity;if(target){const ids=state[zone].filter(id=>id!==d.id);index=ids.indexOf(target.dataset.card);if(index<0)index=ids.length;}move(d.id,zone,index);}}
document.addEventListener('pointerup',e=>dragEnd(e));document.addEventListener('pointercancel',e=>dragEnd(e,true));
paint();
mountTutorial(ctx,{title:'로직 링크',begin(){level=practice;state=start(level,()=>.2);paint();tabs(false);},steps:[
 {target:'.mission',title:'설명으로 책을 복원해요',body:'2x+3=11을 푸는 이야기예요. 먼저 양변에서 3을 빼야 해요.'},
 {target:'[data-card="p0"]',allow:'[data-card="p0"] [data-move]',title:'첫 카드를 이어 보세요',body:'“양변에서 3을 빼면 2x=8이다.” 카드를 눌러 보세요.',ready:()=>state.order.includes('p0')},
 {target:'[data-card="p1"]',allow:'[data-card="p1"] [data-move]',title:'이제 x만 남겨요',body:'“양변을 2로 나누면 x=4이다.” 카드를 이어 주세요.',ready:()=>state.order.includes('p1')},
 {target:'[data-card="p2"]',allow:'[data-card="p2"] [data-move]',title:'마지막으로 확인해요',body:'구한 수를 원래 식에 넣는 카드를 이어 주세요.',ready:()=>state.order.includes('p2')},
 {target:'#check',allow:'#check',title:'첫 번째 책을 완성해요',body:'책 복원하기를 누르세요. 다음 책부터는 쓸 카드도 직접 고르게 돼요.',ready:()=>state.won}
]});

