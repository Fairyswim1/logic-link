import katex from 'katex';
export const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Original sentences remain the source of truth for drag labels, saved records and grading.
const expression=/[A-Za-z0-9αβγ∠△⊥∥≡∽=+−×²³°′:/()\-]+/g;
export function mathSegments(text){
 const result=[];let end=0;
 for(const m of text.matchAll(expression)){if(m.index>end)result.push({text:text.slice(end,m.index)});const raw=m[0];result.push(/[A-Za-z0-9αβγ]/.test(raw)?{text:raw,latex:toLatex(raw)}:{text:raw});end=m.index+raw.length;}
 if(end<text.length)result.push({text:text.slice(end)});return result;
}
export function toLatex(raw){
 // A factor 1/2 keeps a summed numerator readable in narrow mobile cards.
 let s=raw.replace(/\(([^()]+)\)\/(\d+)/g,(_,n,d)=>'\\frac{1}{'+d+'}('+n+')');
 // Atomic fractions: AD/AB, angle/2, degrees/2, ab/2.
 s=s.replace(/([∠]?[A-Za-zαβγ0-9′]+[²³°]?)\/([A-Za-z0-9′]+)/g,(_,a,b)=>'\\frac{'+a+'}{'+b+'}');
 const symbols={'α':'\\alpha ','β':'\\beta ','γ':'\\gamma ','∠':'\\angle ','△':'\\triangle ','⊥':'\\perp ','∥':'\\parallel ','≡':'\\equiv ','∽':'\\sim ','−':'-','×':'\\times ','²':'^{2}','³':'^{3}','°':'^{\\circ}','′':"'"};s=s.replace(/[αβγ∠△⊥∥≡∽−×²³°′]/g,c=>symbols[c]);
 return s.replace(/\b(SSS|SAS|ASA)\b/g,'\\mathrm{$1}');
}
const cache=new Map();
export function mathHtml(text){
 if(cache.has(text))return cache.get(text);
 const html=mathSegments(text).map(s=>s.latex?'<span class="inline-math" data-latex="'+escapeHtml(s.latex)+'">'+katex.renderToString(s.latex,{throwOnError:true,strict:'error',trust:false,output:'htmlAndMathml'})+'</span>':escapeHtml(s.text)).join('');
 cache.set(text,html);return html;
}

