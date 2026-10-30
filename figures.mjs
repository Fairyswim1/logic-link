
export function figure(type){
 if(type==='vertical')return '<svg viewBox="0 0 280 180" role="img" aria-label="교차한 두 직선에서 α와 γ는 맞꼭지각이고 β는 두 각에 이웃한 각"><path d="M25 95H255 M60 155L220 35"/><text x="178" y="85">α</text><text x="118" y="60">β</text><text x="94" y="126">γ</text></svg>';

 const P={iso:{A:[140,25],B:[45,145],C:[235,145],D:[140,145]},triangle:{A:[110,30],B:[40,145],C:[240,145]},exterior:{A:[110,30],B:[30,145],C:[175,145],D:[255,145]},sss:{A:[115,34.760],B:[40,145],C:[240,145]},para:{A:[90,30],B:[250,30],C:[200,145],D:[40,145],O:[145,87.5]},rect:{A:[50,30],B:[235,30],C:[235,145],D:[50,145]},rhombus:{A:[140,20],B:[250,88],C:[140,156],D:[30,88],O:[140,88]},bisector:{A:[40,145],B:[240,145],M:[140,145],P:[140,30]},chord:{O:[140,78],A:[75,135],B:[205,135],M:[140,135]},tangent:{O:[170,90],P:[30,90],A:[135,29.38],B:[135,150.62]},inscribed:{P:[40,90],O:[140,90],B:[240,90],A:[175,183.675]},cyclic:{A:[72.825,22.825],B:[222.272,42.5],C:[187.5,172.272],D:[50.73,122.492]}}[type];
 if(type==='pyth')return '<svg viewBox="0 0 280 190" role="img" aria-label="합동인 직각삼각형 네 개로 둘러싼 정사각형"><path d="M60 15H220V175H60Z M60 65L170 15L220 125L110 175Z"/><text x="126" y="107">c²</text><text x="120" y="188">a + b</text><text x="226" y="94">a + b</text></svg>';
 if(!P)return '';
 const seg=(a,b,cls='')=>'<line class="'+cls+'" x1="'+P[a][0]+'" y1="'+P[a][1]+'" x2="'+P[b][0]+'" y2="'+P[b][1]+'"/>';
 let lines='';
 if(['iso','triangle','exterior','sss'].includes(type)){lines=seg('A','B')+seg('B','C')+seg('C','A');if(type==='iso')lines+=seg('A','D','aux');if(type==='exterior')lines+=seg('C','D');}
 if(['para','rect','rhombus','cyclic'].includes(type)){lines=seg('A','B')+seg('B','C')+seg('C','D')+seg('D','A')+seg('A','C','aux');if(type!=='cyclic')lines+=seg('B','D','aux');}
 if(type==='cyclic')lines+='<circle cx="140" cy="90" r="95"/>';
 if(type==='bisector')lines=seg('P','A')+seg('P','B')+seg('A','B')+seg('P','M','aux');
 if(type==='chord')lines='<circle cx="140" cy="78" r="86.452"/>'+seg('A','B')+seg('O','A')+seg('O','B')+seg('O','M','aux');
 if(type==='tangent')lines='<circle cx="170" cy="90" r="70"/>'+seg('P','A')+seg('P','B')+seg('O','A')+seg('O','B')+seg('O','P','aux');
 if(type==='inscribed')lines='<circle cx="140" cy="90" r="100"/>'+seg('P','A')+seg('A','B')+seg('P','B')+seg('O','A','aux');
 const names=Object.entries(P).map(([n,[x,y]])=>'<text x="'+(x+(n==='O'?5:-5))+'" y="'+(y+(y>130?20:-8))+'">'+n+'</text>').join('');
 return '<svg viewBox="0 0 280 '+(type==='inscribed'||type==='cyclic'?218:185)+'" role="img" aria-label="문제 조건을 설명하는 도형. 정확한 관계는 문제에 주어져 있어요.">'+lines+names+'</svg>';
}
