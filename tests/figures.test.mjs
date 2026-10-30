import test from 'node:test';
import assert from 'node:assert/strict';
import {levels,practice} from '../levels.mjs';
import {tasks} from '../assessment/bank.mjs';
import {diagramSpec,figure} from '../figures.mjs';
const all=[...levels,...tasks,practice],sub=(a,b)=>[a[0]-b[0],a[1]-b[1]],len=v=>Math.hypot(...v),dot=(a,b)=>a[0]*b[0]+a[1]*b[1],cross=(a,b)=>a[0]*b[1]-a[1]*b[0];
const near=(a,b,message)=>assert.ok(Math.abs(a-b)<1e-7,message+': '+a+' vs '+b);
for(const task of all)test(task.id+' has geometry that satisfies its marked conditions',()=>{
 const d=diagramSpec(task);assert.ok(d,task.id);assert.match(figure(task),/<svg.*role="img"/);assert.ok(!figure(task).includes('NaN'));
 const at=n=>{assert.ok(d.points[n],n);return d.points[n].xy;},dist=(a,b)=>len(sub(at(a),at(b)));
 for(const p of Object.values(d.points)){assert.ok(p.xy.every(Number.isFinite));if(!p.hidden){assert.ok(p.label[0]>=10&&p.label[0]<=350,'label x '+JSON.stringify(p));assert.ok(p.label[1]>=15&&p.label[1]<=249,'label y '+JSON.stringify(p));}}
 for(const s of d.segments)assert.ok(dist(s.a,s.b)>0);
 for(const c of d.constraints){
  if(c.type==='right')near(dot(sub(at(c.a),at(c.v)),sub(at(c.b),at(c.v))),0,'perpendicular');
  else if(c.type==='equal')near(dist(c.a,c.b),dist(c.c,c.d),'equal lengths');
  else if(c.type==='parallel')near(cross(sub(at(c.a),at(c.b)),sub(at(c.c),at(c.d))),0,'parallel lines');
  else if(c.type==='circle')near(len(sub(at(c.point),c.o)),c.r,'point on circle');
  else if(c.type==='length')near(dist(c.a,c.b),c.value,'specified length');
  else if(c.type==='angle'){const u=sub(at(c.a),at(c.v)),v=sub(at(c.b),at(c.v));near(Math.acos(dot(u,v)/len(u)/len(v))*180/Math.PI,c.degrees,'specified angle');}
  else if(c.type==='distanceToLine')near(Math.abs(cross(sub(at(c.b),at(c.a)),sub(c.o,at(c.a))))/dist(c.a,c.b),c.r,'tangent distance');
  else assert.fail('Unknown condition '+c.type);
 }
});
test('circle-angle case diagrams place O and auxiliary diameter in the stated sectors',()=>{
 const inside=(p,v,a,b)=>{const u=sub(a,v),w=sub(b,v),x=sub(p,v);return cross(u,x)*cross(u,w)>=0&&cross(x,w)*cross(u,w)>=0;};
 for(const [id,expected]of [['book-52',true],['book-53',false]]){const d=diagramSpec(id),p=n=>d.points[n].xy;assert.equal(inside(p('O'),p('P'),p('A'),p('B')),expected);}
 const d=diagramSpec('book-53'),p=n=>d.points[n].xy;assert.ok(inside(p('A'),p('P'),p('R'),p('B')));
});
test('construction dimensions are 4:5:6 and 5:4 with included 60 degrees',()=>{
 const d=diagramSpec('book-12'),dist=(a,b)=>len(sub(d.points[a].xy,d.points[b].xy));near(dist('A','B')/dist('B','C'),4/6,'AB/BC');near(dist('A','C')/dist('B','C'),5/6,'AC/BC');
 const e=diagramSpec('book-13');near(len(sub(e.points.A.xy,e.points.B.xy))/len(sub(e.points.A.xy,e.points.C.xy)),5/4,'AB/AC');
});
test('transversal points really lie on one line',()=>{const p=diagramSpec('book-59').points;for(const n of ['I','J'])near(cross(sub(p[n].xy,p.U.xy),sub(p.D.xy,p.U.xy)),0,'collinear');});
test('independent tasks retain their new point names',()=>{
 for(const [id,names]of [['proof-note-1',['P','Q','R','M']],['proof-note-2',['X','Y','Z','W']],['proof-note-4',['K','L','M','J','U','V','W']],['proof-note-9',['T','U','V','O']],['proof-note-11',['R','S','U','V']],['proof-note-12',['K','L','M','N']]]){
 const labels=Object.entries(diagramSpec(id).points).filter(([,p])=>!p.hidden).map(([n,p])=>p.name||n);for(const n of names)assert.ok(labels.includes(n),id+' '+n);
 }
});

