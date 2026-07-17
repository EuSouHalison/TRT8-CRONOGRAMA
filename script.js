const phases = {
  weeks1: [
    {
      title: "Semana 1", meta: "Fundamentos + diagnóstico",
      days: [
        ["Seg", "Trabalho: relação de emprego e sujeitos", "CLT 2º–6º + 35 questões"],
        ["Ter", "Processo: competência da Justiça do Trabalho", "CF 114 + CLT + 35 questões"],
        ["Qua", "Português: interpretação e reescrita", "40 questões FCC"],
        ["Qui", "Trabalho: jornada e intervalos", "CLT 58–75 + 40 questões"],
        ["Sex", "Constitucional: direitos fundamentais", "CF 5º + 35 questões"],
        ["Sáb", "Administrativo: atos e poderes", "Teoria objetiva + 50 questões"],
        ["Dom", "Revisão 24h/7d + caderno de erros", "2h leves + lei seca"]
      ]
    },
    {
      title: "Semana 2", meta: "Contratos + atos processuais",
      days: [
        ["Seg", "Trabalho: contrato, alteração e suspensão", "CLT 442–476-A + 40 questões"],
        ["Ter", "Processo: partes, representação e prazos", "CLT 791–798 + 35 questões"],
        ["Qua", "Português: pontuação e coesão", "45 questões FCC"],
        ["Qui", "Trabalho: salário e remuneração", "CLT 457–467 + 40 questões"],
        ["Sex", "Constitucional: Administração Pública", "CF 37–41 + 35 questões"],
        ["Sáb", "Administrativo: agentes e responsabilidade civil", "50 questões"],
        ["Dom", "Mini-simulado + correção profunda", "60 questões"]
      ]
    }
  ],
  weeks2: [
    {
      title: "Semana 3", meta: "Lei seca e prática",
      days: [
        ["Seg", "Trabalho: férias e repousos", "CLT 129–153 + 45 questões"],
        ["Ter", "Processo: petição inicial, defesa e audiência", "CLT 840–852 + 45 questões"],
        ["Qua", "Português: concordância e regência", "50 questões FCC"],
        ["Qui", "Trabalho: término do contrato", "CLT 477–486 + 45 questões"],
        ["Sex", "Constitucional: Poder Judiciário e CNJ", "CF 92–126 + 40 questões"],
        ["Sáb", "Simulado completo 1", "Prova + correção"],
        ["Dom", "Revisão orientada pelos erros", "Lei seca + flashcards"]
      ]
    },
    {
      title: "Semana 4", meta: "Execução e jurisprudência",
      days: [
        ["Seg", "Trabalho: estabilidade, FGTS e prescrição", "Lei + súmulas + 45 questões"],
        ["Ter", "Processo: provas, sentença e coisa julgada", "CLT/CPC + 45 questões"],
        ["Qua", "Português: crase, pronomes e colocação", "50 questões FCC"],
        ["Qui", "Trabalho: terceirização, teletrabalho e intermitente", "Lei + precedentes"],
        ["Sex", "Administrativo: licitações e contratos", "Lei 14.133 + 45 questões"],
        ["Sáb", "Simulado completo 2", "Meta: superar semana anterior"],
        ["Dom", "Súmulas e OJs prioritárias do TST", "Revisão ativa"]
      ]
    },
    {
      title: "Semana 5", meta: "Recursos + fechamento do núcleo",
      days: [
        ["Seg", "Trabalho: segurança, proteção e normas especiais", "Seleção de alta incidência"],
        ["Ter", "Processo: recursos trabalhistas", "CLT 893–902 + 50 questões"],
        ["Qua", "Português: revisão geral por erros", "60 questões FCC"],
        ["Qui", "Processo: liquidação e execução", "CLT 876–892 + 50 questões"],
        ["Sex", "Administrativo: improbidade e processo administrativo", "45 questões"],
        ["Sáb", "Simulado completo 3", "Controle de tempo real"],
        ["Dom", "Revisão acumulada das semanas 1–5", "Caderno de erros"]
      ]
    }
  ],
  weeks3: [
    {
      title: "Semana 6", meta: "Ataque por questões",
      days: [
        ["Seg", "Bloco FCC: Direito do Trabalho", "80 questões + correção"],
        ["Ter", "Bloco FCC: Processo do Trabalho", "80 questões + correção"],
        ["Qua", "Bloco FCC: Português", "70 questões + correção"],
        ["Qui", "Bloco FCC: Constitucional", "60 questões + correção"],
        ["Sex", "Bloco FCC: Administrativo", "60 questões + correção"],
        ["Sáb", "Simulado completo 4", "Reproduzir horário da prova"],
        ["Dom", "Revisão dos 30 erros mais graves", "Sem teoria nova"]
      ]
    },
    {
      title: "Semana 7", meta: "Pressão de prova",
      days: [
        ["Seg", "CLT: artigos marcados + questões erradas", "Revisão cirúrgica"],
        ["Ter", "Processo: prazos, recursos e execução", "60 questões"],
        ["Qua", "Português: prova FCC completa", "Tempo cronometrado"],
        ["Qui", "CF: arts. 5º, 37–41, 92–126", "Lei seca + 50 questões"],
        ["Sex", "Lei 8.112 e Lei 14.133: pontos críticos", "Mapa de exceções"],
        ["Sáb", "Simulado completo 5", "Meta: nota de classificação"],
        ["Dom", "Correção + descanso estratégico", "Sono e recuperação"]
      ]
    },
    {
      title: "Semana 8", meta: "Lapidação final",
      days: [
        ["Seg", "Top 50 erros de Trabalho", "Lei seca correspondente"],
        ["Ter", "Top 50 erros de Processo", "Lei seca correspondente"],
        ["Qua", "Português + matérias básicas", "Revisão de alto retorno"],
        ["Qui", "Súmulas, OJs, prazos e competências", "Flashcards finais"],
        ["Sex", "Simulado final reduzido", "Sem exaustão"],
        ["Sáb", "Revisão leve e logística", "Documentos, local e horário"],
        ["Dom", "MISSÃO: PROVA", "Calma, método e execução"]
      ]
    }
  ]
};

