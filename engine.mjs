
export function shuffled(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function inspect(level,order){
 const map=new Map(level.cards.map(c=>[c.id,c]));
 if(new Set(order).size!==order.length)return {ok:false,kind:'duplicate',message:'같은 카드를 두 번 사용할 수 없어요.'};
 const seen=new Set();
 for(const id of order){const c=map.get(id);if(!c)return {ok:false,kind:'unknown',message:'이 책의 카드가 아니에요.'};
 if(!c.valid)return {ok:false,kind:'invalid',card:id,message:c.reason};
 const missing=c.requires.filter(d=>!seen.has(d));
 if(missing.length)return {ok:false,kind:'dependency',card:id,message:'이 설명보다 먼저 필요한 근거가 있어요.',needed:missing};
 seen.add(id);}
 const absent=level.cards.filter(c=>c.valid&&!seen.has(c.id));
 if(absent.length)return {ok:false,kind:'incomplete',message:'아직 이어야 할 설명이 '+absent.length+'장 남았어요.'};
 return {ok:true,kind:'complete',message:'근거가 이어졌어요! 책 한 권을 복원했어요.'};
}
export function solution(level,reverse=false){
 const remaining=level.cards.filter(c=>c.valid),order=[];
 while(remaining.length){let options=remaining.filter(c=>c.requires.every(d=>order.includes(d)));if(!options.length)throw Error('Cycle or missing dependency in '+level.id);const c=options[reverse?options.length-1:0];order.push(c.id);remaining.splice(remaining.indexOf(c),1);}return order;
}
export function nextHint(level,order){
 const r=inspect(level,order);if(r.ok)return '이미 모든 근거가 바르게 이어졌어요.';
 if(r.kind==='invalid')return r.message;
 if(r.kind==='dependency')return '먼저 살펴볼 근거: '+level.cards.find(c=>c.id===r.needed[0]).text;
 const next=level.cards.find(c=>c.valid&&!order.includes(c.id)&&c.requires.every(d=>order.includes(d)));
 return next?'이어 볼 설명: '+next.text:r.message;
}
export function moveCard(state,id,to,index=Infinity){
 const pool=state.pool.filter(c=>c!==id),order=state.order.filter(c=>c!==id);
 if(!state.pool.includes(id)&&!state.order.includes(id))return state;
 const dest=to==='order'?order:pool;dest.splice(Math.min(Math.max(0,index),dest.length),0,id);
 return {...state,pool,order,feedback:null};
}
export function start(level,random=Math.random){return {levelId:level.id,pool:shuffled(level.cards.map(c=>c.id),random),order:[],failures:0,hints:0,won:false,locked:false,feedback:null};}
export function check(level,state){
 if(state.won||state.locked)return state;
 const result=inspect(level,state.order);if(result.ok)return {...state,won:true,feedback:result};
 const failures=state.failures+1;return {...state,failures,locked:failures>=3,feedback:result};
}
export function stars(state){return state.won?Math.max(1,3-state.failures-(state.hints?1:0)):0;}
export function recordAttempt(log,task,order,{help=false,explanation='',at=new Date().toISOString()}={}){
 const previous=log.filter(x=>x.taskId===task.id&&x.event==='submit');
 const assisted=help||log.some(x=>x.taskId===task.id&&x.event==='hint');
 const result=inspect(task,order);
 return [...log,{event:'submit',taskId:task.id,code:task.code,version:'1',at,first:previous.length===0,assisted,independent:previous.length===0&&!assisted,correct:result.ok,order:[...order],explanation,result:result.kind}];
}
export function report(log,codes){return codes.map(code=>{const rows=log.filter(x=>x.code===code&&x.event==='submit');const ids=new Set(rows.filter(x=>x.correct&&x.independent).map(x=>x.taskId));return {code,independent:ids.size,status:ids.size>=2?'순서 확인됨':'더 도전해 보기',explanation:rows.some(x=>x.explanation.trim())?'설명 남김':'설명 아직 없음',attempts:rows.length};});}
