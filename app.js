
(() => {
  const ages = {
    kids: {
      label:"KIDS 7–11",
      scenarios:[
        ["Choose One","Выбрать лучший вариант из нескольких и объяснить решение."],
        ["Find Out What I Chose","Узнать выбор партнёра только через вопросы."],
        ["Build It Together","Совместно создать один продукт или план, договариваясь о каждом элементе."],
        ["Something Is Missing","Для выполнения задачи не хватает части информации."],
        ["Something Changed!","Сначала принять решение, потом отреагировать на новую деталь."],
        ["Guess My Rule","Выяснить скрытый принцип сортировки через вопросы и гипотезы."],
        ["Help the Character","Предложить решения персонажу и выбрать лучшее."],
        ["Which One Doesn’t Fit?","Найти вариант, который не подходит по скрытому критерию, и доказать выбор."],
        ["Tell Me More","Расширять короткий ответ через follow-up questions."],
        ["Make a Team Decision","Участники хотят разного, но должны выбрать один общий вариант."]
      ],
      guidance:"Use concrete, safe, playful contexts, short turns, visible options, strong scaffolding and 1–2 constraints at a time."
    },
    teens: {
      label:"TEENS 12–17",
      scenarios:[
        ["Rank & Defend","Расположить варианты по приоритету и защитить порядок."],
        ["Choose Under Conditions","Выбрать вариант по 2–4 критериям и объяснить trade-offs."],
        ["Convince Me","Выяснить сомнения собеседника и подобрать аргументы."],
        ["Change My Mind","Сначала занять позицию, затем пересмотреть её после новых аргументов."],
        ["Information Gap Decision","У участников разные части информации, решение возможно только вместе."],
        ["What Would You Do?","Выбрать действие, объяснить его и реагировать на последствия."],
        ["Spot the Problem","Несколько идей выглядят нормальными, но в одной скрыта проблема."],
        ["Negotiate the Rules","Договориться о правилах, критериях или условиях."],
        ["One More Detail Changes Everything","Новая деталь постепенно меняет оптимальное решение."],
        ["Different Priorities","Участники имеют разные приоритеты и ищут общий вариант."]
      ],
      guidance:"Use meaningful choices, social relevance, 2–4 competing criteria, reasons, disagreement and moderate unpredictability without forcing personal disclosure."
    },
    adults: {
      label:"ADULTS 18+",
      scenarios:[
        ["Compare & Decide","Сравнить варианты по критериям и принять аргументированное решение."],
        ["Negotiate a Compromise","Стороны хотят разного и должны найти workable compromise."],
        ["Clarify Before You Decide","Сначала выяснить недостающую информацию, потом решать."],
        ["Respond to an Objection","Идея сталкивается с последовательными возражениями."],
        ["Prioritise","Определить, что важно сейчас, а что можно отложить."],
        ["Solve With Constraints","Найти реалистичное решение при нескольких ограничениях."],
        ["Recommend for Someone Else","Выбирать не для себя, а под чужие потребности и критерии."],
        ["Handle New Information","Проверить, достаточно ли новая информация важна, чтобы изменить план."],
        ["Find the Weak Point","Проверить предложение вопросами и найти его уязвимое место."],
        ["Reach Agreement","Начать с разных позиций и прийти к одному итоговому решению."]
      ],
      guidance:"Use realistic trade-offs, nuanced priorities, clarification, negotiation and 3–5 constraints while avoiding unnecessary personal or sensitive scenarios."
    }
  };

  const mechanics = [
    ["Information Gap","Участники знают разное."],
    ["Wait, I Changed My Mind!","Новая информация заставляет пересматривать решение."],
    ["Interrupt Me!","Неожиданное вмешательство прерывает речь."],
    ["Make Me Ask","Без правильных вопросов нельзя продвинуться."],
    ["Listener Has a Job","Слушатель выполняет отдельную миссию."],
    ["Repair the Conversation","Диалог ломается, его нужно восстановить."],
    ["Answer Upgrade Ladder","Ответ последовательно расширяется."],
    ["Conversation With Memory","Нужно учитывать уже сказанное."],
    ["Too Much Information","Нужно фильтровать релевантные данные."],
    ["Second Attempt","Повторная попытка после поддержки."],
    ["Make the Listener Ask","Информацию нельзя выдавать всю сразу."],
    ["Same Message, Different Person","Меняется адресат и register."],
    ["Hidden Constraint","Участник скрывает важное условие."],
    ["Convince Me","Нужно убедить человека с конкретными приоритетами."],
    ["Compromise Builder","Идеального варианта нет — нужен компромисс."],
    ["Language Under Pressure","Добавляются ограничения по времени/языку."],
    ["Role Switch","В середине меняется позиция или роль."],
    ["What Happens Next?","Следующий этап зависит от предыдущей реплики/решения."],
    ["Evidence-Based Speaking","Каждую позицию нужно подтвердить данными."],
    ["Mission With Twists","По ходу появляются 2–4 поворота ситуации."]
  ];

  const functions = [
    "asking questions","giving reasons","comparing options","expressing preferences","disagreeing politely",
    "persuading","clarifying","negotiating","reacting to new information","rephrasing",
    "buying time","asking follow-up questions","responding to objections","changing position","maintaining conversation"
  ];

  const pressures = [
    "less support","new information","missing information","listener disagreement","misunderstanding",
    "time pressure","new constraint","different audience","must justify","must remember previous information",
    "cannot use one key word","more criteria / trade-offs"
  ];

  const listenerJobs = [
    "choose the best option","find a contradiction","identify missing information","ask one critical follow-up",
    "rank the arguments","decide if convinced","remember key facts","challenge one point",
    "offer a compromise","check whether all criteria were met"
  ];

  const recommendMap = {
    "Choose One":["Listener Has a Job","Evidence-Based Speaking","What Happens Next?"],
    "Find Out What I Chose":["Information Gap","Make Me Ask","Make the Listener Ask"],
    "Build It Together":["Compromise Builder","Listener Has a Job","Conversation With Memory"],
    "Something Is Missing":["Information Gap","Make Me Ask","Hidden Constraint"],
    "Something Changed!":["Wait, I Changed My Mind!","Mission With Twists","What Happens Next?"],
    "Guess My Rule":["Make Me Ask","Evidence-Based Speaking","Conversation With Memory"],
    "Help the Character":["What Happens Next?","Convince Me","Mission With Twists"],
    "Which One Doesn’t Fit?":["Evidence-Based Speaking","Listener Has a Job","Too Much Information"],
    "Tell Me More":["Answer Upgrade Ladder","Make the Listener Ask","Second Attempt"],
    "Make a Team Decision":["Compromise Builder","Hidden Constraint","Listener Has a Job"],

    "Rank & Defend":["Evidence-Based Speaking","Listener Has a Job","Convince Me"],
    "Choose Under Conditions":["Too Much Information","Hidden Constraint","Wait, I Changed My Mind!"],
    "Convince Me":["Convince Me","Hidden Constraint","Repair the Conversation"],
    "Change My Mind":["Wait, I Changed My Mind!","Evidence-Based Speaking","Mission With Twists"],
    "Information Gap Decision":["Information Gap","Make Me Ask","Hidden Constraint"],
    "What Would You Do?":["What Happens Next?","Mission With Twists","Interrupt Me!"],
    "Spot the Problem":["Evidence-Based Speaking","Listener Has a Job","Too Much Information"],
    "Negotiate the Rules":["Compromise Builder","Hidden Constraint","Conversation With Memory"],
    "One More Detail Changes Everything":["Wait, I Changed My Mind!","Mission With Twists","What Happens Next?"],
    "Different Priorities":["Compromise Builder","Hidden Constraint","Convince Me"],

    "Compare & Decide":["Too Much Information","Evidence-Based Speaking","Listener Has a Job"],
    "Negotiate a Compromise":["Compromise Builder","Hidden Constraint","Conversation With Memory"],
    "Clarify Before You Decide":["Make Me Ask","Information Gap","Repair the Conversation"],
    "Respond to an Objection":["Convince Me","Interrupt Me!","Repair the Conversation"],
    "Prioritise":["Too Much Information","Evidence-Based Speaking","Listener Has a Job"],
    "Solve With Constraints":["Hidden Constraint","Mission With Twists","Wait, I Changed My Mind!"],
    "Recommend for Someone Else":["Listener Has a Job","Evidence-Based Speaking","Too Much Information"],
    "Handle New Information":["Wait, I Changed My Mind!","Mission With Twists","What Happens Next?"],
    "Find the Weak Point":["Listener Has a Job","Evidence-Based Speaking","Make Me Ask"],
    "Reach Agreement":["Compromise Builder","Hidden Constraint","Conversation With Memory"]
  };

  const $ = id => document.getElementById(id);
  const state = {
    age:"kids", scenarioAge:"kids", scenarioIndex:0, selectedMechanics:new Set(), selectedFunctions:new Set(),
    selectedPressures:new Set(["new information"]), selectedListenerJobs:new Set(["ask one critical follow-up"]),
    format:"print"
  };

  function renderScenarios(){
    const grid=$("scenarioGrid"); grid.innerHTML="";
    filterControl("scenarioGrid");
    const groups=showAll.scenarioGrid?Object.keys(ages):[state.age];
    if(!groups.includes(state.scenarioAge))groups.push(state.scenarioAge);
    groups.forEach(group=>ages[group].scenarios.forEach((s,i)=>{
      if(!showAll.scenarioGrid && group!==state.age && i!==state.scenarioIndex)return;
      const b=document.createElement("button");
      b.className="scenario-card"+(i===state.scenarioIndex && group===state.scenarioAge?" active":"");
      b.innerHTML=`<span class="num">${showAll.scenarioGrid || group!==state.age?ages[group].label+" · ":""}${String(i+1).padStart(2,"0")}</span><b>${s[0]}</b><p>${s[1]}</p>`;
      b.addEventListener("click",()=>{state.scenarioAge=group;state.scenarioIndex=i;renderScenarios();renderRecommended();updateQuality();});
      grid.appendChild(b);
    }));
  }

  function renderMechanics(){
    const grid=$("mechanicsGrid"); grid.innerHTML="";
    filterControl("mechanicsGrid");
    mechanics.filter(([name])=>visibleChoice("mechanicsGrid",name,state.selectedMechanics)).forEach(([name,desc])=>{
      const b=document.createElement("button");
      b.className="pill"+(state.selectedMechanics.has(name)?" active":"");
      b.title=desc;b.textContent=name;
      b.addEventListener("click",()=>{
        if(state.selectedMechanics.has(name)) state.selectedMechanics.delete(name);
        else if(state.selectedMechanics.size<4) state.selectedMechanics.add(name);
        else announce("Можно выбрать до четырёх механик. Снимите одну, чтобы добавить другую.");
        renderMechanics();updateQuality();
      });
      grid.appendChild(b);
    });
  }

  function renderChoicePills(containerId,items,setObj){
    const grid=$(containerId);grid.innerHTML="";
    filterControl(containerId);
    items.filter(name=>visibleChoice(containerId,name,setObj)).forEach(name=>{
      const b=document.createElement("button");b.className="pill"+(setObj.has(name)?" active":"");b.textContent=name;
      b.addEventListener("click",()=>{setObj.has(name)?setObj.delete(name):setObj.add(name);renderChoicePills(containerId,items,setObj);updateQuality();});
      grid.appendChild(b);
    });
  }

  function renderRecommended(){
    const scenario=ages[state.scenarioAge || state.age].scenarios[state.scenarioIndex][0];
    const base=recommendMap[scenario]||["Information Gap","Listener Has a Job","What Happens Next?"];
    const allowed=ageChoices[state.age]?.mechanicsGrid;
    const rec=allowed?base.filter(x=>allowed.includes(x)):base;
    const box=$("recommendedMechanics");box.innerHTML="";
    rec.forEach(name=>{
      const d=document.createElement("div");d.className="recommended-item";d.textContent=name;box.appendChild(d);
    });
    $("useRecommended").onclick=()=>{
      state.selectedMechanics=new Set(rec.slice(0,4));
      renderMechanics();updateQuality();
    };
  }

  function updateQuality(){
    syncWorkspace();
    const selected=[...state.selectedMechanics];
    const passes={
      need:selected.length>0,
      listener:state.selectedListenerJobs.size>0 || selected.includes("Listener Has a Job") || selected.includes("Information Gap"),
      change:state.selectedPressures.size>0 || selected.some(x=>["Wait, I Changed My Mind!","Interrupt Me!","What Happens Next?","Mission With Twists"].includes(x)),
      react:selected.some(x=>["Interrupt Me!","Repair the Conversation","Convince Me","What Happens Next?","Compromise Builder"].includes(x)) || state.selectedFunctions.has("reacting to new information"),
      dependency:selected.some(x=>["Conversation With Memory","What Happens Next?","Mission With Twists","Wait, I Changed My Mind!","Information Gap"].includes(x)),
      anti:false
    };
    document.querySelectorAll(".quality-card").forEach(c=>c.classList.toggle("pass",!!passes[c.dataset.gate]));
  }

  function config(){
    return {
      age:state.age,
      ageLabel:ages[state.age].label,
      scenarioAge:state.scenarioAge,
      scenario:ages[state.scenarioAge || state.age].scenarios[state.scenarioIndex][0],
      scenarioDescription:ages[state.scenarioAge || state.age].scenarios[state.scenarioIndex][1],
      guidance:ages[state.age].guidance,
      mechanics:[...state.selectedMechanics],
      functions:[...state.selectedFunctions],
      pressures:[...state.selectedPressures],
      listenerJobs:[...state.selectedListenerJobs],
      language:$("language").value,
      cefr:$("cefr").value,
      topic:$("topic").value.trim()||"[topic not specified]",
      targetLanguage:$("targetLanguage").value.trim()||"[target language not specified]",
      extraContext:$("extraContext").value.trim()||"[no extra context]",
      format:state.format,
      printLayout:$("printLayout").value,
      printSupport:$("printSupport").value,
      livePattern:$("livePattern").value,
      liveTrigger:$("liveTrigger").value
    };
  }

  function buildPrompt(){
    const missing=[];
    if(!$("topic").value.trim()) missing.push("тему");
    if(!state.selectedMechanics.size) missing.push("1–4 механики");
    if(!state.selectedFunctions.size) missing.push("речевую цель");
    if(!state.selectedListenerJobs.size) missing.push("задачу слушателя");
    if(missing.length){announce("Для сборки выберите: "+missing.join(", ")+"."); $("notice").scrollIntoView({block:"center"}); return;}
    const c=config();
    const mech=c.mechanics.length?c.mechanics:["Listener Has a Job","What Happens Next?"];
    const funcs=c.functions.length?c.functions:["giving reasons","asking follow-up questions","maintaining conversation"];
    const press=c.pressures.length?c.pressures:["new information"];
    const listener=c.listenerJobs.length?c.listenerJobs:["ask one critical follow-up"];

    let formatBlock="";
    if(c.format==="print"){
      formatBlock=`OUTPUT FORMAT: PRINT

Create EXACTLY ONE printable A4 page.
This is a speaking tool, NOT a workbook.

LOCKED PRINT RULES
- Exactly one A4 page only.
- No second page.
- No multi-page workbook.
- No sequence like "Exercise 1, Exercise 2, Exercise 3" unless those labels are necessary inside one coherent speaking interaction.
- Minimal writing: the page exists to provoke, support and structure speaking.
- Every visible block must do at least one of these jobs:
  1) prepare speech,
  2) create a need to speak,
  3) give one participant information another needs,
  4) change the conversation,
  5) support the listener,
  6) capture a final decision after speaking.
- Do not fill the page with decorative text or unrelated practice.

PRINT ARCHITECTURE
- Layout: ${c.printLayout}
- Support level: ${c.printSupport}
- Make it usable immediately in class.
- Design for clear printing in A4 portrait.
- Keep visual hierarchy strong and uncluttered.
- Student-facing language should be in ${c.language}.
- Teacher-only micro-notes may be tiny and clearly separated if genuinely necessary.

NO DEAD PAPER RULE
The learner should not spend the lesson silently completing boxes.
If a box can be removed without changing the speaking interaction, remove it.`;
    }else{
      formatBlock=`OUTPUT FORMAT: LIVE

Create a COMPLETE STANDALONE INTERACTIVE HTML speaking tool.
Return a single HTML document using HTML + CSS + vanilla JavaScript.
No external libraries, external APIs, microphone, camera, localStorage or internet access.

LOCKED LIVE RULES
- Interactive does NOT mean a worksheet displayed on a screen.
- Something must change because the learner or teacher acts.
- Future information should remain hidden until it is needed.
- The tool must have meaningful state changes.
- Use one coherent speaking experience, not a menu of unrelated mini-games.
- All buttons must work.
- Include Reset / Restart.
- Do not claim to assess spoken language automatically without audio input.

LIVE ARCHITECTURE
- Interaction pattern: ${c.livePattern}
- Main trigger: ${c.liveTrigger}
- Use progressive reveal, branching, hidden constraints, teacher controls or timed events only where they serve the selected mechanic.
- Provide optional Useful Language behind a Hint / Help control rather than showing a complete model answer.
- Final state should depend on earlier decisions or revealed information.
- Student-facing language should be in ${c.language}.`;
    }

    const prompt=`ROLE
You are an expert language teacher, speaking-task designer, CEFR-aware materials writer and ${c.format==="print"?"printable ESL materials designer":"front-end interaction designer"}.

CORE PRINCIPLE
Design the NEED TO SPEAK first.
Do not start from a worksheet format, grammar exercise type or decorative theme.

LEARNER PROFILE
- Age group: ${c.ageLabel}
- CEFR: ${c.cefr}
- Target language: ${c.language}
- Age guidance: ${c.guidance}
- Extra context: ${c.extraContext}

UNIVERSAL SPEAKING SCENARIO
- Scenario template: ${c.scenario}
- Scenario logic: ${c.scenarioDescription}
- Topic/content: ${c.topic}

SPEAKING MECHANICS
Use these mechanics as the interaction engine:
${mech.map(x=>"- "+x).join("\n")}

Do not merely mention the mechanics by name.
Translate each selected mechanic into something the learner actually has to DO in the conversation.

SPEAKING FUNCTIONS
The learner should practise:
${funcs.map(x=>"- "+x).join("\n")}

TARGET LANGUAGE
Integrate naturally:
${c.targetLanguage}

Do not turn the activity into controlled grammar drilling.
Target language should support the communicative goal.

PRESSURE / PROGRESSION
Make speaking more demanding through:
${press.map(x=>"- "+x).join("\n")}

The difficulty increase must come from communication, reduced support, new information, trade-offs or reaction — not from random harder vocabulary.

LISTENER ENGINE
The listener must have a real job:
${listener.map(x=>"- "+x).join("\n")}

The listener should need to listen to the speaker in order to complete that job.

COMMUNICATIVE DEPENDENCY
Build the activity so that:
- the final answer depends on what happened earlier;
- at least one participant needs information, reaction or agreement from another person;
- the learner cannot complete the task successfully by reading a prepared monologue;
- new information or another person's response can affect what the learner says next.

ANTI-FAKE-SPEAKING RULES
Avoid:
- "Talk about the topic for two minutes" with no listener goal;
- ten unrelated discussion questions;
- roleplays where both participants already know everything;
- fake choices where one answer is obviously best;
- decorative distractors;
- tasks where the listener can stop paying attention;
- long silent writing stages before speaking.

ANTI-GUESSING
- Vary option order.
- Do not always put the strongest or correct option first.
- Keep distractors / alternative options plausible.
- Avoid visual clues such as one answer being much longer.
- Require meaning, criteria, evidence or interaction to make a decision.

SCAFFOLDING
Provide only the support appropriate to ${c.cefr}.
Useful Language should support functions such as clarification, reasons, follow-up, disagreement, repair and negotiation.
Do not over-script the learner.
If support is reduced during the activity, remove it gradually.

${formatBlock}

FINAL QUALITY GATES
Before producing the material, silently verify:
1. There is a genuine reason to speak.
2. The listener has a meaningful job.
3. The learner must react to another person or new information.
4. Something can change during the interaction.
5. The final decision / outcome depends on earlier interaction.
6. The task cannot be replaced by a prepared monologue without losing its logic.
7. Target language supports the communication instead of dominating it.
8. The difficulty fits ${c.cefr} and ${c.ageLabel}.
9. The activity is usable immediately by a teacher.
10. The result follows the ${c.format==="print"?"ONE A4 PAGE ONLY":"standalone interactive HTML"} constraint exactly.

OUTPUT
${c.format==="print"
? "Produce the final one-page printable content and layout specification. Do not create extra pages."
: "Return only the complete HTML document, starting with <!doctype html>."}`;

    $("promptOutput").textContent=prompt; hasResult=true; builtSignature=JSON.stringify(config()); announce("Промпт готов. Скопируйте его в выбранный ИИ-сервис. Сам конструктор не генерирует учебный материал.");

    $("methodOutput").innerHTML=`
      <h3>Method logic</h3>
      <ul>
        <li><b>Learner:</b> ${c.ageLabel}, ${c.cefr}</li>
        <li><b>Scenario engine:</b> ${c.scenario}</li>
        <li><b>Speaking mechanics:</b> ${mech.join(" → ")}</li>
        <li><b>Functions:</b> ${funcs.join(", ")}</li>
        <li><b>Pressure:</b> ${press.join(", ")}</li>
        <li><b>Listener job:</b> ${listener.join(", ")}</li>
        <li><b>Core dependency:</b> final speaking outcome must depend on interaction, not on pre-written content.</li>
      </ul>`;

    $("specOutput").innerHTML = c.format==="print"
      ? `<h3>PRINT product spec</h3>
         <ul>
           <li>Exactly <b>1 A4 page</b>.</li>
           <li>Architecture: <b>${c.printLayout}</b>.</li>
           <li>Support: <b>${c.printSupport}</b>.</li>
           <li>One coherent speaking experience.</li>
           <li>Minimal writing; every block must support interaction.</li>
           <li>No workbook logic, no extra student page.</li>
         </ul>`
      : `<h3>LIVE product spec</h3>
         <ul>
           <li>Standalone HTML + CSS + vanilla JavaScript.</li>
           <li>Pattern: <b>${c.livePattern}</b>.</li>
           <li>Trigger: <b>${c.liveTrigger}</b>.</li>
           <li>Hidden future information where relevant.</li>
           <li>Meaningful state changes and working Reset.</li>
           <li>No fake automatic evaluation of spoken language.</li>
         </ul>`;

    $("checkOutput").innerHTML=`
      <h3>Quality checklist</h3>
      <ul>
        <li>Требование к необходимости общения включено в промпт; проверьте его в материале.</li>
        <li>✓ Listener has a job: ${listener.join(", ")}.</li>
        <li>✓ Conversation contains change / pressure: ${press.join(", ")}.</li>
        <li>✓ Mechanics create reaction: ${mech.join(", ")}.</li>
        <li>Правила anti-guessing включены в промпт. Правдоподобие вариантов требует ручной проверки.</li>
        <li>✓ Format constraint: ${c.format==="print"?"one A4 page only":"interactive, state-based HTML"}.</li>
      </ul>`;

    document.querySelector('[data-tab="prompt"]').click();
    $("resultSection").scrollIntoView({behavior:"smooth",block:"start"});
    updateQuality();
  }

  document.querySelectorAll(".age-card").forEach(b=>b.addEventListener("click",()=>{
    state.age=b.dataset.age; state.scenarioAge=state.age; state.scenarioIndex=0;
    Object.keys(showAll).forEach(key=>showAll[key]=false);
    state.selectedMechanics=new Set();state.selectedFunctions=new Set();
    state.selectedPressures=new Set(["new information"]);state.selectedListenerJobs=new Set(["ask one critical follow-up"]);
    Object.keys(selectOptions).forEach(id=>{$(id).replaceChildren();selectOptions[id].forEach(x=>$(id).add(new Option(x,x)));});
    $("cefr").value="A2";$("printLayout").value="Decision Board";$("printSupport").value=state.age==="kids"?"High":"Guided";$("livePattern").value="Progressive Reveal";$("liveTrigger").value="Teacher presses Reveal";
    refreshAgeChoices();
    announce("Варианты адаптированы для "+ages[state.age].label+". Механики и цели сброшены — выберите их для новой группы. Тема сохранена.");
    document.querySelectorAll(".age-card").forEach(x=>x.classList.toggle("active",x===b));
    renderScenarios();renderRecommended();updateQuality();
  }));

  document.querySelectorAll(".format-card").forEach(b=>b.addEventListener("click",()=>{
    state.format=b.dataset.format;
    document.querySelectorAll(".format-card").forEach(x=>x.classList.toggle("active",x===b));
    $("printOptions").classList.toggle("hidden",state.format!=="print");
    $("liveOptions").classList.toggle("hidden",state.format!=="live");
    updateQuality();
  }));

  document.querySelectorAll(".tab-btn").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll(".tab-btn").forEach(x=>x.classList.remove("active"));
    document.querySelectorAll(".result-pane").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); $("tab-"+b.dataset.tab).classList.add("active");
  }));

  $("buildBtn").addEventListener("click",buildPrompt);
  $("resetBtn").addEventListener("click",()=>{if(confirm("Очистить текущий черновик? Скачайте настройки, если хотите сохранить их.")){try{localStorage.removeItem(STORAGE);}catch{} location.reload();}});
  $("demoBtn").addEventListener("click",()=>{
    state.age="teens";state.scenarioAge="teens";state.scenarioIndex=8;
    state.selectedMechanics=new Set(["Wait, I Changed My Mind!","Listener Has a Job","Mission With Twists"]);
    state.selectedFunctions=new Set(["giving reasons","reacting to new information","changing position","maintaining conversation"]);
    state.selectedPressures=new Set(["new information","new constraint","must justify"]);
    state.selectedListenerJobs=new Set(["ask one critical follow-up","decide if convinced"]);
    state.format="live";
    document.querySelectorAll(".age-card").forEach(x=>x.classList.toggle("active",x.dataset.age==="teens"));
    document.querySelectorAll(".format-card").forEach(x=>x.classList.toggle("active",x.dataset.format==="live"));
    $("printOptions").classList.add("hidden");$("liveOptions").classList.remove("hidden");
    $("language").value="English";$("cefr").value="A2";
    $("topic").value="autumn hobbies";
    $("targetLanguage").value="giving reasons; comparatives; I think... because...; maybe; I'd rather...";
    $("extraContext").value="1-to-1. The learner gives short answers and needs meaningful reasons to react and continue speaking.";
    $("livePattern").value="Decision Revision";$("liveTrigger").value="After learner clicks Continue";
    renderScenarios();renderMechanics();renderChoicePills("functionGrid",functions,state.selectedFunctions);renderChoicePills("pressureGrid",pressures,state.selectedPressures);renderChoicePills("listenerGrid",listenerJobs,state.selectedListenerJobs);renderRecommended();updateQuality();
  });

  $("copyBtn").addEventListener("click",()=>{
    const text=$("promptOutput").textContent;
    if(!hasResult){announce("Сначала соберите промпт.");return;}
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(()=>{const old=$("copyBtn").textContent;$("copyBtn").textContent="Скопировано ✓";setTimeout(()=>$("copyBtn").textContent=old,1200)}).catch(()=>announce("Не удалось скопировать. Выделите текст промпта или скачайте .txt."));
    } else {announce("Копирование недоступно. Скачайте .txt.");}
  });

  $("downloadBtn").addEventListener("click",()=>{
    if(!hasResult){announce("Сначала соберите промпт.");return;}
    const blob=new Blob([$("promptOutput").textContent],{type:"text/plain;charset=utf-8"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="speaking-mechanics-prompt.txt";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),0);
  });

  $("downloadConfigBtn").addEventListener("click",()=>{
    const blob=new Blob([JSON.stringify(config(),null,2)],{type:"application/json;charset=utf-8"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="speaking-mechanics-config.json";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),0);
  });

  const showAll={};
  const ageChoices={
    kids:{
      mechanicsGrid:["Information Gap","Make Me Ask","Listener Has a Job","Answer Upgrade Ladder","Second Attempt","What Happens Next?","Wait, I Changed My Mind!","Make the Listener Ask"],
      functionGrid:["asking questions","giving reasons","expressing preferences","comparing options","clarifying","asking follow-up questions","reacting to new information"],
      pressureGrid:["less support","new information","missing information","new constraint","must justify"],
      listenerGrid:["choose the best option","identify missing information","ask one critical follow-up","remember key facts","check whether all criteria were met"],
      cefr:["Pre-A1","A1","A2"],printLayout:["Decision Board","Information Gap Board","Speaking Ladder","Listener Mission Sheet"],printSupport:["High","Guided"],livePattern:["Progressive Reveal","Hidden Information","Adaptive Support","Decision Revision"],liveTrigger:["After learner clicks Continue","Teacher presses Reveal","After a choice"]
    },
    teens:{
      mechanicsGrid:["Information Gap","Wait, I Changed My Mind!","Make Me Ask","Listener Has a Job","Repair the Conversation","Answer Upgrade Ladder","Conversation With Memory","Second Attempt","Hidden Constraint","Convince Me","Compromise Builder","Role Switch","What Happens Next?","Evidence-Based Speaking","Mission With Twists"],
      functionGrid:["asking questions","giving reasons","comparing options","expressing preferences","disagreeing politely","persuading","clarifying","negotiating","reacting to new information","asking follow-up questions","responding to objections","changing position","maintaining conversation"],
      pressureGrid:["less support","new information","missing information","listener disagreement","misunderstanding","new constraint","must justify","must remember previous information","more criteria / trade-offs"],
      listenerGrid:["choose the best option","find a contradiction","identify missing information","ask one critical follow-up","rank the arguments","decide if convinced","remember key facts","challenge one point","offer a compromise","check whether all criteria were met"],
      cefr:["A1","A2","B1","B2"],printLayout:["Decision Board","Conversation Map","Information Gap Board","Speaking Ladder","Roleplay Mission Sheet","Listener Mission Sheet"],printSupport:["High","Guided","Light"],livePattern:["Progressive Reveal","Branching","Hidden Information","Adaptive Support","Decision Revision","Mission / Escape"],liveTrigger:["After learner clicks Continue","Teacher presses Reveal","After a decision","After a choice"]
    }
  };
  function visibleChoice(id,name,selected){return showAll[id] || !ageChoices[state.age]?.[id] || ageChoices[state.age][id].includes(name) || selected.has(name);}
  function filterControl(id){
    const el=$(id);let bar=$("filter-"+id);
    if(!bar){bar=document.createElement("div");bar.id="filter-"+id;bar.className="age-filter";(el.tagName==="SELECT"?el.closest("label"):el).before(bar);}
    bar.replaceChildren();const text=document.createElement("span");text.textContent=showAll[id]?"Все варианты · профессиональный выбор преподавателя":"Рекомендации для "+ages[state.age].label;
    const b=document.createElement("button");b.type="button";b.className="secondary-btn";b.textContent=showAll[id]?"Только по возрасту":"Показать все";b.setAttribute("aria-expanded",String(!!showAll[id]));
    b.onclick=()=>{showAll[id]=!showAll[id];refreshAgeChoices();updateQuality();};bar.append(text,b);
  }
  const selectOptions={};
  function filterSelect(id){
    const el=$(id);if(!selectOptions[id])selectOptions[id]=Array.from(el.options).map(o=>o.value);
    filterControl(id);const current=el.value;const allowed=ageChoices[state.age]?.[id] || selectOptions[id];
    el.replaceChildren();selectOptions[id].filter(x=>showAll[id] || allowed.includes(x) || x===current).forEach(x=>el.add(new Option(x,x)));
    el.value=current;
  }
  function refreshAgeChoices(){
    renderScenarios();renderMechanics();renderChoicePills("functionGrid",functions,state.selectedFunctions);renderChoicePills("pressureGrid",pressures,state.selectedPressures);renderChoicePills("listenerGrid",listenerJobs,state.selectedListenerJobs);
    ["cefr","printLayout","printSupport","livePattern","liveTrigger"].forEach(filterSelect);
  }
  const STORAGE="speaking-mechanics-v2";
  let hasResult=false, builtSignature="";
  function announce(message){$("notice").textContent=message;}
  function syncWorkspace(){
    document.querySelectorAll(".pill,.scenario-card,.age-card,.format-card,.tab-btn").forEach(b=>b.setAttribute("aria-pressed",String(b.classList.contains("active"))));
    if(hasResult && builtSignature!==JSON.stringify(config())){hasResult=false;announce("Настройки изменились. Соберите промпт заново перед копированием или скачиванием.");}
    $("copyBtn").disabled=!hasResult;$("downloadBtn").disabled=!hasResult;
    try{localStorage.setItem(STORAGE,JSON.stringify(config()));$("saveStatus").textContent="Черновик сохранён на этом устройстве";}catch{$("saveStatus").textContent="Автосохранение недоступно — скачайте настройки .json";}
  }
  function applyConfig(c){
    if(!c || !ages[c.age] || !["print","live"].includes(c.format)) throw Error("Некорректный возраст или формат");
    const group=c.scenarioAge || c.age;
    if(!ages[group])throw Error("Неизвестная группа сценария");
    const index=ages[group].scenarios.findIndex(x=>x[0]===c.scenario);
    if(index<0) throw Error("Неизвестный сценарий");
    const lists=[["mechanics",mechanics.map(x=>x[0]),4],["functions",functions,15],["pressures",pressures,12],["listenerJobs",listenerJobs,10]];
    for(const [key,allowed,max] of lists) if(!Array.isArray(c[key]) || c[key].length>max || c[key].some(x=>!allowed.includes(x))) throw Error("Некорректное поле "+key);
    const ids=["language","cefr","topic","targetLanguage","extraContext","printLayout","printSupport","livePattern","liveTrigger"];
    for(const id of ids){const el=$(id); if(typeof c[id]!=="string" || c[id].length>20000) throw Error("Некорректное поле "+id);if(el.tagName==="SELECT" && !(selectOptions[id] || Array.from(el.options).map(o=>o.value)).includes(c[id])) throw Error("Неизвестное значение "+id);}
    state.age=c.age;state.scenarioAge=group;state.scenarioIndex=index;state.format=c.format;
    state.selectedMechanics=new Set(c.mechanics);state.selectedFunctions=new Set(c.functions);state.selectedPressures=new Set(c.pressures);state.selectedListenerJobs=new Set(c.listenerJobs);
    Object.keys(selectOptions).forEach(id=>{$(id).replaceChildren();selectOptions[id].forEach(x=>$(id).add(new Option(x,x)));});
    ids.forEach(id=>$(id).value=c[id].startsWith("[")?"":c[id]);
    document.querySelectorAll(".age-card").forEach(b=>b.classList.toggle("active",b.dataset.age===state.age));
    document.querySelectorAll(".format-card").forEach(b=>b.classList.toggle("active",b.dataset.format===state.format));
    $("printOptions").classList.toggle("hidden",state.format!=="print");$("liveOptions").classList.toggle("hidden",state.format!=="live");
    renderScenarios();renderMechanics();renderChoicePills("functionGrid",functions,state.selectedFunctions);renderChoicePills("pressureGrid",pressures,state.selectedPressures);renderChoicePills("listenerGrid",listenerJobs,state.selectedListenerJobs);renderRecommended();refreshAgeChoices();updateQuality();
  }
  document.querySelectorAll("input:not([type=file]),textarea,select").forEach(el=>el.addEventListener("input",updateQuality));
  $("importConfig").addEventListener("change",async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>200000)throw Error("Файл слишком большой");const c=JSON.parse(await file.text());applyConfig(c);announce("Настройки загружены. Соберите промпт.");}catch(err){announce("Не удалось загрузить настройки: "+err.message);}e.target.value="";});
  const randomDecks={};
  const lastRandom={};
  const RANDOM_STORAGE="speaking-random-decks-v1";
  try{
    const saved=JSON.parse(localStorage.getItem(RANDOM_STORAGE)||"{}");
    for(const age of Object.keys(ages)){
      const ids=window.SPEAKING_PRESETS[age].map(x=>x.id);
      const deck=saved.decks?.[age];
      if(Array.isArray(deck) && new Set(deck).size===deck.length && deck.every(id=>ids.includes(id)))randomDecks[age]=deck;
      if(ids.includes(saved.last?.[age]))lastRandom[age]=saved.last[age];
    }
  }catch{}
  function nextRandom(age){
    const entries=window.SPEAKING_PRESETS[age];
    if(!randomDecks[age]?.length){
      const deck=entries.map(x=>x.id);
      for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
      if(deck[deck.length-1]===lastRandom[age])[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];
      randomDecks[age]=deck;
    }
    const id=randomDecks[age].pop();lastRandom[age]=id;
    try{localStorage.setItem(RANDOM_STORAGE,JSON.stringify({decks:randomDecks,last:lastRandom}));}catch{}
    return entries.find(x=>x.id===id);
  }
  $("randomBtn").addEventListener("click",()=>{
    const age=state.age, language=$("language").value, preset=nextRandom(age);
    const c={...config(),...preset,age,scenarioAge:age,language,topic:preset.title,scenario:ages[age].scenarios[preset.scenarioIndex][0]};
    if(language!=="English")c.targetLanguage="Provide short useful phrases in "+language+" for: "+preset.functions.join(", ")+". Adapt them to "+preset.cefr+"; avoid complete model answers.";
    Object.keys(showAll).forEach(key=>showAll[key]=false);
    applyConfig(c);buildPrompt();
    $("randomStatus").textContent=ages[age].label+" · "+preset.id.split("-")[1]+"/30 · "+preset.title+" · "+preset.cefr+" · "+preset.format.toUpperCase()+". Осталось в текущем круге: "+randomDecks[age].length+". Можно изменить любые настройки.";
    announce("Случайный промпт готов: «"+preset.title+"». Он учитывает выбранный возраст. Кнопка «Ещё случайный» даст следующее решение.");
  });
  const again=document.createElement("button");again.className="secondary-btn";again.id="randomAgainBtn";again.textContent="Ещё случайный";again.addEventListener("click",()=>$("randomBtn").click());document.querySelector(".result-actions").prepend(again);
  const labels=["Ученики","Сценарий","Механики","Цель","Контент","Сложность","Слушатель","Формат","Проверка"];
  document.querySelectorAll("main > .step").forEach((el,i)=>{el.id="step-"+(i+1);const a=document.createElement("a");a.href="#"+el.id;a.textContent=(i+1)+" · "+labels[i];document.querySelector(".step-nav").append(a);});
  ["cefr","printLayout","printSupport","livePattern","liveTrigger"].forEach(id=>selectOptions[id]=Array.from($(id).options).map(o=>o.value));
  try{const saved=localStorage.getItem(STORAGE);if(saved)applyConfig(JSON.parse(saved));}catch{announce("Сохранённый черновик не удалось восстановить. Можно импортировать файл .json.");}
  renderScenarios();
  renderMechanics();
  renderChoicePills("functionGrid",functions,state.selectedFunctions);
  renderChoicePills("pressureGrid",pressures,state.selectedPressures);
  renderChoicePills("listenerGrid",listenerJobs,state.selectedListenerJobs);
  renderRecommended();
  refreshAgeChoices();
  updateQuality();
})();
