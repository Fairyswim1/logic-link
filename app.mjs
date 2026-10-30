import {createProofBoard} from './dnd-board.mjs';

import {levels,chapters,practice} from './levels.mjs';
import {start,check,moveCard,nextHint,stars} from './engine.mjs';
import {figure} from './figures.mjs';
import {createTutorialContext,mountTutorial} from './tutorial.mjs';
import {bindSoundControls} from './sound.mjs';
const $=s=>document.querySelector(s),ctx=createTutorialContext('logic-link'),sound=bindSoundControls('logic-link:sound');
const renderBoard=createProofBoard(document.querySelector('#proof-board'));
const key='logic-link:save:v1';let save={completed:{},current:levels[0].id,drafts:{},history:[]};
try{save={...save,...JSON.parse(ctx.storage.getItem(key)||'{}')};}catch{}
save.completed=Object.fromEntries(Object.entries(save.completed).filter(([id])=>levels.some(l=>l.id===id)));
let level=ctx.practice?practice:levels.find(x=>x.id===save.current)||levels[0],state=start(level),libraryGrade=level.grade,libraryKind=level.kind;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function persist(){try{if(!ctx.practice){save.current=level.id;save.drafts[level.id]=state;ctx.storage.setItem(key,JSON.stringify(save));}}catch{$('#feedback').textContent='진행을 저장하지 못했어요. 브라우저 저장 공간을 확인해 주세요.';}}
function restore(){const d=save.drafts[level.id];if(d&&d.levelId===level.id&&[...d.pool,...d.order].length===level.cards.length&&new Set([...d.pool,...d.order]).size===level.cards.length&&[...d.pool,...d.order].every(id=>level.cards.some(c=>c.id===id)))state=d;}
if(!ctx.practice)restore();
function paint(){
 $('#chapter-label').textContent=ctx.practice?'같이 해보는 연습':('중'+level.grade+' · '+(level.kind==='construction'?'작도':'증명')+' · '+chapters.find(c=>c.grade===level.grade).name+' · '+level.unit);
 $('#book-title').textContent=level.title;$('.guide small').textContent=level.kind==='construction'?'자와 컴퍼스를 쓰는 순서를 이어요.':'왜 그런지, 이유를 이어 가요.';$('#problem').textContent=level.problem;$('#figure').innerHTML=figure(level.figure);
 renderBoard({level,state,onMove:move});
 $('#attempts').textContent=state.won?'복원 완료 · '+'★'.repeat(stars(state)):state.locked?'이번 책은 잠시 닫혔어요':'남은 확인 '+(3-state.failures)+'번 · 필요한 카드 '+level.goal+'장';
 $('#feedback').textContent=state.feedback?.message||(level.kind==='construction'?'카드를 끌어 놓아 작도 순서를 맞춰 주세요.':'카드를 끌어 놓아 근거에서 결론까지 이어 주세요.');
 $('#check').disabled=state.won||state.locked;$('#hint').disabled=state.won||state.locked;$('#reset').textContent=state.locked?'다시 도전':'다시 놓기';
 const completed=Object.keys(save.completed).filter(id=>levels.some(l=>l.id===id)).length;
 $('#progress-label').textContent='복원한 책 '+completed+' / '+levels.length;$('#progress').max=levels.length;$('#progress').value=completed;
}
function move(id,to,index){if(state.won||state.locked)return;state=moveCard(state,id,to,index);sound.play('select');persist();paint();}
function choose(id){level=levels.find(l=>l.id===id);state=start(level);restore();libraryGrade=level.grade;libraryKind=level.kind;$('#library').close();persist();paint();window.scrollTo({top:0});}
document.addEventListener('click',e=>{
 const book=e.target.closest('[data-book]');if(book)choose(book.dataset.book);
 const kind=e.target.closest('[data-kind]');if(kind){libraryKind=kind.dataset.kind;libraryGrade=libraryKind==='construction'?1:libraryGrade;paintLibrary();}
 const grade=e.target.closest('[data-grade]');if(grade){libraryGrade=Number(grade.dataset.grade);paintLibrary();}
});

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
$('#next-book').onclick=()=>{$('#reward-dialog').close();const section=levels.filter(l=>l.kind===level.kind),index=section.indexOf(level),next=section.slice(index+1).find(l=>!save.completed[l.id])||section.find(l=>!save.completed[l.id]);if(next)choose(next.id);else openLibrary();};
$('#reward-shelf').onclick=()=>{$('#reward-dialog').close();openLibrary();};
function paintLibrary(){
 $('#kind-tabs').innerHTML=[['proof','증명',30],['construction','작도',4]].map(([kind,label,count])=>'<button data-kind="'+kind+'" aria-pressed="'+(libraryKind===kind)+'" class="'+(libraryKind===kind?'selected':'')+'">'+label+' · '+count+'편</button>').join('');
 $('#grade-tabs').hidden=libraryKind==='construction';
 $('#grade-tabs').innerHTML=chapters.map(c=>'<button data-grade="'+c.grade+'" class="'+(libraryGrade===c.grade?'selected':'')+'">중'+c.grade+' '+c.name+'</button>').join('');
 $('#collection').innerHTML=chapters.map(c=>{const earned=levels.filter(l=>l.grade===c.grade).every(l=>save.completed[l.id]);return '<div><img src="assets/reward.png" class="'+(earned?'':'locked-medal')+'" alt="'+c.reward+(earned?' 획득':' 미획득')+'"><small>'+c.reward+'</small></div>';}).join('');
 const search=$('#search').value.trim();
 $('#book-grid').innerHTML=levels.filter(l=>l.kind===libraryKind&&l.grade===libraryGrade&&(!search||(l.title+' '+l.unit+' '+l.problem).includes(search))).map(l=>'<button class="book" data-book="'+l.id+'"><strong>'+esc(l.title)+'</strong><small>'+esc(l.unit)+'</small><small class="earned">'+(save.completed[l.id]?'★'.repeat(save.completed[l.id]):'아직 복원하지 않은 책')+'</small></button>').join('')||'<p>찾는 책이 없어요. 다른 단원 이름으로 찾아보세요.</p>';
}
function openLibrary(){paintLibrary();$('#library').showModal();}
$('#library-open').onclick=openLibrary;$('#library-close').onclick=()=>$('#library').close();$('#search').oninput=paintLibrary;

