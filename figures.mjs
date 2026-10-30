// Exact, code-drawn mathematical figures. No textbook images are bundled.
const add=(a,b)=>[a[0]+b[0],a[1]+b[1]], sub=(a,b)=>[a[0]-b[0],a[1]-b[1]], mul=(a,k)=>[a[0]*k,a[1]*k];
const mid=(a,b)=>mul(add(a,b),.5), dot=(a,b)=>a[0]*b[0]+a[1]*b[1];
const length=a=>Math.hypot(...a), unit=a=>mul(a,1/length(a));
const polar=(o,r,d)=>add(o,[r*Math.cos(d*Math.PI/180),r*Math.sin(d*Math.PI/180)]);
const foot=(p,a,b)=>add(a,mul(sub(b,a),dot(sub(p,a),sub(b,a))/dot(sub(b,a),sub(b,a))));
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function base(alt,caption='점선은 증명에 사용하는 보조선이에요.'){
 return {alt,caption,points:{},segments:[],circles:[],arcs:[],angles:[],right:[],ticks:[],parallel:[],texts:[],constraints:[]};
}
function seg(d,a,b,aux=false){d.segments.push({a,b,aux});}
function poly(d,names){names.forEach((a,i)=>seg(d,a,names[(i+1)%names.length]));}
function point(d,n,p,dx=0,dy=-13){d.points[n]={xy:p,label:[p[0]+dx,p[1]+dy]};return p;}
function circle(d,o,r,aux=false){d.circles.push({o,r,aux});}
function right(d,v,a,b){d.right.push({v,a,b});d.constraints.push({type:'right',v,a,b});}
function tick(d,a,b,n=1){d.ticks.push({a,b,n});}
function eq(d,a,b,c,e){d.constraints.push({type:'equal',a,b,c,d:e});}
function par(d,a,b,c,e){d.parallel.push({a,b},{a:c,b:e});d.constraints.push({type:'parallel',a,b,c,d:e});}
function onCircle(d,n,o,r){d.constraints.push({type:'circle',point:n,o,r});}
function angle(d,v,a,b,label='',r=23){d.angles.push({v,a,b,label,r});}
function triangle(kind){
 const d=base('삼각형 ABC와 문제에 쓰는 보조선');
 const iso=kind==='iso'||kind==='iso-angle';
 point(d,'A',[180,42]);point(d,'B',[65,210],-12,15);point(d,'C',[295,210],12,15);poly(d,['A','B','C']);
 if(iso){point(d,'D',[180,210],0,19);seg(d,'A','D',true);
  if(kind==='iso'){tick(d,'A','B');tick(d,'A','C');tick(d,'B','D',2);tick(d,'D','C',2);eq(d,'A','B','A','C');eq(d,'B','D','D','C');}
  else{angle(d,'A','B','D','',30);angle(d,'A','D','C','',30);angle(d,'B','A','C');angle(d,'C','B','A');}
 }
 if(kind==='sum'){point(d,'L',[30,42],0,-14);point(d,'R',[330,42],0,-14);seg(d,'L','R',true);par(d,'L','R','B','C');angle(d,'A','L','B');angle(d,'A','C','R');d.caption='A를 지나는 점선은 BC와 평행한 보조선이에요.';}
 if(kind==='exterior'){d.points.A.xy=[140,42];d.points.A.label=[140,27];d.points.C.xy=[235,210];d.points.C.label=[235,230];point(d,'D',[330,210],8,17);seg(d,'C','D');angle(d,'C','A','D');d.alt='BC를 C 너머 D까지 연장한 삼각형 ABC';d.caption='주황색 호는 구하려는 바깥 각 ACD예요.';}
 return d;
}
function vertical(){
 const d=base('두 직선이 만나 생긴 맞꼭지각 α, γ와 이웃한 각 β','α와 γ는 마주 보고, β는 두 각에 이웃해요.');
 point(d,'O',[180,130],0,0);d.points.O.hidden=true;
 for(const [n,p]of Object.entries({L:[40,130],R:[320,130],U:[285,40],D:[75,220]})){point(d,n,p);d.points[n].hidden=true;}
 seg(d,'L','R');seg(d,'U','D');angle(d,'O','R','U','α',32);angle(d,'O','U','L','β',32);angle(d,'O','L','D','γ',32);return d;
}
function polygon(exterior=false){
 const d=base(exterior?'볼록 오각형에서 각 변을 연장해 만든 다섯 외각':'한 꼭짓점에서 대각선을 그은 볼록 육각형',exterior?'볼록 오각형의 예시예요. 주황색 호는 각 꼭짓점의 외각이에요.':'볼록 육각형의 예시예요. 다른 n각형에도 같은 방법을 써요.');
 const ps=exterior?[[155,50],[285,105],[245,205],[110,220],[55,110]]:[[180,40],[285,80],[290,170],[185,220],[70,190],[55,80]];
 const names=ps.map((p,i)=>{const n=String.fromCharCode(65+i);point(d,n,p,0,p[1]>130?19:-14);return n;});poly(d,names);
 if(!exterior)for(const n of names.slice(2,-1))seg(d,'A',n,true);
 else names.forEach((n,i)=>{const prev=names[(i+names.length-1)%names.length],next=names[(i+1)%names.length],x=n+'e';point(d,x,add(ps[i],mul(unit(sub(ps[i],d.points[prev].xy)),30)));d.points[x].hidden=true;seg(d,n,x,true);angle(d,n,x,next,'',18);});
 return d;
}
function parallels(){
 const d=base('평행선 두 개와 횡단선: α와 β는 맞꼭지각, α와 γ는 동위각','같은 위치의 α·γ, 마주 보는 α·β를 비교해 보세요.');
 for(const [n,p]of Object.entries({L:[35,75],R:[325,75],M:[35,180],N:[325,180],I:[120,75],J:[220,180],U:[82,35.1],D:[258,219.9]})){point(d,n,p);d.points[n].hidden=true;}
 seg(d,'L','R');seg(d,'M','N');seg(d,'U','D');par(d,'L','R','M','N');
 angle(d,'I','U','R','α',24);angle(d,'I','D','L','β',24);angle(d,'J','U','N','γ',24);return d;
}
function perpendicularBisector(){
 const d=base('AB의 중점 M을 지나는 수선 PM과 두 삼각형 PMA, PMB','직각 표시는 PM이 AB에 수직임을 나타내요.');
 point(d,'A',[55,205],-10,18);point(d,'B',[305,205],10,18);point(d,'M',[180,205],0,20);point(d,'P',[180,45]);
 seg(d,'A','B');seg(d,'P','A');seg(d,'P','B');seg(d,'P','M',true);right(d,'M','P','A');tick(d,'A','M');tick(d,'M','B');eq(d,'A','M','M','B');return d;
}
function circumcenter(ac=false){
 const d=base('삼각형의 두 변의 수직이등분선과 그 교점 O','점선은 수직이등분선과 중심을 잇는 보조선이에요.');
 const o=[180,130],r=92;point(d,'O',o,12,10);
 for(const [n,a]of [['A',-100],['B',160],['C',25]]){const p=polar(o,r,a);point(d,n,p,n==='B'?-13:n==='C'?13:0,n==='A'?-14:18);onCircle(d,n,o,r);}
 poly(d,['A','B','C']);circle(d,o,r,true);['A','B','C'].forEach(n=>seg(d,'O',n,true));
 const pairs=ac?[['A','B','M'],['A','C','N']]:[['A','B','M'],['B','C','N']];
 pairs.forEach(([a,b,m])=>{const p=mid(d.points[a].xy,d.points[b].xy);point(d,m,p,m==='M'?-16:12,0);const dir=unit(sub(p,o));const start=m+'0',end=m+'1';point(d,start,add(o,mul(dir,-35)));point(d,end,add(p,mul(dir,25)));d.points[start].hidden=d.points[end].hidden=true;seg(d,start,end,true);right(d,m,'O',a);tick(d,a,m,m==='M'?1:2);tick(d,m,b,m==='M'?1:2);eq(d,a,m,m,b);});return d;
}
function angleBisector(){
 const d=base('각 A의 이등분선 위의 점 P와 두 변에 내린 수선 PD, PE','작은 사각형은 수선의 발에서 생긴 직각이에요.');
 const A=[55,130],U=[305,30],V=[305,230],P=[215,130];
 point(d,'A',A,-15,5);point(d,'P',P,15,5);for(const [n,p]of [['U',U],['V',V]]){point(d,n,p);d.points[n].hidden=true;seg(d,'A',n);}
 point(d,'D',foot(P,A,U),0,-15);point(d,'E',foot(P,A,V),0,20);seg(d,'A','P',true);seg(d,'P','D');seg(d,'P','E');right(d,'D','A','P');right(d,'E','A','P');angle(d,'A','U','P','',38);angle(d,'A','P','V','',38);return d;
}
function incenter(){
 const d=base('삼각형 ABC의 내각 이등분선 교점 I와 수선의 발 D, E, F','점선 원은 세 변에 접하는 원을 나타내는 보조 그림이에요.');
 const A=[155,35],B=[50,215],C=[310,215],a=length(sub(B,C)),b=length(sub(A,C)),c=length(sub(A,B)),I=mul(add(add(mul(A,a),mul(B,b)),mul(C,c)),1/(a+b+c));
 for(const [n,p]of [['A',A],['B',B],['C',C]])point(d,n,p,n==='B'?-10:n==='C'?10:0,n==='A'?-14:18);
 point(d,'I',I,12,-6);poly(d,['A','B','C']);seg(d,'A','I',true);seg(d,'B','I',true);
 for(const [n,u,v]of [['D','A','B'],['E','B','C'],['F','C','A']]){const f=foot(I,d.points[u].xy,d.points[v].xy);point(d,n,f,n==='D'?-16:n==='F'?16:0,n==='E'?20:0);seg(d,'I',n,true);right(d,n,'I',u);}
 circle(d,I,length(sub(I,d.points.D.xy)),true);
 for(const n of ['D','E','F'])onCircle(d,n,I,length(sub(I,d.points.D.xy)));
 return d;
}
function quadrilateral(kind){
 const rect=kind==='rect'||kind==='rect-converse',rhombus=kind==='rhombus'||kind==='rhombus-converse';
 const d=base('사각형 ABCD와 증명에 쓰는 대각선','실선은 주어진 도형, 점선은 대각선이에요. 표시된 조건을 확인하세요.');
 const ps=rect?{A:[65,45],B:[295,45],C:[295,215],D:[65,215]}:rhombus?{A:[180,30],B:[310,130],C:[180,230],D:[50,130]}:{A:[100,50],B:[310,50],C:[260,210],D:[50,210]};
 for(const [n,p]of Object.entries(ps))point(d,n,p,n==='B'?12:n==='D'?-12:0,p[1]>=130?18:-14);
 poly(d,['A','B','C','D']);seg(d,'A','C',true);
 if(kind!=='para'&&kind!=='para-converse'){seg(d,'B','D',true);if(!rect){point(d,'O',mid(ps.A,ps.C),12,0);}}
 if(kind==='para'||kind==='para-diagonals'){par(d,'A','B','D','C');par(d,'B','C','A','D');}
 if(kind==='para-converse'){tick(d,'A','B');tick(d,'C','D');tick(d,'B','C',2);tick(d,'D','A',2);eq(d,'A','B','C','D');eq(d,'B','C','D','A');}
 if(kind==='rect'){right(d,'B','A','C');right(d,'C','B','D');}
 if(kind==='rect-converse'){tick(d,'A','C');tick(d,'B','D');d.ticks.forEach(t=>t.position=.36);eq(d,'A','C','B','D');}
 if(kind==='rhombus'){for(const [a,b]of [['A','B'],['B','C'],['C','D'],['D','A']])tick(d,a,b);eq(d,'A','B','A','D');}
 if(kind==='rhombus-converse')right(d,'O','A','B');
 if(kind.endsWith('-converse')&&kind!=='para-converse'){par(d,'A','B','D','C');par(d,'B','C','A','D');}
 return d;
}
function midpoint(){
 const d=base('삼각형 ABC의 두 변의 중점 D, E와 선분 DE','같은 개수의 짧은 선은 같은 길이를 뜻해요.');
 const A=[150,35],B=[55,215],C=[310,215];point(d,'A',A);point(d,'B',B,-10,18);point(d,'C',C,10,18);point(d,'D',mid(A,B),-17,0);point(d,'E',mid(A,C),17,0);poly(d,['A','B','C']);seg(d,'D','E',true);tick(d,'A','D');tick(d,'D','B');tick(d,'A','E',2);tick(d,'E','C',2);eq(d,'A','D','D','B');eq(d,'A','E','E','C');return d;
}
function pyth(){
 const d=base('큰 정사각형 안의 합동 직각삼각형 네 개와 중앙 정사각형','각 모서리의 삼각형은 직각변 a, b, 빗변 c를 가져요.');
 const ps={K:[80,30],L:[270,30],M:[270,220],N:[80,220],T:[145,30],R:[270,95],B:[205,220],S:[80,155]};
 for(const [n,p]of Object.entries(ps)){point(d,n,p);d.points[n].hidden=true;}poly(d,['K','L','M','N']);poly(d,['T','R','B','S']);for(const [v,a,b]of [['K','T','S'],['L','T','R'],['M','R','B'],['N','B','S']])right(d,v,a,b);
 d.texts=[{xy:[112,19],text:'a'},{xy:[208,19],text:'b'},{xy:[65,96],text:'b'},{xy:[65,190],text:'a'},{xy:[214,78],text:'c'},{xy:[175,138],text:'c²'}];eq(d,'T','R','R','B');d.constraints.push({type:'right',v:'R',a:'T',b:'B'});return d;
}
function chord(pair=false,converse=false){
 const d=base(pair?'같은 원의 두 현 AB, CD와 수선 OM, ON':'원 O의 현 AB와 중심에서 내린 수선 OM','작은 사각형은 현과 수선이 만나는 직각이에요.');
 const O=[180,130],r=95;point(d,'O',O,-14,5);circle(d,O,r);
 if(!pair){const y=180,x=Math.sqrt(r*r-50*50);point(d,'A',[180-x,y],-13,15);point(d,'B',[180+x,y],13,15);point(d,'M',[180,y],0,21);seg(d,'A','B');seg(d,'O','A');seg(d,'O','B');seg(d,'O','M',true);right(d,'M','O','A');for(const n of ['A','B'])onCircle(d,n,O,r);}
 else{const h=45,w=Math.sqrt(r*r-h*h);point(d,'A',[180-w,85],-15,0);point(d,'B',[180+w,85],15,0);point(d,'M',[180,85],-14,-12);
 const normal=[Math.cos(Math.PI/3),Math.sin(Math.PI/3)],N=add(O,mul(normal,h)),dir=[-normal[1],normal[0]];point(d,'N',N,14,3);point(d,'C',add(N,mul(dir,w)),-12,20);point(d,'D',add(N,mul(dir,-w)),15,8);
 for(const [a,b]of [['A','B'],['C','D']])seg(d,a,b);for(const n of ['A','C'])seg(d,'O',n,true);for(const n of ['M','N'])seg(d,'O',n,true);right(d,'M','O','A');right(d,'N','O','C');for(const n of ['A','B','C','D'])onCircle(d,n,O,r);
 if(converse){tick(d,'A','B');tick(d,'C','D');eq(d,'A','B','C','D');}else{tick(d,'O','M');tick(d,'O','N');eq(d,'O','M','O','N');}}
 return d;
}
function tangent(){
 const d=base('원 O 밖의 점 P에서 그은 두 접선과 접점 A, B','작은 사각형은 접선과 반지름이 이루는 직각이에요.');
 const O=[215,130],r=75,P=[40,130],x=215-r*r/175,y=Math.sqrt(r*r-(x-215)**2);
 point(d,'O',O,14,5);point(d,'P',P,-14,5);point(d,'A',[x,130-y],0,-15);point(d,'B',[x,130+y],0,20);circle(d,O,r);
 for(const n of ['A','B']){seg(d,'P',n);seg(d,'O',n);right(d,n,'P','O');onCircle(d,n,O,r);}seg(d,'P','O',true);return d;
}
function circleAngles(kind){
 const d=base('원 위의 점들과 비교하는 원주각·중심각','주황색 호는 살펴볼 각이나 호예요. O는 원의 중심이에요.');
 const O=[180,130],r=95;point(d,'O',O,12,16);circle(d,O,r);let degrees={};
 if(kind==='diameter-case')degrees={P:180,B:0,A:-60};
 if(kind==='inside')degrees={P:90,Q:270,A:210,B:330};
 if(kind==='outside')degrees={P:180,R:0,A:-50,B:-110};
 if(kind==='same-arc')degrees={A:150,B:30,P:230,Q:300};
 if(kind==='semicircle')degrees={A:180,B:0,P:-75};
 if(kind==='cyclic')degrees={A:225,B:325,C:45,D:160};
 if(kind==='tangent-chord')degrees={A:90,D:270,B:30,C:210};
 for(const [n,a]of Object.entries(degrees)){const p=polar(O,r,a),offset=mul(unit(sub(p,O)),16);point(d,n,p,offset[0],offset[1]+5);onCircle(d,n,O,r);}
 if(kind==='diameter-case'){poly(d,['P','A','B']);seg(d,'O','A',true);angle(d,'P','B','A');angle(d,'O','B','A');d.caption='PB는 지름이에요. 점선 OA는 반지름인 보조선이에요.';}
 if(kind==='inside'){for(const n of ['A','B','Q']){seg(d,'P',n,n==='Q');seg(d,'O',n,true);}d.arcs.push({o:O,r,start:210,end:330});angle(d,'P','A','Q','',27);angle(d,'P','Q','B','',36);d.caption='O는 각 APB 안쪽, Q는 P를 포함하지 않는 호 AB 위에 있어요.';}
 if(kind==='outside'){for(const n of ['A','B','R'])seg(d,'P',n,n==='R');for(const n of ['A','B'])seg(d,'O',n,true);d.arcs.push({o:O,r,start:-110,end:-50});angle(d,'P','R','A','',37);angle(d,'P','A','B','',28);d.caption='O는 각 APB 바깥에 있고, PA는 각 RPB 안에 있어요.';}
 if(kind==='same-arc'){for(const p of ['P','Q']){seg(d,p,'A');seg(d,p,'B');angle(d,p,'A','B','',23);}d.arcs.push({o:O,r,start:30,end:150});d.caption='P와 Q는 같은 호 AB를 바라보는 두 자리예요.';}
 if(kind==='semicircle'){poly(d,['A','P','B']);angle(d,'P','A','B','',22);d.caption='AB는 지름이고 P는 원 위의 점이에요. 주황색 호는 각 APB예요.';}
 if(kind==='cyclic'){poly(d,['A','B','C','D']);angle(d,'B','A','C');angle(d,'D','A','C');d.caption='원 위의 네 꼭짓점과 마주 보는 두 각을 살펴보세요.';}
 if(kind==='tangent-chord'){point(d,'T',[325,225],10,5);for(const [a,b]of [['A','T'],['A','B'],['A','C'],['B','C'],['C','D'],['A','D']])seg(d,a,b,b==='D');angle(d,'A','T','B','',27);angle(d,'C','B','A','',27);d.constraints.push({type:'right',v:'A',a:'O',b:'T'});d.caption='AT는 A에서의 접선, AD는 지름이에요. 두 주황색 각을 비교해 보세요.';}
 return d;
}
function altitude(){
 const d=base('직각삼각형 ABC의 빗변 AB에 내린 높이 CH','C와 H의 작은 사각형은 문제에 주어진 직각이에요.');
 const A=[55,215],B=[305,215],C=[135,215-Math.sqrt(80*170)],H=[135,215];point(d,'A',A,-12,18);point(d,'B',B,12,18);point(d,'C',C,0,-15);point(d,'H',H,0,20);poly(d,['A','B','C']);seg(d,'C','H',true);right(d,'C','A','B');right(d,'H','C','A');return d;
}
function tangentQuad(){
 const d=base('한 원에 네 변이 모두 접하는 사각형 ABCD','각 변의 작은 점은 원과 만나는 접점이에요.');
 const O=[180,130],r=65,ns=[-90,0,65,170].map(a=>polar([0,0],1,a));
 const intersect=(u,v)=>{const det=u[0]*v[1]-u[1]*v[0];return add(O,[r*(v[1]-u[1])/det,r*(u[0]-v[0])/det]);};
 const ps=[intersect(ns[3],ns[0]),intersect(ns[0],ns[1]),intersect(ns[1],ns[2]),intersect(ns[2],ns[3])];
 ['A','B','C','D'].forEach((n,i)=>point(d,n,ps[i],i===0||i===3?-13:13,i<2?-12:18));poly(d,['A','B','C','D']);circle(d,O,r);
 ns.forEach((n,i)=>{const p=add(O,mul(n,r));point(d,'F'+i,p);d.points['F'+i].hidden=true;d.points['F'+i].dot=true;d.constraints.push({type:'distanceToLine',a:['A','B','C','D'][i],b:['B','C','D','A'][i],o:O,r});});return d;
}
function construction(kind){
 const d=base('자와 컴퍼스로 완성할 도형의 예시','완성할 도형의 예시예요. 점선·호는 보조선이며 작도 순서는 카드로 정해요.');
 if(kind==='copy'){
  const r=65;point(d,'O',[40,190],-10,20);point(d,'X',[160,190],0,20);point(d,'Y',polar([40,190],125,-60),0,-16);seg(d,'O','X');seg(d,'O','Y');
  point(d,'P',[105,190],0,20);point(d,'Q',polar([40,190],r,-60),-13,-6);d.arcs.push({o:[40,190],r,start:-80,end:10,aux:true});
  point(d,'O′',[215,190],-8,20);point(d,'X′',[340,190],0,20);point(d,'P′',[280,190],0,20);point(d,'Q′',polar([215,190],r,-60),-13,-6);point(d,'Y′',polar([215,190],125,-60),0,-16);d.points['Y′'].hidden=true;seg(d,'O′','X′');seg(d,'O′','Y′',true);
  d.arcs.push({o:[215,190],r,start:-80,end:10,aux:true},{o:[280,190],r,start:-145,end:-100,aux:true});eq(d,'O','P','O′','P′');eq(d,'P','Q','P′','Q′');
  d.caption='왼쪽은 주어진 각, 오른쪽은 옮길 자리예요. 호와 점선은 작도 흔적이에요.';d.alt='각 XOY와 새 반직선 O′X′, 같은 반지름의 호와 점 P,Q,P′,Q′';
 }else{
  let A,B,C;
  if(kind==='sss'){B=[80,205];C=[280,205];A=[155,205-Math.sqrt((400/3)**2-75**2)];point(d,'A',A,0,-17);point(d,'B',B,-10,19);point(d,'C',C,10,19);seg(d,'B','C');seg(d,'A','B',true);seg(d,'A','C',true);d.arcs.push({o:B,r:400/3,start:-87,end:-30,aux:true},{o:C,r:500/3,start:-165,end:-110,aux:true});d.texts=[{xy:[180,239],text:'6'},{xy:[99,145],text:'4'},{xy:[235,145],text:'5'}];d.constraints.push({type:'length',a:'A',b:'B',value:400/3},{type:'length',a:'A',b:'C',value:500/3});}
  if(kind==='sas'){A=[65,210];B=[290,210];C=polar(A,180,-60);point(d,'A',A,-13,17);point(d,'B',B,12,17);point(d,'C',C,0,-16);seg(d,'A','B');seg(d,'A','C',true);seg(d,'B','C',true);angle(d,'A','B','C','60°',33);d.arcs.push({o:A,r:180,start:-78,end:-43,aux:true});d.texts=[{xy:[180,240],text:'5'},{xy:[95,125],text:'4'}];d.constraints.push({type:'length',a:'A',b:'B',value:225},{type:'length',a:'A',b:'C',value:180},{type:'angle',v:'A',a:'B',b:'C',degrees:60});}
  if(kind==='asa'){B=[60,210];C=[300,210];const t=Math.tan(50*Math.PI/180),u=Math.tan(60*Math.PI/180),x=(u*300+t*60)/(t+u);A=[x,210-t*(x-60)];point(d,'A',A,0,-17);point(d,'B',B,-13,18);point(d,'C',C,13,18);seg(d,'B','C');seg(d,'B','A',true);seg(d,'C','A',true);angle(d,'B','C','A','α',30);angle(d,'C','A','B','β',30);d.texts=[{xy:[180,241],text:'주어진 선분 BC'}];d.caption='α와 β는 주어진 두 각이에요. 같은 쪽으로 뻗은 두 반직선이 A에서 만나요.';}
 }return d;
}
function relabel(d,map){
 // Stable geometry keys stay unchanged; only the visible point names change.
 for(const [key,label]of Object.entries(map))if(d.points[key])d.points[key].name=label;
 return d;
}
const builders={
 'book-14':vertical,'book-15':()=>triangle('sum'),'book-16':()=>triangle('exterior'),'book-17':()=>polygon(),'book-58':()=>polygon(true),'book-59':parallels,
 'book-23':()=>triangle('iso'),'book-26':()=>triangle('iso-angle'),'book-28':perpendicularBisector,'book-29':()=>circumcenter(),'book-30':angleBisector,'book-31':incenter,
 'book-32':()=>quadrilateral('para'),'book-33':()=>quadrilateral('para-diagonals'),'book-34':()=>quadrilateral('para-converse'),'book-35':()=>quadrilateral('rect'),'book-36':()=>quadrilateral('rhombus'),'book-38':midpoint,'book-39':pyth,
 'book-47':()=>chord(),'book-49':()=>chord(true),'book-50':tangent,'book-51':()=>circleAngles('diameter-case'),'book-52':()=>circleAngles('inside'),'book-53':()=>circleAngles('outside'),'book-54':()=>circleAngles('same-arc'),'book-55':()=>circleAngles('semicircle'),'book-56':()=>circleAngles('cyclic'),'book-63':()=>chord(true,true),'book-64':()=>circleAngles('tangent-chord'),
 'book-11':()=>construction('copy'),'book-12':()=>construction('sss'),'book-13':()=>construction('sas'),'book-57':()=>construction('asa'),
 'proof-note-1':()=>relabel(triangle('iso'),{A:'P',B:'Q',C:'R',D:'M'}),
 'proof-note-2':()=>{const d=triangle('iso-angle');d.angles=d.angles.filter(a=>a.v==='A');tick(d,'A','B');tick(d,'A','C');return relabel(d,{A:'X',B:'Y',C:'Z',D:'W'});},
 'proof-note-3':()=>circumcenter(true),
 'proof-note-4':()=>relabel(incenter(),{A:'K',B:'L',C:'M',I:'J',D:'U',E:'V',F:'W'}),
 'proof-note-5':()=>quadrilateral('rect-converse'),'proof-note-6':()=>quadrilateral('rhombus-converse'),
 'proof-note-7':()=>{const d=pyth();d.texts.forEach(t=>t.text=t.text.replaceAll('a','p').replaceAll('b','q').replaceAll('c','r'));d.caption='각 모서리의 삼각형은 직각변 p, q, 빗변 r를 가져요.';return d;},
 'proof-note-8':altitude,'proof-note-9':()=>relabel(tangent(),{P:'T',A:'U',B:'V'}),
 'proof-note-10':tangentQuad,'proof-note-11':()=>{const d=relabel(circleAngles('same-arc'),{A:'R',B:'S',P:'U',Q:'V'});d.caption='U와 V는 같은 호 RS를 바라보는 두 자리예요.';return d;},
 'proof-note-12':()=>relabel(circleAngles('cyclic'),{A:'K',B:'L',C:'M',D:'N'}),
 vertical
};
export function diagramSpec(item){
 const id=typeof item==='string'?item:item.id,build=builders[id]||((typeof item==='object'&&item.figure==='vertical')?vertical:null);
 if(!build)return null;const d=build();d.id=id;
 // Alternative text uses the actual point labels, including new assessment letters.
 const names=Object.entries(d.points).filter(([,p])=>!p.hidden).map(([n,p])=>p.name||n).join(', ');
 d.alt='문제 '+(typeof item==='object'?item.title:id)+'의 도형. '+(names?'표시된 점: '+names+'. ':'')+d.caption;
 return d;
}
const num=n=>+n.toFixed(3),pair=p=>num(p[0])+' '+num(p[1]);
function arcPath(o,r,start,end){
 const a=polar(o,r,start),b=polar(o,r,end);return 'M'+pair(a)+' A'+num(r)+' '+num(r)+' 0 '+(Math.abs(end-start)>180?1:0)+' '+(end>start?1:0)+' '+pair(b);
}
export function figure(item){
 const d=diagramSpec(item);if(!d)return '';
 const at=n=>d.points[n].xy;let shapes='';
 for(const c of d.circles)shapes+='<circle class="'+(c.aux?'aux':'')+'" cx="'+num(c.o[0])+'" cy="'+num(c.o[1])+'" r="'+num(c.r)+'"/>';
 for(const s of d.segments)shapes+='<path class="'+(s.aux?'aux':'')+'" d="M'+pair(at(s.a))+' L'+pair(at(s.b))+'"/>';
 for(const a of d.arcs)shapes+='<path class="'+(a.aux?'compass':'angle-mark')+'" d="'+arcPath(a.o,a.r,a.start,a.end)+'"/>';
 for(const m of d.right){const v=at(m.v),u=mul(unit(sub(at(m.a),v)),10),w=mul(unit(sub(at(m.b),v)),10);shapes+='<path class="right-mark" d="M'+pair(add(v,u))+' L'+pair(add(add(v,u),w))+' L'+pair(add(v,w))+'"/>';}
 for(const t of d.ticks){const a=at(t.a),b=at(t.b),m=add(a,mul(sub(b,a),t.position??.5)),u=unit(sub(b,a)),n=[-u[1],u[0]];for(let i=0;i<t.n;i++){const c=add(m,mul(u,(i-(t.n-1)/2)*5));shapes+='<path class="given-mark" d="M'+pair(add(c,mul(n,-5)))+' L'+pair(add(c,mul(n,5)))+'"/>';}}
 for(const p of d.parallel){const a=at(p.a),b=at(p.b),m=add(a,mul(sub(b,a),.32)),u=unit(sub(b,a)),n=[-u[1],u[0]];shapes+='<path class="given-mark" d="M'+pair(add(add(m,mul(u,-5)),mul(n,-4)))+' L'+pair(m)+' L'+pair(add(add(m,mul(u,-5)),mul(n,4)))+'"/>';}
 for(const a of d.angles){const v=at(a.v),u=sub(at(a.a),v),w=sub(at(a.b),v);let start=Math.atan2(u[1],u[0])*180/Math.PI,end=Math.atan2(w[1],w[0])*180/Math.PI;while(end-start>180)end-=360;while(end-start< -180)end+=360;shapes+='<path class="angle-mark" d="'+arcPath(v,a.r,start,end)+'"/>';if(a.label){const p=polar(v,a.r+16,(start+end)/2);shapes+='<text class="angle-label" x="'+num(p[0])+'" y="'+num(p[1]+5)+'">'+esc(a.label)+'</text>';}}
 for(const [n,p]of Object.entries(d.points)){if(!p.hidden||p.dot)shapes+='<circle class="point" cx="'+num(p.xy[0])+'" cy="'+num(p.xy[1])+'" r="2.4"/>';if(!p.hidden)shapes+='<text x="'+num(p.label[0])+'" y="'+num(p.label[1])+'">'+esc(p.name||n)+'</text>';}
 for(const t of d.texts)shapes+='<text x="'+num(t.xy[0])+'" y="'+num(t.xy[1])+'">'+esc(t.text)+'</text>';
 return '<figure class="math-figure" data-diagram="'+esc(d.id)+'"><svg viewBox="0 0 360 260" role="img" aria-label="'+esc(d.alt)+'">'+shapes+'</svg><figcaption>'+esc(d.caption)+'</figcaption><button type="button" class="figure-expand" data-figure-open>그림 크게 보기 ↗</button></figure>';
}
export function mountFigureZoom(){
 const dialog=document.createElement('dialog');dialog.className='figure-dialog';dialog.setAttribute('aria-label','도형 크게 보기');dialog.innerHTML='<div class="figure-dialog-head"><h2>도형 살펴보기</h2><button type="button" data-figure-close>닫기 ×</button></div><div class="figure-enlarged"></div>';document.body.append(dialog);
 document.addEventListener('click',e=>{const open=e.target.closest('[data-figure-open]');if(open){const source=open.closest('.math-figure').cloneNode(true);source.querySelector('[data-figure-open]').remove();dialog.querySelector('.figure-enlarged').replaceChildren(source);dialog.showModal();}if(e.target.closest('[data-figure-close]'))dialog.close();});
}

