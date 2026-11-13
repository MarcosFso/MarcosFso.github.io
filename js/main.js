/* =========================================================
   Portfólio — Marcos Ribeiro
   Para editar textos, links e projetos, mexa só em DADOS abaixo.
   ========================================================= */

const ICONES = 'assets/icons'; // logos salvos na própria pasta (origem: projeto Devicon, licença MIT)

// nome -> [pasta/arquivo, rótulo, precisa inverter (logo preto)]
const TEC = {
  javascript:  ['javascript/javascript-original', 'JavaScript'],
  typescript:  ['typescript/typescript-original', 'TypeScript'],
  python:      ['python/python-original', 'Python'],
  java:        ['java/java-original', 'Java'],
  html:        ['html5/html5-original', 'HTML5'],
  css:         ['css3/css3-original', 'CSS3'],
  react:       ['react/react-original', 'React'],
  vite:        ['vitejs/vitejs-original', 'Vite'],
  spring:      ['spring/spring-original', 'Spring Boot'],
  flask:       ['flask/flask-original', 'Flask', true],
  fastapi:     ['fastapi/fastapi-original', 'FastAPI'],
  node:        ['nodejs/nodejs-original', 'Node.js'],
  kafka:       ['apachekafka/apachekafka-original', 'Kafka', true],
  supabase:    ['supabase/supabase-original', 'Supabase'],
  postgres:    ['postgresql/postgresql-original', 'PostgreSQL'],
  mysql:       ['mysql/mysql-original', 'MySQL'],
  sqlserver:   ['microsoftsqlserver/microsoftsqlserver-plain', 'SQL Server'],
  redis:       ['redis/redis-original', 'Redis'],
  git:         ['git/git-original', 'Git'],
  github:      ['github/github-original', 'GitHub', true],
  actions:     ['githubactions/githubactions-original', 'GitHub Actions'],
  vercel:      ['vercel/vercel-original', 'Vercel', true],
  azure:       ['azure/azure-original', 'Azure'],
  docker:      ['docker/docker-original', 'Docker'],
  k8s:         ['kubernetes/kubernetes-plain', 'Kubernetes'],
  vitest:      ['vitest/vitest-original', 'Vitest'],
  opencv:      ['opencv/opencv-original', 'OpenCV'],
};

