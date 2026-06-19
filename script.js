/* ============================================
   PORTFOLIO — POLLYANA CASSIA DE SOUSA
   Arquivo: js/main.js
   
   Aqui fica todo o JavaScript do portfólio.
   Cada bloco tem comentários explicando o que faz.
   Usamos apenas JavaScript puro (vanilla) — sem jQuery ou React!
============================================ */

/* ============================================
   INICIALIZAÇÃO DOS ÍCONES (LUCIDE)
   Isso é obrigatório para os ícones aparecerem na tela!
============================================ */
lucide.createIcons();

/* ============================================
   NAVBAR — Efeito de scroll
   Quando o usuário rola a página, a borda da 
   navbar fica mais visível para separar o conteúdo.
============================================ */
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  // Se o scroll for maior que 20px, aumenta a visibilidade da borda
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(61,31,0,0.8)';
  } else {
    nav.style.borderBottomColor = 'var(--border)';
  }
});

/* ============================================
   MENU MOBILE — Abrir e fechar
   Quando clica no hamburguer, abre o menu.
   Quando clica no X ou em um link, fecha o menu.
============================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu  = document.getElementById('close-menu');

// Abre o menu adicionando a classe 'open'[cite: 4]
hamburger.addEventListener('click', function() {
  mobileMenu.classList.add('open');
});

// Fecha o menu removendo a classe 'open'[cite: 4]
closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('open');
});

// Fecha o menu ao clicar em qualquer link dentro dele[cite: 4]
document.querySelectorAll('.menu-link').forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
});

/* ============================================
   BARRAS DE SKILL — Animação ao aparecer na tela
============================================ */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(function(fill) {
  skillObserver.observe(fill);
});

/* ============================================
   TRAJETÓRIA — Fade-in ao rolar a página
============================================ */
const timelineItems = document.querySelectorAll('.tl-item');

const timelineObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, index) {
    if (entry.isIntersecting) {
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, index * 120);
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(function(item) {
  timelineObserver.observe(item);
});

/* ============================================
   HERMIONEBOT — Abrir, fechar e responder perguntas
============================================ */
const botBtn    = document.getElementById('bot-btn');
const botWidget = document.getElementById('bot-widget');
const botClose  = document.getElementById('bot-close');
const botAnswer = document.getElementById('bot-answer');

const respostas = {
  inicio: 'Em 2021 entrei no WoMakersCode e depois no bootcamp da SoulCode Academy. Saí direto empregada na Global Hitss — a SoulCode me levou direto para o mercado!',
  ia:     'Comecei com chatbot e Watson Assistant e me apaixonei por como a linguagem pode ensinar uma máquina a entender humanos. Com a IA Generativa migrei para prompt engineering e agora quero evoluir para AI Developer.',
  hire:   'Sim! Estou aberta a novas oportunidades em IA. Me chama no LinkedIn ou pelo formulário de contato.',
  fun:    'Me identifico com a Hermione Granger — estudiosa, determinada e curiosa. Por isso o tema Grifinória! Mas ao contrário da Hermione, eu preciso de documentação 📖'
};

botBtn.addEventListener('click', function() {
  botWidget.classList.toggle('open');
});

botClose.addEventListener('click', function() {
  botWidget.classList.remove('open');
});

document.querySelectorAll('.bot-q').forEach(function(botao) {
  botao.addEventListener('click', function() {
    const chave = botao.dataset.key;
    botAnswer.textContent = respostas[chave];
    botAnswer.style.display = 'block';
  });
});

/* ============================================
   FORMULÁRIO DE CONTATO — Validação simples
============================================ */
const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();
  
  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  
  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  alert('Mensagem enviada! Em breve entrarei em contato 💛');
  formulario.reset();
});