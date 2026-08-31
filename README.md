<p align="center">
  <img src="src/assets/Marcus-Camargo-Logo-Transparente.png" alt="Marcus Camargo Portfólio" width="260" />
</p>

# 💻 Marcus Camargo | Portfólio

> Portfólio profissional para apresentar projetos reais, serviços de desenvolvimento e canais de contato.  
> Professional portfolio for showcasing real projects, development services and contact channels.

[![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![Responsive](https://img.shields.io/badge/Layout-Responsive-ff0a78)](#responsividade-e-experiencia)
[![Security](https://img.shields.io/badge/Security-Headers%20%2B%20CSP-6f42c1)](#seguranca-e-privacidade)

---

<a id="portugues"></a>

## 🇧🇷 Português (Brasil)

### Sobre o projeto

**Marcus Camargo | Portfólio** é meu site profissional para reunir, em um único lugar, minha apresentação, os serviços que desenvolvo, projetos reais já publicados e os principais canais de contato para contratação.

O portfólio possui dois objetivos complementares:

- **apresentação comercial:** facilitar o contato de pessoas, profissionais e pequenos negócios interessados em sites, aplicações web, integrações, automações e chatbots;
- **apresentação técnica:** permitir que recrutadores, avaliadores e outros profissionais conheçam meus conhecimentos através de projetos reais, interfaces publicadas, tecnologias utilizadas e soluções efetivamente desenvolvidas.

Em vez de funcionar apenas como uma página estática de apresentação, o site foi estruturado para evoluir junto com meu trabalho. Cada projeto concluído pode ser incorporado à área de projetos com uma representação gráfica própria, descrição das funcionalidades, tecnologias utilizadas e acesso direto à aplicação publicada.

---

### Objetivos do portfólio

O projeto foi desenvolvido para:

- apresentar minha identidade profissional e área de atuação;
- demonstrar conhecimentos de frontend, responsividade, integração com APIs, bancos de dados e automações;
- reunir projetos publicados em uma vitrine única;
- apresentar visualmente as aplicações antes que o visitante abra o projeto real;
- direcionar visitantes para os sistemas em produção;
- oferecer canais diretos de contato para contratação de serviços;
- disponibilizar meu GitHub para análise de código e repositórios públicos;
- servir como material profissional para processos seletivos, avaliações técnicas e networking;
- acompanhar minha evolução profissional através da inclusão contínua de novos projetos;
- aplicar boas práticas de segurança HTTP e disponibilizar informações claras sobre privacidade.

---

### Tecnologias

| Camada | Tecnologia | Função |
| --- | --- | --- |
| Interface | React 19 | Componentes e estrutura da página |
| Linguagem | TypeScript 5.8 | Tipagem e manutenção do frontend |
| Build | Vite 7 | Ambiente de desenvolvimento e build de produção |
| Estilização | CSS | Layout, identidade visual, animações e responsividade |
| Ícones | Lucide React | Ícones da interface e ações |
| Hospedagem | Vercel | Publicação do portfólio, headers HTTP e rewrite da rota de privacidade |
| Integrações externas | Links para projetos, GitHub, WhatsApp e Instagram | Navegação para aplicações e canais profissionais |

---

### Estrutura da página

#### Início / Hero

A primeira seção apresenta de forma direta o foco do meu trabalho: **sites, sistemas, automações e chatbots**.

Ela reúne:

- mensagem principal de apresentação;
- resumo da proposta profissional;
- botão para acessar os projetos;
- botão **Fale comigo** para direcionar à área de contato;
- acesso direto aos meus repositórios públicos no GitHub;
- cards de destaque para Web, Apps e IA;
- identidade visual com a logomarca do portfólio.

#### Identidade

A seção de identidade apresenta a linguagem visual utilizada no portfólio e reforça a associação entre minha marca, tecnologia e desenvolvimento de soluções digitais.

#### Serviços

A área de serviços apresenta as principais frentes em que posso atuar profissionalmente:

- **Sites profissionais:** landing pages, páginas institucionais e interfaces responsivas;
- **Aplicações web:** sistemas online, autenticação, bancos de dados e fluxos personalizados;
- **Integrações & APIs:** conexão entre serviços, APIs, bancos de dados e automações;
- **Chatbots:** criação e configuração de soluções para atendimento, suporte e otimização de processos.

#### Projetos em destaque

A seção de projetos é a principal vitrine técnica do site.

Cada projeto possui:

- uma **representação gráfica responsiva** inspirada na interface real;
- adaptação visual específica para desktop e dispositivos móveis;
- nome do projeto;
- tecnologias principais;
- resumo das funcionalidades;
- botão para abrir a versão publicada em uma nova guia.

Os previews funcionam como representações visuais dos projetos e direcionam o visitante à aplicação real publicada.

#### Sobre meu trabalho

A seção **Sobre** explica de forma mais detalhada minha abordagem de desenvolvimento e os tipos de soluções que construo.

#### Contato

A seção final concentra os canais utilizados para conversas profissionais e contratação:

- **WhatsApp Business:** contato direto para serviços e propostas;
- **Instagram:** conteúdo, apresentação e contato profissional;
- **GitHub:** acesso aos repositórios públicos.

#### Política de Privacidade

O portfólio também possui uma página própria em **`/privacidade`**, acessível pelo link discreto **Privacidade** no rodapé.

A página informa, de forma compatível com o funcionamento atual do site, que:

- não há cadastro de usuários ou login no portfólio;
- não existe banco de dados próprio de visitantes;
- não existe formulário interno de coleta de dados atualmente;
- não foram identificados cookies publicitários, Google Analytics, Meta Pixel ou ferramentas similares no código atual;
- existem links para serviços externos, como WhatsApp, Instagram, GitHub e projetos publicados;
- ao acessar serviços externos, passam a valer também as políticas desses provedores;
- a infraestrutura de hospedagem pode processar informações técnicas necessárias ao funcionamento e à segurança, como logs;
- o site é hospedado atualmente na Vercel.

A rota foi implementada sem adicionar React Router. O arquivo `src/main.tsx` identifica de forma simples o `window.location.pathname` e renderiza a página de privacidade quando o caminho é `/privacidade`. A Vercel possui um rewrite específico para permitir acesso direto e refresh nessa rota.

---

<a id="seguranca-e-privacidade"></a>

### Segurança e privacidade

A hospedagem utiliza headers HTTP de segurança configurados em `vercel.json`, mantendo a aplicação estática e os recursos locais funcionando normalmente.

Headers atualmente definidos:

- **`X-Content-Type-Options: nosniff`** — reduz riscos de interpretação incorreta de tipos de conteúdo;
- **`Referrer-Policy: strict-origin-when-cross-origin`** — limita as informações de referência enviadas em navegações externas;
- **`X-Frame-Options: DENY`** — impede que o portfólio seja carregado dentro de frames;
- **`Permissions-Policy`** — desabilita acesso não utilizado a câmera, microfone, geolocalização, pagamentos e USB;
- **`Content-Security-Policy`** — restringe as origens permitidas para scripts, estilos, imagens, fontes e conexões.

A CSP atual é propositalmente restritiva:

```text
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
frame-src 'none';
upgrade-insecure-requests
```

A política não utiliza `*`, `unsafe-eval` ou `unsafe-inline`. Links externos podem ser abertos normalmente sem que seus domínios precisem receber permissão para executar scripts dentro do portfólio.

Nenhum banner de cookies foi adicionado, pois a aplicação atual não possui trackers publicitários ou ferramentas de analytics identificadas no código.

---

<a id="responsividade-e-experiencia"></a>

### Responsividade e experiência

O portfólio foi desenvolvido para manter sua identidade e conteúdo em diferentes tamanhos de tela.

#### Desktop

Em monitores e notebooks, a página utiliza composições horizontais maiores, cards distribuídos em múltiplas colunas e previews dos projetos próximos às proporções das respectivas experiências desktop.

#### Mobile

Em celulares, o site possui comportamento específico em vez de apenas reduzir a versão desktop:

- cabeçalho compacto com menu mobile;
- seções reorganizadas verticalmente;
- botões e conteúdos adaptados à largura disponível;
- cards de destaque ajustados para leitura em telas menores;
- previews dos projetos convertidos para uma apresentação vertical;
- simulação mobile do **Letreiro** adaptada ao formato vertical;
- simulação mobile do **Liste & Compre** reorganizada de acordo com a experiência da aplicação real.

---

### Projetos atualmente integrados

#### 🎬 Letreiro

**Letreiro** é um jogo diário de descoberta de filmes. O jogador precisa identificar o título do dia através de tentativas, letras coloridas e dicas progressivas.

Principais recursos apresentados no portfólio:

- jogo diário;
- teclado virtual;
- dicas de estúdio e categoria;
- temas claro e escuro;
- calendário de partidas anteriores;
- persistência local;
- integração com Supabase e TMDB;
- automação diária através do GitHub Actions.

🌐 **Abrir projeto:** [letreiro-cine-puzzle.vercel.app/pt-br](https://letreiro-cine-puzzle.vercel.app/pt-br)

📦 **Repositório:** [Marcus-W-Camargo/Letreiro](https://github.com/Marcus-W-Camargo/Letreiro)

#### 🛒 Liste & Compre

**Liste & Compre** é uma aplicação web para organizar listas de compras, acompanhar uma compra em andamento e consultar o histórico posteriormente.

Principais recursos apresentados no portfólio:

- criação e gerenciamento de listas;
- produtos organizados por categorias;
- quantidade por unidade ou quilograma;
- autenticação e dados por conta;
- acompanhamento de preços e compras;
- histórico de compras;
- interface responsiva para desktop e celular;
- integração com Supabase e serviços publicados na Vercel.

🌐 **Abrir projeto:** [liste-e-compre.vercel.app](https://liste-e-compre.vercel.app/)

📦 **Repositório:** [Marcus-W-Camargo/liste-e-compre](https://github.com/Marcus-W-Camargo/liste-e-compre)

---

### Integração entre o portfólio e os projetos

O portfólio funciona como uma camada de apresentação para os demais projetos publicados. Os projetos continuam independentes, com seus próprios repositórios, infraestrutura, bancos de dados, APIs e deploys.

---

### Atualizações recorrentes

Este portfólio é um projeto de atualização contínua. Novos projetos e melhorias técnicas podem ser incorporados conforme atingem um estado considerado pronto para apresentação pública.

---

### Contato profissional

- 💬 **WhatsApp Business:** [Entrar em contato](https://wa.me/message/S2FPE7ASPUHHM1)
- 📷 **Instagram:** [@marcus.camargo_portifolio](https://www.instagram.com/marcus.camargo_portifolio/)
- 💻 **GitHub:** [Marcus-W-Camargo](https://github.com/Marcus-W-Camargo)
- 🔒 **Privacidade:** [Política de Privacidade](https://marcuscamargo-portfolio.vercel.app/privacidade)

---

### Execução local

Requisitos:

- Node.js compatível com o projeto;
- npm.

```bash
git clone https://github.com/Marcus-W-Camargo/Marcus.Camargo-Portifolio.git
cd Marcus.Camargo-Portifolio
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualização do build:

```bash
npm run preview
```

---

### Estrutura principal

```text
src/
├─ assets/                         # Imagens, identidade visual e fotos
├─ components/
│  ├─ Header.tsx                  # Cabeçalho e navegação
│  ├─ ProjectPreview.tsx          # Representações visuais dos projetos
│  └─ SectionHeading.tsx          # Títulos reutilizáveis das seções
├─ data/
│  └─ projects.ts                 # Projetos, tecnologias e links publicados
├─ App.tsx                        # Composição principal do portfólio
├─ PrivacyPage.tsx                # Página da Política de Privacidade
├─ main.tsx                       # Entrada da aplicação e seleção leve de rota
├─ privacy.css                    # Estilos isolados da página de privacidade
└─ *.css                          # Layout, temas, previews e responsividade
vercel.json                       # Security headers, CSP e rewrite de /privacidade
```

---

### Roadmap

- [ ] **Versão internacional do site:** implementar seleção de idioma entre **PT-BR** e **EN-US**, com um botão de troca de idioma disponível na interface e conteúdo completo do portfólio traduzido para inglês.

---

<a id="english"></a>

## 🇺🇸 English (US)

### About the project

**Marcus Camargo | Portfolio** is my professional website for bringing together my introduction, development services, published real-world projects and the main contact channels for hiring inquiries.

The portfolio serves two complementary purposes:

- **commercial presentation:** make it easier for individuals, professionals and small businesses looking for websites, web applications, integrations, automations and chatbots to contact me;
- **technical presentation:** allow recruiters, reviewers and other professionals to evaluate my knowledge through real projects, published interfaces, technologies and solutions that were actually developed.

---

### Technologies

| Layer | Technology | Purpose |
| --- | --- | --- |
| Interface | React 19 | Components and page structure |
| Language | TypeScript 5.8 | Typing and frontend maintainability |
| Build | Vite 7 | Development environment and production build |
| Styling | CSS | Layout, visual identity, animations and responsiveness |
| Icons | Lucide React | Interface and action icons |
| Hosting | Vercel | Deployment, HTTP security headers and privacy-route rewrite |
| External integrations | Project, GitHub, WhatsApp and Instagram links | Navigation to applications and professional channels |

---

### Privacy page

The portfolio includes a dedicated **`/privacidade`** page, linked discreetly from the footer.

It explains that the current portfolio:

- has no user registration or login;
- has no first-party visitor database;
- has no internal data-collection form;
- has no identified advertising cookies, Google Analytics, Meta Pixel or similar tracking tools in the current codebase;
- contains external links to WhatsApp, Instagram, GitHub and published projects;
- is hosted on external infrastructure currently provided by Vercel, which may process technical logs required for operation and security.

The route is implemented without adding React Router. `src/main.tsx` performs a small `window.location.pathname` check, while `vercel.json` provides the rewrite required for direct access and refresh on `/privacidade`.

---

### Security and privacy

HTTP security headers are configured in `vercel.json`:

- **`X-Content-Type-Options: nosniff`**;
- **`Referrer-Policy: strict-origin-when-cross-origin`**;
- **`X-Frame-Options: DENY`**;
- **`Permissions-Policy`** restricting unused browser capabilities;
- **`Content-Security-Policy`** restricting scripts, styles, images, fonts and connections to the origins required by the application.

Current CSP:

```text
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
frame-src 'none';
upgrade-insecure-requests
```

The policy does not use `*`, `unsafe-eval` or `unsafe-inline`. External links continue to work without granting those external domains permission to execute resources inside the portfolio.

No cookie-consent banner was added because no advertising or analytics trackers are currently identified in the portfolio codebase.

---

### Responsiveness and experience

The portfolio was designed to preserve its identity and content across desktop and mobile screen sizes, with dedicated responsive behavior for navigation, sections, cards and project previews.

---

### Currently integrated projects

#### 🎬 Letreiro

Daily movie discovery game with progressive hints, virtual keyboard, themes, previous-game navigation, Supabase/TMDB integration and daily automation.

🌐 **Open project:** [letreiro-cine-puzzle.vercel.app/pt-br](https://letreiro-cine-puzzle.vercel.app/pt-br)

📦 **Repository:** [Marcus-W-Camargo/Letreiro](https://github.com/Marcus-W-Camargo/Letreiro)

#### 🛒 Liste & Compre

Responsive shopping-list application with account-based data, list management, shopping tracking and purchase history.

🌐 **Open project:** [liste-e-compre.vercel.app](https://liste-e-compre.vercel.app/)

📦 **Repository:** [Marcus-W-Camargo/liste-e-compre](https://github.com/Marcus-W-Camargo/liste-e-compre)

---

### Professional contact

- 💬 **WhatsApp Business:** [Get in touch](https://wa.me/message/S2FPE7ASPUHHM1)
- 📷 **Instagram:** [@marcus.camargo_portifolio](https://www.instagram.com/marcus.camargo_portifolio/)
- 💻 **GitHub:** [Marcus-W-Camargo](https://github.com/Marcus-W-Camargo)
- 🔒 **Privacy:** [Privacy Policy](https://marcuscamargo-portfolio.vercel.app/privacidade)

---

### Local development

```bash
git clone https://github.com/Marcus-W-Camargo/Marcus.Camargo-Portifolio.git
cd Marcus.Camargo-Portifolio
npm install
npm run dev
```

Production build:

```bash
npm run build
```

---

### Main structure

```text
src/
├─ assets/
├─ components/
├─ data/
├─ App.tsx
├─ PrivacyPage.tsx
├─ main.tsx
└─ privacy.css
vercel.json
```

---

### Roadmap

- [ ] **International website version:** implement language selection between **PT-BR** and **EN-US**, with a language switch button in the interface and a complete English translation of the portfolio content.

---

## Autor / Author

**Marcus Camargo**

- GitHub: [@Marcus-W-Camargo](https://github.com/Marcus-W-Camargo)
- Instagram: [@marcus.camargo_portifolio](https://www.instagram.com/marcus.camargo_portifolio/)

Este repositório representa meu portfólio profissional e acompanha a evolução dos projetos publicados.  
This repository represents my professional portfolio and evolves alongside my published projects.