const DADOS = {
  frases: [
    'Desenvolvedor Full Stack Júnior',
    'Java, Spring Boot e Kafka',
    'React e TypeScript',
    'Sistemas reais, no ar e testados',
  ],

  grupos: [
    { nome: 'Linguagens', itens: ['typescript', 'javascript', 'java', 'python', 'html', 'css'] },
    { nome: 'Front-end', itens: ['react', 'vite'] },
    { nome: 'Back-end e frameworks', itens: ['spring', 'node', 'fastapi', 'flask', 'supabase', 'kafka'] },
    { nome: 'Bancos de dados', itens: ['postgres', 'redis', 'mysql', 'sqlserver'] },
    { nome: 'DevOps, nuvem e testes', itens: ['docker', 'k8s', 'azure', 'actions', 'vercel', 'git', 'github', 'vitest'] },
    { nome: 'Visão computacional', itens: ['opencv'] },
  ],

  projetos: [
    {
      destaque: true,
      selo: 'Destaque · No ar na nuvem',
      nome: 'CobraAí',
      papel: 'Projeto individual · Código aberto · Azure e Vercel',
      desc: 'Sistema de cobranças multiempresa para pequenas empresas, feito como arquitetura orientada a eventos: três serviços em três linguagens conversando por Kafka, com demonstração publicada na nuvem.',
      demo: { src: 'assets/projetos/cobraai-demo.gif', alt: 'Demonstração do CobraAí em 40 segundos: painel, previsão de caixa, nova cobrança e clientes com risco' },
      imagens: [
        { src: 'assets/projetos/cobraai-painel.jpg', alt: 'Painel do CobraAí com gráfico de cobranças por mês' },
        { src: 'assets/projetos/cobraai-previsao.jpg', alt: 'Previsão de caixa de 3 meses no CobraAí' },
        { src: 'assets/projetos/cobraai-risco.jpg', alt: 'Lista de clientes com score de risco de inadimplência' },
      ],
      pontos: [
        '<b>Kafka na prática:</b> Transactional Outbox (nenhum evento se perde), consumidores idempotentes e ordem garantida por chave. Relatórios e avisos atualizam em cerca de 2 segundos e podem ser reconstruídos a partir dos eventos.',
        '<b>Três serviços e um produto de verdade:</b> cobranças em Java 21 e Spring Boot, relatórios em Python (FastAPI e Redis), avisos em Node.js e TypeScript, site em React. Tem cobranças mensais, equipe com papéis, score de risco e previsão de caixa.',
        '<b>Segurança:</b> JWT compartilhado entre os serviços, isolamento por empresa (a empresa vem do token, nunca do pedido) e limite de tentativas no login. Um teste com duas empresas e tokens forjados confirma que nenhum dado vaza.',
        '<b>Qualidade e nuvem:</b> cerca de 140 testes automatizados e cerca de 100 verificações de ponta a ponta, CI por serviço no GitHub Actions com CodeQL e Dependabot, Docker Compose, Caddy com HTTPS e uma VM no Azure que liga sob demanda. O README explica as limitações e as decisões técnicas.',
      ],
      tecs: ['java', 'spring', 'kafka', 'python', 'fastapi', 'node', 'typescript', 'react', 'postgres', 'redis', 'docker', 'k8s', 'azure', 'actions'],
      links: [
        { txt: 'Ver demonstração ao vivo', url: 'https://cobraai-wake.vercel.app', cheio: true },
        { txt: 'Código no GitHub', url: 'https://github.com/MarcosFso/cobraai' },
      ],
      nota: 'A demonstração roda em crédito de estudante e liga sob demanda: o primeiro acesso leva cerca de 1 minuto. Clique em "Entrar como visitante".',
    },
    {
      destaque: true,
      selo: 'Em produção',
      nome: 'Verde Prime',
      papel: 'Projeto individual · Sistema real para uma consultoria ambiental',
      desc: 'Sistema web que substituiu o controle manual de fichas de clientes e processos de Cadastro Ambiental Rural (CAR) por um cadastro único, com financeiro, anexos privados e recibos em PDF.',
      imagens: [
        { src: 'assets/projetos/verdeprime-01-fichas.jpg', alt: 'Verde Prime: painel com a lista de fichas e o resumo financeiro (dados de demonstração)' },
        { src: 'assets/projetos/verdeprime-02-ficha.jpg', alt: 'Verde Prime: ficha técnica de um imóvel rural, com seções e progresso (dados fictícios)' },
        { src: 'assets/projetos/verdeprime-03-financeiro.jpg', alt: 'Verde Prime: painel financeiro com gráficos (dados de demonstração)' },
      ],
      pontos: [
        '<b>De ponta a ponta:</b> React e TypeScript estrito (migrado de JavaScript, com cliente Supabase tipado a partir do banco), Vite e PWA, com back-end no Supabase.',
        '<b>Segurança:</b> perfis de administrador, Row Level Security e termos de uso (LGPD). Uma auditoria minha corrigiu uma falha de escalada de privilégio e injeção de HTML nos PDFs.',
        '<b>Qualidade e DevOps:</b> 39 testes (Vitest), CI/CD no GitHub Actions (tipos, lint, testes e build), deploy automático na Vercel e backup diário criptografado.',
      ],
      tecs: ['typescript', 'react', 'vite', 'supabase', 'postgres', 'vitest', 'actions', 'vercel'],
      links: [
        { txt: 'Ver online', url: 'https://verde-prime.vercel.app', cheio: true },
        { txt: 'Código no GitHub', url: 'https://github.com/MarcosFso/verde-prime' },
      ],
      nota: 'Os prints usam uma conta de demonstração, com dados fictícios. O sistema real guarda dados de clientes da empresa.',
    },
    {
      destaque: true,
      selo: 'Em produção',
      nome: 'Agro Ambiental · Protocolos de Georreferenciamento',
      papel: 'Projeto individual · Sistema real para empresa de georreferenciamento e topografia',
      desc: 'Sistema para acompanhar protocolos de georreferenciamento e certificação (INCRA/SIGEF): clientes com várias fichas, cronograma com status automático, histórico de alterações, lixeira e financeiro com gráficos.',
      pontos: [
        '<b>Segurança:</b> sessão em cookie HttpOnly assinado (JWT), perfis de administrador e operador, bloqueio após tentativas erradas, Row Level Security e cabeçalhos CSP e HSTS.',
        '<b>Qualidade:</b> 72 testes automatizados (Node.js test runner) e deploy automático.',
        '<b>Operação:</b> backup diário com retenção de 30 dias e conferência automática, e monitoramento a cada 3 horas com alerta por e-mail.',
      ],
      tecs: ['javascript', 'vite', 'node', 'supabase', 'postgres', 'actions', 'vercel'],
      links: [],
      privado: 'Código privado (acesso sob solicitação). Sistema de uso interno da empresa.',
      nota: 'Sem prints neste portfólio: o sistema está em produção e só tem dados reais de clientes, sem dados fictícios cadastrados.',
    },
    {
      selo: 'Projeto em equipe · Faculdade',
      nome: 'SpeedVision',
      papel: 'Monitoramento e estimativa de velocidade veicular',
      desc: 'Simula um radar eletrônico: processa vídeos de câmeras de rodovias, detecta os veículos com YOLO e calcula a velocidade entre dois pontos de referência no vídeo.',
      imagens: [
        { src: 'assets/projetos/speedvision-radar.jpg', alt: 'SpeedVision detectando carros numa rodovia e calculando a velocidade de cada um entre duas linhas' },
      ],
      pontos: [
        '<b>Visão computacional</b> com Python, OpenCV e YOLO para detectar cada veículo e dar um ID a ele.',
        '<b>Limite configurável:</b> cada veículo é classificado como multado ou não, com relatório para download.',
        '<b>Painel web</b> (HTML, CSS e JavaScript) em tempo real, integrado ao back-end Python por API.',
      ],
      tecs: ['python', 'opencv', 'flask', 'html', 'css', 'javascript'],
      links: [{ txt: 'Código no GitHub', url: 'https://github.com/MarcosFso/SpeedVision', cheio: true }],
    },
  ],

  trajetoria: [
    {
      quando: 'Previsão de conclusão: dez/2028',
      titulo: 'Bacharelado em Sistemas de Informação',
      onde: 'Universidade de Uberaba (Uniube) · 4º período em andamento',
      itens: ['Lógica de programação, estruturas de dados e algoritmos.'],
    },
    {
      quando: '2026',
      titulo: 'Cursos e certificações',
      onde: 'Fundação Bradesco (Escola Virtual) e Google Cloud',
      itens: [
        'Python Básico (18h) · Soluções de IA no GitHub (15h) · Administrando Banco de Dados (15h)',
        'Programação Orientada a Objetos (8h) · Fundamentos de TI (7h) · Power BI (9h)',
        'Google Cloud: Construa com o Gemini (2h)',
      ],
    },
    {
      quando: '07/2023 – 11/2024',
      titulo: 'Office Boy',
      onde: 'Contabilidade Bandeirantes · Formoso, MG',
      itens: [
        'Protocolo de documentos e apoio na baixa de notas no sistema interno.',
        'Responsabilidade, organização e atenção a prazos, competências que levo para os projetos de TI.',
      ],
    },
    {
      quando: 'Em andamento',
      titulo: 'Inglês intermediário (B1)',
      onde: 'CCAA',
      itens: ['Leitura de documentação técnica em inglês.'],
    },
  ],

  // Filtro dos projetos: rótulo, tecnologias que contam e logo
  filtros: [
    { nome: 'Todos', chaves: null },
    { nome: 'Java', chaves: ['java'], icone: 'java' },
    { nome: 'Python', chaves: ['python'], icone: 'python' },
    { nome: 'JavaScript / TS', chaves: ['javascript', 'typescript'], icone: 'javascript' },
    { nome: 'React', chaves: ['react'], icone: 'react' },
    { nome: 'Kafka', chaves: ['kafka'], icone: 'kafka' },
    { nome: 'Supabase', chaves: ['supabase'], icone: 'supabase' },
  ],

  // Seção "estudando agora" (edite à vontade: icone = chave de TEC ou um emoji em "emoji")
  aprendendo: [
    { emoji: '🎓', titulo: 'Na faculdade · 4º período', texto: 'Processamento de Imagens, Projeto de Software I, Engenharia de Software, Redes de Computadores I, Direito Digital e Estrutura de Dados I.', nivel: 'Cursando' },
    { icone: 'kafka', titulo: 'Kafka e eventos', texto: 'Aprofundando em eventos com o CobraAí: outbox, idempotência, ordem por chave e reprocessamento.', nivel: 'Praticando' },
    { icone: 'spring', titulo: 'Java e Spring Boot', texto: 'Spring Security, JPA, Flyway e testes com Testcontainers no CobraAí, evoluindo em boas práticas de API REST.', nivel: 'Praticando' },
    { emoji: '🧪', titulo: 'Testes automatizados', texto: 'JUnit e Mockito para testes de unidade em Java, junto com Testcontainers nos testes de integração.', nivel: 'Praticando' },
    { icone: 'actions', titulo: 'Git, GitHub Actions e Docker', texto: 'Fluxo de branches e pull requests, CI/CD com GitHub Actions e aplicações em contêineres com Docker Compose.', nivel: 'Praticando' },
    { emoji: '🧩', titulo: 'Algoritmos e estruturas de dados', texto: 'Listas, pilhas, filas, árvores e complexidade, ligados à matéria de Estrutura de Dados I e à preparação para processos seletivos.', nivel: 'Estudando' },
    { emoji: '☁️', titulo: 'Nuvem (Azure e Google Cloud)', texto: 'Já publiquei o CobraAí numa VM do Azure com HTTPS. Agora estudando serviços gerenciados e o curso de Gemini da Google Cloud.', nivel: 'Estudando' },
    { icone: 'github', titulo: 'IA no desenvolvimento', texto: 'Soluções de IA no GitHub e Gemini como apoio, sempre com revisão crítica do que é gerado.', nivel: 'Explorando' },
    { emoji: '🌐', titulo: 'Inglês técnico', texto: 'Nível B1 no CCAA, lendo documentação em inglês e buscando chegar ao B2.', nivel: 'Em andamento' },
  ],


  email: 'mfilhofso@gmail.com',
  whatsapp: '5538999627596', // código do país + DDD + número, só dígitos
  mensagemWhats: 'Olá, Marcos! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
};

