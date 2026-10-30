import test from 'node:test';
import assert from 'node:assert/strict';
import {levels,practice} from '../levels.mjs';
import {tasks} from '../assessment/bank.mjs';
import {mathHtml,mathSegments,toLatex} from '../math-text-source.mjs';
test('every problem and card renders valid LaTeX without changing its original sentence',()=>{
 const rows=[...levels,...tasks,practice].flatMap(t=>[t.problem,...t.cards.map(c=>c.text)]);
 for(const text of rows){assert.equal(mathSegments(text).map(x=>x.text).join(''),text);const html=mathHtml(text);assert.ok(!html.includes('katex-error'),text);if(/[A-Za-z0-9αβγ]/.test(text))assert.ok(html.includes('class="katex"'),text);}
});
test('fractions, powers, degrees and geometry relations use the correct notation',()=>{
 assert.equal(toLatex('AD/AB=AE/AC=1/2'),'\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{1}{2}');
 assert.equal(toLatex('a²+b²=c²'),'a^{2}+b^{2}=c^{2}');
 assert.equal(toLatex('180°/2=90°'),'\\frac{180^{\\circ}}{2}=90^{\\circ}');
 assert.equal(toLatex('∠APB=(∠AOQ+∠QOB)/2'),'\\angle APB=\\frac{1}{2}(\\angle AOQ+\\angle QOB)');
 assert.equal(toLatex('△ABC≡△CDA'),'\\triangle ABC\\equiv \\triangle CDA');
 assert.equal(toLatex('PM⊥AB'),'PM\\perp AB');
 assert.equal(toLatex('O′Q′'),"O'Q'");
});
test('ordinary text is escaped and math commands cannot be injected from text',()=>{
 assert.ok(!mathHtml('<img src=x onerror=alert(1)>').includes('<img'));
 assert.equal(mathSegments('논리의 흐름을 완성하세요.').length,1);
});