paint();
mountTutorial(ctx,{title:'로직 링크',begin(){level=practice;state=start(level,()=>.2);paint();},steps:[
 {target:'.mission',title:'증명은 이유를 잇는 일이에요',body:'맞꼭지각 α와 γ는 왜 같을까요? 알고 있는 두 사실에서 결론으로 이어 가요.'},
 {target:'#proof-board',allow:'#proof-board',title:'카드를 직접 끌어 보세요',body:'오른쪽에서 “α+β=180°” 카드를 잡아 왼쪽의 빈칸에 놓으세요. 카드 어디든 잡을 수 있어요. 휴대폰에서는 잠깐 길게 눌러요.',ready:()=>state.order.includes('p0')},
 {target:'#proof-board',allow:'#proof-board',title:'두 번째 근거를 놓아요',body:'“β+γ=180°” 카드도 왼쪽에 끌어 놓으세요. 이 두 근거는 서로 순서를 바꾸어도 괜찮아요.',ready:()=>state.order.includes('p1')},
 {target:'#proof-board',allow:'#proof-board',title:'결론을 맨 아래로',body:'“같은 β를 빼면 α=γ” 카드를 두 근거 뒤에 놓으세요. 끄는 동안 카드가 들어갈 자리가 벌어져요.',ready:()=>state.order.at(-1)==='p2'&&state.order.length===3},
 {target:'#check',allow:'#check',title:'증명을 완성해요',body:'책 복원하기를 눌러 논리가 이어지는지 확인하세요.',ready:()=>state.won}
]});