/* ------------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;

function img(chave, classe = '') {
  const t = TEC[chave];
  const src = `${ICONES}/${t[0].split('/').pop()}.svg`;
  return `<img src="${src}" alt="" loading="lazy" class="${t[2] ? 'inv' : ''} ${classe}" onerror="this.outerHTML='<span class=&quot;sem-logo&quot;>${t[1].slice(0, 2)}</span>'">`;
}

/* ---------- Render ---------- */
$('#grupos-tec').innerHTML = DADOS.grupos.map(g => `
  <div class="grupo revelar">
    <h3>${g.nome}</h3>
    <div class="tec-grade">
      ${g.itens.map(k => `<div class="tec">${img(k)}<span>${TEC[k][1]}</span></div>`).join('')}
    </div>
  </div>`).join('');

$('#lista-projetos').innerHTML = DADOS.projetos.map(p => `
  <article class="proj revelar">
    <div class="proj-topo"><span class="selo ${p.destaque ? 'dest' : ''} ${/no ar|produção/i.test(p.selo) ? 'vivo' : ''}">${p.selo}</span></div>
    <h3>${p.nome}</h3>
    <p class="papel">${p.papel}</p>
    <p class="desc">${p.desc}</p>
    ${p.demo ? `<a class="demo-gif" href="${p.demo.src}" target="_blank" rel="noopener"><img src="${p.demo.src}" alt="${p.demo.alt}" loading="lazy"></a>` : ''}
    ${p.imagens ? `<div class="galeria">${p.imagens.map(i => `<a href="${i.src}" target="_blank" rel="noopener"><img src="${i.src}" alt="${i.alt}" loading="lazy"></a>`).join('')}</div>` : ''}
    <ul class="pontos">${p.pontos.map(x => `<li>${x}</li>`).join('')}</ul>
    <div class="proj-tecs">${p.tecs.map(k => `<span class="chip">${img(k)}${TEC[k][1]}</span>`).join('')}</div>
    <div class="proj-links">
      ${p.links.map(l => `<a class="link ${l.cheio ? 'cheio' : ''}" href="${l.url}" target="_blank" rel="noopener">${l.txt} <span aria-hidden="true">↗</span></a>`).join('')}
      ${p.privado ? `<span class="privado">🔒 ${p.privado}</span>` : ''}
    </div>
    ${p.nota ? `<p class="nota-proj">ℹ️ ${p.nota}</p>` : ''}
  </article>`).join('');

