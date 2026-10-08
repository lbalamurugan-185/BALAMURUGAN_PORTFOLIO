(()=>{const $=s=>document.querySelector(s),F=[['all','All'],['powerbi','Power BI'],['excel','Excel'],['sql','SQL'],['python','Python'],['genai','GenAI'],['dashboards','Dashboards']];
let f='all',q='',tech='';const g=$('#pgrid');
$('#flt').innerHTML=F.map(([k,n])=>`<button class=tb aria-pressed=${k=='all'} data-f=${k}>${n}</button>`).join('');
const all=[...new Set(PROJECTS.flatMap(p=>p.tools))].sort();
$('#tech').innerHTML='<option value="">All technologies</option>'+all.map(t=>`<option>${t}</option>`).join('');
function render(){const r=PROJECTS.filter(p=>(f=='all'||p.f.includes(f))&&(!tech||p.tools.includes(tech))&&(!q||(p.t+p.c+p.d+p.tools.join(' ')).toLowerCase().includes(q)));
g.innerHTML=r.length?r.map(projectCard).join(''):'<p class=nores>No projects match. Clear the search or choose another filter.</p>';reveal();
$('#stats').innerHTML=[[r.length,'Projects shown'],[PROJECTS.filter(p=>p.f.includes('dashboards')).length,'Dashboards'],[PROJECTS.filter(p=>p.f.includes('sql')).length,'SQL databases'],[all.length,'Technologies']].map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('')}
$('#flt').onclick=e=>{const b=e.target.closest('[data-f]');if(!b)return;f=b.dataset.f;document.querySelectorAll('#flt .tb').forEach(x=>x.setAttribute('aria-pressed',x==b));render()};
$('#q').oninput=e=>{q=e.target.value.trim().toLowerCase();render()};$('#tech').onchange=e=>{tech=e.target.value;render()};render()})();