const stateKey = "trt8-war-plan-progress";
let completed = new Set(JSON.parse(localStorage.getItem(stateKey) || "[]"));

function renderWeeks(containerId, weeks, phaseColor){
  const container = document.getElementById(containerId);
  container.innerHTML = weeks.map((week, wi) => `
    <article class="week-card" style="--phase-color:${phaseColor}">
      <div class="week-head"><div><h4>${week.title}</h4><span>${week.meta}</span></div><span>${week.days.length} missões</span></div>
      <div class="day-list">
        ${week.days.map((day, di) => {
          const id = `${containerId}-${wi}-${di}`;
          const done = completed.has(id);
          return `<div class="day ${done ? "done" : ""}" data-id="${id}" tabindex="0" role="checkbox" aria-checked="${done}">
            <span class="day-name">${day[0]}</span>
            <div><strong>${day[1]}</strong><small>${day[2]}</small></div>
            <span class="check">${done ? "✓" : ""}</span>
          </div>`;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderAll(){
  renderWeeks("weeks1", phases.weeks1, "#67e8f9");
  renderWeeks("weeks2", phases.weeks2, "#ffcf70");
  renderWeeks("weeks3", phases.weeks3, "#c8ff53");
  bindDays();
  updateProgress();
}

function bindDays(){
  document.querySelectorAll(".day").forEach(el => {
    const toggle = () => {
      const id = el.dataset.id;
      completed.has(id) ? completed.delete(id) : completed.add(id);
      localStorage.setItem(stateKey, JSON.stringify([...completed]));
      renderAll();
    };
    el.addEventListener("click", toggle);
    el.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){e.preventDefault();toggle();}});
  });
}

function updateProgress(){
  const total = Object.values(phases).flat().reduce((sum,w)=>sum+w.days.length,0);
  const percent = Math.round((completed.size / total) * 100);
  document.getElementById("progressText").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
  const messages = [
    [0,"Marque as missões concluídas para acompanhar sua evolução."],
    [20,"Base em construção. Continue acumulando acertos."],
    [45,"Você já atravessou a parte mais difícil: começar."],
    [70,"Reta forte. Agora os erros valem mais que conteúdo novo."],
    [90,"Zona de prova. Proteja o sono e mantenha a precisão."],
    [100,"Plano concluído. Entre na prova para executar."]
  ];
  document.getElementById("progressMessage").textContent = [...messages].reverse().find(([p])=>percent>=p)[1];
}

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".phase").forEach(p=>p.classList.toggle("hidden", filter!=="all" && p.dataset.phase!==filter));
  });
});

document.getElementById("resetBtn").addEventListener("click",()=>{
  if(confirm("Deseja apagar todo o progresso salvo?")){
    completed.clear(); localStorage.removeItem(stateKey); renderAll();
  }
});

document.getElementById("todayBtn").addEventListener("click",()=>{
  document.querySelectorAll(".today").forEach(el=>el.classList.remove("today"));
  const days = [...document.querySelectorAll(".day")];
  const target = days.find(d=>!d.classList.contains("done")) || days[days.length-1];
  target.classList.add("today");
  target.scrollIntoView({behavior:"smooth",block:"center"});
});

renderAll();