/* Filtro de projetos */
const barra = $('#filtros');
barra.innerHTML = DADOS.filtros.map((f, i) =>
  `<button class="filtro" data-i="${i}" aria-pressed="${i === 0}">${f.icone ? img(f.icone) : ''}${f.nome}</button>`).join('');
barra.addEventListener('click', e => {
  const b = e.target.closest('.filtro'); if (!b) return;
  const f = DADOS.filtros[+b.dataset.i];
  $$('.filtro', barra).forEach(x => x.setAttribute('aria-pressed', x === b));
  $$('.proj').forEach((card, idx) => {
    const tecs = DADOS.projetos[idx].tecs;
    const mostra = !f.chaves || f.chaves.some(c => tecs.includes(c));
    card.classList.toggle('some', !mostra);
    if (mostra) { card.classList.remove('entrando'); void card.offsetWidth; card.classList.add('entrando'); }
  });
});

$('#lista-aprende').innerHTML = DADOS.aprendendo.map(a => `
  <div class="aprende-card revelar">
    <div class="ic">${a.icone ? img(a.icone) : a.emoji}</div>
    <h3>${a.titulo}</h3>
    <p>${a.texto}</p>
    <span class="nivel">${a.nivel}</span>
  </div>`).join('');

$('#linha-tempo').innerHTML = DADOS.trajetoria.map(m => `
  <div class="marco revelar">
    <span class="quando">${m.quando}</span>
    <h3>${m.titulo}</h3>
    <p class="onde">${m.onde}</p>
    <ul>${m.itens.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`).join('');

