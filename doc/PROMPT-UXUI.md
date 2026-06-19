# Prompt UX/UI — Portfólio Pessoal

A identidade visual deste portfólio nasceu de uma pergunta do prof. Kenji em aula: "cadê as Hermiones da turma?". Hermione Granger sempre foi meu símbolo de mulher inteligente, curiosa e que não desiste. Sendo fã da saga e me identificando com isso, trouxe as cores da Grifinória como identidade — vermelho e dourado, sem fantasia, só a paleta carregando o significado. O nome HermioneBot veio naturalmente: se ela sempre tem a resposta certa, nada mais justo pra um chatbot que responde sobre mim.

O prompt abaixo foi escrito e enviado ao Google Stitch para gerar o protótipo de alta fidelidade da Fase 1 do projeto.

---

> **Identidade (Role Prompting):** atribuir um papel especializado à IA antes da tarefa direciona o tom e a profundidade da resposta.
>
> **Missão:** instrução clara e direta do que deve ser entregue.

Você é um designer UI/UX sênior especializado em portfólios para desenvolvedoras 
de tecnologia. Crie o design completo de um portfólio pessoal seguindo 
rigorosamente os requisitos abaixo.

---

## REQUISITOS DE UX/UI (obrigatórios)

### WIREFRAME E PROTÓTIPO DE ALTA FIDELIDADE

- Layout completo para Desktop (1440px) e Mobile (375px)
- Abordagem Mobile-First
- Hierarquia visual clara usando tamanho, peso e contraste de cor
- Contraste acessível WCAG AA em todos os textos
- Grade de espaçamento base 8px: 8 / 16 / 24 / 32 / 48 / 64 / 96px
- Hover states em todos os elementos interativos
- Microinterações: transições suaves em botões, links e cards
- Animações de entrada sugeridas: fade-in e elementos deslizando
- Layout responsivo de 320px até 1920px

### DESIGN SYSTEM (painel separado obrigatório)

- Paleta de cores completa com hexadecimais
- Tipografia: família, tamanhos (H1/H2/H3/body/label) e pesos
- Espaçamentos documentados
- Componentes: botão primário, botão secundário, card, tag/chip, 
  barra de skill, input de formulário

### FRAMES NECESSÁRIOS

#### Desktop (1440px)
· Página completa scrollável
· Navbar — estado normal
· HermioneBot — botão fechado
· HermioneBot — widget aberto

#### Mobile (375px)
· Página completa scrollável
· Navbar — menu hamburguer fechado
· Navbar — menu hamburguer aberto
· HermioneBot — botão fechado
· HermioneBot — widget aberto

#### Design System
· Painel completo

---

## IDENTIDADE VISUAL — TEMA GRIFINÓRIA

Inspiração: cores da casa Grifinória de Harry Potter — vermelho e dourado.
Visual profissional e tech, sem ilustrações ou elementos de fantasia.
Apenas a paleta remete ao universo.

### PALETA

- Fundo principal: #0D0500 (preto quente)
- Fundo cards: #1A0A00 (marrom escuro profundo)
- Borda cards: #3D1F00 (marrom médio)
- Destaque primário: #740001 (vermelho Grifinória)
- Destaque secundário: #D4AF37 (dourado)
- Títulos: #F5E6C8 (bege dourado claro)
- Texto corpo: #C4A882 (bege médio)
- Hero gradiente: #0D0500 → #2A0A00
- Tags/chips: fundo #74000122, borda #D4AF3755, texto #D4AF37

### TIPOGRAFIA

- Fonte títulos: Playfair Display (elegante, clássica)
- Fonte corpo: Inter (moderna, legível)
- H1: 56px, peso 700
- H2: 36px, peso 600
- H3: 24px, peso 600
- Body: 16px, peso 400
- Label: 12px, peso 500, uppercase

### COMPONENTES

- Botão primário: fundo #740001, texto #F5E6C8, radius 8px
- Botão secundário: contornado #D4AF37, texto #D4AF37
- Card: fundo #1A0A00, borda #3D1F00, radius 12px, sombra dourada sutil
- Tag/chip: pílula com texto e borda dourada
- Barra de skill: fundo #3D1F00, gradiente #740001 → #D4AF37
- Pontos da timeline: dourado #D4AF37
- Navbar: fundo #0D0500 com blur

---

## SEÇÕES DO PORTFÓLIO

### 1. NAVBAR fixa
Logo: [NOME].dev com ícone de estrela dourada
Links: sobre | trajetória | projetos | contato
Botão: "me contrate" em vermelho

### 2. HERO
Gradiente escuro com elemento decorativo sutil (partículas ou brilhos dourados)
Título: [NOME]
Subtítulo: Desenvolvedora IA em Formação
Bio: [espaço para texto pessoal]
Tags: Chatbot | Watson Assistant | Prompt Engineering | IA Conversacional
Botões: "ver projetos" (vermelho) e "baixar currículo" (contornado dourado)

### 3. SOBRE MIM
Esquerda: [espaço para bio]
Direita: barras de habilidades com gradiente vermelho→dourado
[Habilidade 1] — [%]
[Habilidade 2] — [%]
[Habilidade 3] — [%]
[Habilidade 4] — [%]

### 4. TRAJETÓRIA
Linha do tempo vertical, pontos dourados, cards alternando esquerda/direita
[ANO] — [evento]
[ANO] — [evento]
[ANO–atual] — [emprego]
[ANO–atual] — [faculdade]

### 5. PROJETOS (3 cards)
Ícone colorido | título | descrição | chips de tecnologia | botões demo e GitHub

### 6. CONTATO
Esquerda: formulário (nome, e-mail, mensagem, botão vermelho)
Direita: cards LinkedIn, GitHub, E-mail com ícones dourados

### 7. RODAPÉ
Fundo #0D0500 | esquerda: [frase pessoal 2025] | direita: [NOME].dev

---

## HERMIONEBOT — BOTÃO FLUTUANTE

Botão redondo fixo no canto inferior direito
Cor #740001 com ícone de varinha dourada ✨
Tooltip: "fale comigo"

### Widget aberto (frame separado)

- Cabeçalho: avatar com varinha, nome "HermioneBot", status "sempre disponível"
- Cor do header: #740001
- 4 bolhas de perguntas em dourado clicáveis
- Área de resposta com fundo #1A0A00

---

## ENTREGÁVEL

- Design System completo
- Todos os frames desktop e mobile
- Visual profissional, moderno e acessível
- Pronto para exportação no Figma