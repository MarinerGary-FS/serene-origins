// @ts-check
/** @typedef {{name:string,amount:string,kind:string,description:string,note:string,url:string,visual:string,symbol:string}} Ingredient */
/** @type {Ingredient[]} */
const ingredients = [
  {name:'Lysine',amount:'2,000 mg',kind:'AN ESSENTIAL AMINO ACID',description:'An amino acid your body obtains from food. Lysine is one of the building blocks used to make proteins.',note:'The largest listed ingredient amount in this blend. Ingredient research is distinct from testing a finished product.',url:'https://www.healthline.com/nutrition/lysine-benefits',visual:'lysine',symbol:'lysine'},
  {name:'Olive Leaf Extract',amount:'500 mg',kind:'A BOTANICAL EXTRACT',description:'An extract made from the leaves of the olive tree. This formula lists the extract amount separately, so you can see exactly what is included.',note:'An extract’s composition depends on its specifications. The amount alone does not establish its concentration.',url:'https://pubmed.ncbi.nlm.nih.gov/?term=olive+leaf+extract+systematic+review',visual:'olive',symbol:''},
  {name:'Reishi Mushroom Extract',amount:'500 mg',kind:'A MUSHROOM EXTRACT',description:'Reishi is a mushroom with a long history of traditional use. Here it appears as an extract, alongside the other six ingredients.',note:'Traditional use and clinical evidence are different. Research findings depend on the preparation studied.',url:'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/reishi-mushroom',visual:'reishi',symbol:''},
  {name:'Astragalus Extract',amount:'500 mg',kind:'A BOTANICAL EXTRACT',description:'Astragalus is a plant used in traditional preparations. The formula includes 500 mg of astragalus extract per serving.',note:'Human research remains limited. Botanical imagery represents the plant, not a verified extract specification.',url:'https://www.nccih.nih.gov/health/astragalus',visual:'astragalus',symbol:''},
  {name:'Zinc',amount:'15 mg',kind:'AN ESSENTIAL MINERAL',description:'An essential mineral found in a variety of foods. The listed amount in this blend is 15 mg per serving.',note:'The full diet and other supplements contribute to total intake. More is not automatically better.',url:'https://ods.od.nih.gov/factsheets/Zinc-Consumer/',visual:'zinc',symbol:'Zn'},
  {name:'Vitamin D3',amount:'25 mcg',kind:'A VITAMIN',description:'Vitamin D3 is one form of vitamin D. Each serving lists 25 micrograms, equivalent to 1,000 international units.',note:'25 mcg = 1,000 IU. Individual needs vary; this amount is not a personalized recommendation.',url:'https://ods.od.nih.gov/factsheets/VitaminD-Consumer/',visual:'vitamin',symbol:'D3'},
  {name:'Selenium',amount:'55 mcg',kind:'AN ESSENTIAL TRACE MINERAL',description:'A trace mineral needed in small amounts. The formula lists 55 micrograms of selenium per serving.',note:'Micrograms and milligrams are different units. All amounts here match the approved ingredient list.',url:'https://ods.od.nih.gov/factsheets/Selenium-Consumer/',visual:'selenium',symbol:'Se'}
];
const journey = document.getElementById('journey');
const track = document.getElementById('ingredient-track');
const tabs = document.getElementById('ingredient-tabs');
const formula = document.getElementById('formula-list');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobile = window.matchMedia('(max-width:850px)');
let active = -1;
let ticking = false;
const atom = '<svg viewBox="0 0 120 120" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1.4"><path d="M32 28 66 20 92 46 80 84 42 95 20 63Z"/><path d="m32 28 48 56M66 20 42 95M20 63l72-17"/></g><g fill="currentColor"><circle cx="32" cy="28" r="7"/><circle cx="66" cy="20" r="5"/><circle cx="92" cy="46" r="8"/><circle cx="80" cy="84" r="6"/><circle cx="42" cy="95" r="7"/><circle cx="20" cy="63" r="5"/></g></svg>';
ingredients.forEach((item, index) => {
  const orb = document.createElement('div'); orb.className='ingredient-orb';
  const photo = ['olive','reishi','astragalus'].includes(item.visual);
  orb.innerHTML=`<div class="orb-image ${photo?'botanical':'symbol'} ${item.visual}">${photo?'':item.symbol==='lysine'?atom:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-width="1"/><text x="60" y="75" text-anchor="middle" fill="currentColor" font-family="Georgia,serif" font-size="43">${item.symbol}</text></svg>`}</div><p class="orb-caption">${item.name}</p>`;
  track?.append(orb);
  const button=document.createElement('button');button.type='button';button.textContent=String(index+1);button.setAttribute('aria-label',`${item.name}, ${item.amount} per serving`);
  button.addEventListener('click',()=>{if(reduced.matches){select(index);moveTrack(index/6);}else if(journey){const start=journey.getBoundingClientRect().top+window.scrollY;const distance=journey.offsetHeight-(journey.firstElementChild?.clientHeight||window.innerHeight);window.scrollTo({top:start+distance*index/6,behavior:'smooth'});}});tabs?.append(button);
  const details=document.createElement('details');const fullAmount=item.name==='Vitamin D3'?'25 mcg (1,000 IU)':item.amount;
  details.innerHTML=`<summary><span>${item.name}</span><span class="amount">${fullAmount}</span><span class="plus" aria-hidden="true">+</span></summary><p>${item.description} ${item.note}<br><a href="${item.url}" target="_blank" rel="noopener noreferrer">Read ingredient information<span class="sr-only"> (opens a new tab)</span></a></p>`;formula?.append(details);
});
function select(index){if(index===active)return;active=index;const item=ingredients[index];const values={'ingredient-kind':item.kind,'ingredient-name':item.name,'ingredient-amount':item.amount,'ingredient-description':item.description,'ingredient-note':item.note};Object.entries(values).forEach(([id,text])=>{const el=document.getElementById(id);if(el)el.textContent=text;});const link=document.getElementById('ingredient-research');if(link instanceof HTMLAnchorElement)link.href=item.url;tabs?.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-current',String(i===index)));}
function moveTrack(progress){if(!track)return;const step=(track.firstElementChild?.getBoundingClientRect().width||158)+(mobile.matches?40:72);const start=mobile.matches?window.innerWidth*.30:window.innerWidth*.29;const translation=start-progress*(step*6+start+30);track.style.transform=`translate3d(${translation}px,0,0)`;}
function render(){ticking=false;if(!journey||reduced.matches)return;const distance=journey.offsetHeight-(journey.firstElementChild?.clientHeight||window.innerHeight);const p=Math.max(0,Math.min(1,-journey.getBoundingClientRect().top/distance));moveTrack(p);select(Math.min(6,Math.floor(p*7)));const fill=document.getElementById('progress-fill');if(fill)fill.style.width=`${p*100}%`;}
function queue(){if(!ticking){ticking=true;requestAnimationFrame(render);}}
window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);reduced.addEventListener('change',()=>{if(reduced.matches){select(0);moveTrack(0);}else queue();});select(0);moveTrack(0);render();