$('#ano').textContent = new Date().getFullYear();
$('#link-email').href = 'mailto:' + DADOS.email;
$('#link-whats').href = `https://wa.me/${DADOS.whatsapp}?text=${encodeURIComponent(DADOS.mensagemWhats)}`;

/* ---------- Digitação ---------- */
(function digitar() {
  const alvo = $('#digitado');
  if (reduzido) { alvo.textContent = DADOS.frases[0]; return; }
  let f = 0, i = 0, apagando = false;
  (function passo() {
    const frase = DADOS.frases[f];
    alvo.textContent = frase.slice(0, i);
    let espera = apagando ? 28 : 65;
    if (!apagando && i === frase.length) { apagando = true; espera = 1700; }
    else if (apagando && i === 0) { apagando = false; f = (f + 1) % DADOS.frases.length; espera = 350; }
    else i += apagando ? -1 : 1;
    setTimeout(passo, espera);
  })();
})();

/* ---------- Estrelas ---------- */
function desenharEstrelas() {
  const c = $('#estrelas'), ctx = c.getContext('2d');
  let w, h, est = [];
  const dpr = Math.min(devicePixelRatio || 1, 2);
  function medir() {
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((w * h) / 9000);
    est = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h * .8,
      r: Math.random() * 1.4 + .3, f: Math.random() * Math.PI * 2, v: Math.random() * .02 + .005,
    }));
  }
  const meteoros = [];
  let proximo = performance.now() + 2500;
  function quadro() {
    ctx.clearRect(0, 0, w, h);
    const agora = performance.now();
    if (!reduzido && agora > proximo) {
      meteoros.push({ x: w * (.35 + Math.random() * .65), y: Math.random() * h * .3, vx: -(6 + Math.random() * 4), vy: 2.6 + Math.random() * 2, vida: 1 });
      proximo = agora + 3500 + Math.random() * 5000;
    }
    for (let i = meteoros.length - 1; i >= 0; i--) {
      const m = meteoros[i];
      m.x += m.vx; m.y += m.vy; m.vida -= .014;
      if (m.vida <= 0) { meteoros.splice(i, 1); continue; }
      const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 9, m.y - m.vy * 9);
      g.addColorStop(0, `rgba(180,255,240,${m.vida})`); g.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * 9, m.y - m.vy * 9); ctx.stroke();
    }
    for (const s of est) {
      s.f += s.v;
      const a = reduzido ? .7 : .35 + .65 * Math.abs(Math.sin(s.f));
      ctx.globalAlpha = a;
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduzido) requestAnimationFrame(quadro);
  }
  medir(); quadro();
  addEventListener('resize', () => { medir(); if (reduzido) quadro(); });
}

/* ---------- Colinas em paralaxe ---------- */
function paralaxe() {
  if (reduzido) return;
  const c = [$('.c1'), $('.c2'), $('.c3')];
  const fator = [-0.12, -0.06, 0];
  addEventListener('scroll', () => {
    const y = Math.min(scrollY, innerHeight);
    c.forEach((el, i) => el.style.transform = `translateY(${y * -fator[i] * .6}px)`);
    $('.aurora').style.transform = `translateY(${y * .15}px)`;
  }, { passive: true });
}

/* ---------- Topo, menu mobile ---------- */
const topo = $('#topo');
addEventListener('scroll', () => topo.classList.toggle('rolou', scrollY > 24), { passive: true });
const hamb = $('#hamb'), menu = $('#menu');
hamb.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  hamb.setAttribute('aria-expanded', aberto);
});
$$('#menu a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('aberto'); hamb.setAttribute('aria-expanded', false); }));
/* ---------- Revelar ao rolar + contadores ---------- */
function contar(el) {
  const alvo = +el.dataset.alvo, suf = el.dataset.sufixo || '';
  if (reduzido) { el.textContent = alvo + suf; return; }
  const ini = performance.now(), dur = 1200;
  (function q(t) {
    const p = Math.min((t - ini) / dur, 1);
    el.textContent = Math.round(alvo * (1 - Math.pow(1 - p, 3))) + suf;
    if (p < 1) requestAnimationFrame(q);
  })(ini);
}
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('visivel');
  $$('[data-alvo]', e.target).forEach(contar);
  obs.unobserve(e.target);
}), { threshold: .12 });
$$('.revelar').forEach(el => obs.observe(el));

/* ---------- Brilho que segue o mouse nos cards ---------- */
document.addEventListener('pointermove', e => {
  const card = e.target.closest && e.target.closest('.proj, .num, .aprende-card, .sobre-cards li, .marco');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  card.style.setProperty('--my', (e.clientY - r.top) + 'px');
}, { passive: true });

desenharEstrelas();
paralaxe();

/* =========================================================
   VERSÃO 2: recursos extras
   ========================================================= */

/* Faixa de logos rolando */
(function faixa() {
  const ordem = ['java', 'spring', 'kafka', 'python', 'fastapi', 'node', 'typescript', 'react', 'postgres', 'redis', 'docker', 'k8s', 'azure', 'actions', 'git', 'vercel', 'supabase', 'vite'];
  const itens = ordem.map(k => `<span class="faixa-item">${img(k)}${TEC[k][1]}</span>`).join('');
  $('#faixa-logos').innerHTML = itens + itens; // duas cópias: o loop fica contínuo
})();

/* GIF da demonstração no início: carrega depois da página, para não pesar */
addEventListener('load', () => {
  const g = $('#hero-gif');
  if (!g || reduzido) return;
  const tmp = new Image();
  tmp.onload = () => { g.src = g.dataset.gif; };
  tmp.src = g.dataset.gif;
});

/* Janela do CobraAí inclina com o mouse */
(function inclinar() {
  const area = $('#hero-visual'), j = $('#janela');
  if (!area || !j || reduzido || !matchMedia('(hover: hover)').matches) return;
  area.addEventListener('pointermove', e => {
    const r = area.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    j.style.setProperty('--ry', (-9 + x * 14) + 'deg');
    j.style.setProperty('--rx', (4 - y * 10) + 'deg');
  });
  area.addEventListener('pointerleave', () => { j.style.removeProperty('--ry'); j.style.removeProperty('--rx'); });
})();

/* Barra de progresso, seção ativa, botão do WhatsApp e brilho do mouse */
(function extras() {
  const barra = $('#progresso'), whats = $('#whats-flut');
  whats.href = `https://wa.me/${DADOS.whatsapp}?text=${encodeURIComponent(DADOS.mensagemWhats)}`;
  const contato = $('#contato');
  function ao_rolar() {
    const total = document.documentElement.scrollHeight - innerHeight;
    barra.style.transform = `scaleX(${total > 0 ? Math.min(scrollY / total, 1) : 0})`;
    const rc = contato.getBoundingClientRect();
    const naContato = rc.top < innerHeight * .6;
    whats.classList.toggle('mostra', scrollY > innerHeight * .7 && !naContato);
  }
  addEventListener('scroll', ao_rolar, { passive: true }); ao_rolar();

  const links = $$('#menu a');
  const secoes = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  const o = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  secoes.forEach(sc => o.observe(sc));

  const brilho = $('#brilho');
  if (matchMedia('(hover: hover)').matches && !reduzido) {
    addEventListener('pointermove', e => {
      brilho.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      brilho.classList.add('ativo');
    }, { passive: true });
    document.addEventListener('pointerleave', () => brilho.classList.remove('ativo'));
  }
})();

/* Diagrama: respeita "menos movimento" */
if (reduzido) { const sv = $('#arq-svg'); if (sv && sv.pauseAnimations) sv.pauseAnimations(); }

/* Terminal que digita sozinho quando aparece na tela */
(function terminal() {
  const corpo = $('#term-corpo'), caixa = $('#terminal');
  if (!corpo) return;
  const roteiro = [
    ['cmd', 'docker compose up --build'],
    ['out', '<span class="ok">✔</span> postgres  <span class="ok">✔</span> kafka  <span class="ok">✔</span> billing  <span class="ok">✔</span> report  <span class="ok">✔</span> notification'],
    ['cmd', 'cd services/billing && mvn verify'],
    ['out', 'Tests run: <span class="ok">57</span>, Failures: 0, Errors: 0'],
    ['out', '<span class="ok">BUILD SUCCESS</span>'],
    ['cmd', 'cd ../report && pytest -q'],
    ['out', '<span class="ok">34 passed</span>'],
    ['cmd', 'cd ../notification && npm test'],
    ['out', '<span class="ok">13 passed</span>'],
    ['cmd', 'cd ../../web && npm test'],
    ['out', '<span class="ok">32 passed</span>  <span class="dim"># e cerca de 100 verificações de ponta a ponta</span>'],
  ];
  const caret = '<span class="caret"></span>';
  function pintarTudo() {
    corpo.innerHTML = roteiro.map(([t, x]) => t === 'cmd' ? `<span class="pr">$</span> <span class="cmd">${x}</span>` : x).join('\n') + '\n<span class="pr">$</span> ' + caret;
  }
  if (reduzido) { pintarTudo(); return; }
  let rodou = false;
  new IntersectionObserver((es, ob) => {
    if (!es[0].isIntersecting || rodou) return;
    rodou = true; ob.disconnect();
    let html = '', li = 0;
    (function linha() {
      if (li >= roteiro.length) { corpo.innerHTML = html + '<span class="pr">$</span> ' + caret; return; }
      const [t, x] = roteiro[li++];
      if (t === 'out') { html += x + '\n'; corpo.innerHTML = html + caret; return setTimeout(linha, 420); }
      let i = 0;
      (function tecla() {
        corpo.innerHTML = html + '<span class="pr">$</span> <span class="cmd">' + x.slice(0, i) + '</span>' + caret;
        if (i++ < x.length) return setTimeout(tecla, 28 + Math.random() * 30);
        html += '<span class="pr">$</span> <span class="cmd">' + x + '</span>\n';
        setTimeout(linha, 380);
      })();
    })();
  }, { threshold: .4 }).observe(caixa);
})();

/* Tema claro/escuro: lembra a escolha e acompanha o sistema enquanto não houver escolha */
(function tema() {
  const raiz = document.documentElement, btn = $('#tema-btn'), meta = document.querySelector('meta[name="theme-color"]');
  function aplicar(t, guardar) {
    raiz.setAttribute('data-theme', t);
    if (meta) meta.setAttribute('content', t === 'light' ? '#f4f9fa' : '#040d14');
    btn.setAttribute('aria-pressed', String(t === 'light'));
    if (guardar) { try { localStorage.setItem('tema', t); } catch (e) {} }
  }
  aplicar(raiz.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);
  btn.addEventListener('click', () => aplicar(raiz.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true));
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    let guardado = null; try { guardado = localStorage.getItem('tema'); } catch (x) {}
    if (!guardado) aplicar(e.matches ? 'light' : 'dark', false);
  });
})();

/* Impressão: mostra os números finais, sem esperar a animação */
addEventListener('beforeprint', () => {
  $$('[data-alvo]').forEach(el => { el.textContent = (+el.dataset.alvo) + (el.dataset.sufixo || ''); });
  $$('.revelar').forEach(el => el.classList.add('visivel'));
});

/* Abertura: aparece uma vez por visita, dura cerca de 1 s e nunca trava a página */
(function abertura() {
  const el = $('#abertura');
  if (!el) return;
  let jaViu = false;
  try { jaViu = sessionStorage.getItem('abertura') === '1'; sessionStorage.setItem('abertura', '1'); } catch (e) {}
  if (reduzido || jaViu) { el.remove(); return; }
  const fechar = () => { el.classList.add('fim'); setTimeout(() => el.remove(), 600); };
  setTimeout(fechar, 1000);
  el.addEventListener('click', fechar);
})();
