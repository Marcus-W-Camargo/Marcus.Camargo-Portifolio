import {
  ArrowUpRight,
  Bot,
  Braces,
  Database,
  Github,
  Globe2,
  Instagram,
  MessageCircleMore,
  PanelsTopLeft,
  Workflow,
} from 'lucide-react'
import logo from './assets/LogoTipo Marcus Marcus - Portifolio.png'
import identityImage from './assets/Identidade Marcus Camargo - Portifolio.png'
import { Header } from './components/Header'
import { ProjectPreview } from './components/ProjectPreview'
import { SectionHeading } from './components/SectionHeading'
import { projects } from './data/projects'

const services = [
  {
    icon: Braces,
    title: 'Sites profissionais',
    text: 'Landing pages, páginas institucionais e experiências responsivas com foco em presença digital, clareza e conversão.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Aplicações web',
    text: 'Sistemas online com autenticação, bancos de dados, fluxos personalizados e interfaces modernas.',
  },
  {
    icon: Workflow,
    title: 'Integrações & APIs',
    text: 'Conexão entre serviços, APIs externas, bancos de dados e automações para reduzir tarefas manuais.',
  },
  {
    icon: Bot,
    title: 'Chatbots',
    text: 'Criação e configuração de chatbots para atendimento, suporte, triagem e otimização de processos.',
  },
]

const contactLinks = {
  whatsapp: 'https://wa.me/message/S2FPE7ASPUHHM1',
  instagram: 'https://www.instagram.com/marcus.camargo_portifolio?igsi=ZmdpOTdzNmIzY25p',
}

function App() {
  const openContact = (type: keyof typeof contactLinks) => {
    const url = contactLinks[type]
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="page-glow page-glow-one" aria-hidden="true" />
      <div className="page-glow page-glow-two" aria-hidden="true" />

      <Header />

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              Sites, sistemas, automações e chatbots
            </div>

            <h1>
              Soluções digitais com
              <span>design, desempenho e propósito.</span>
            </h1>

            <p className="hero-text">
              Desenvolvimento de páginas modernas e responsivas, aplicações web,
              integrações, bancos de dados e automações pensadas para transformar
              ideias em experiências digitais profissionais.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Conhecer projetos
                <ArrowUpRight size={18} />
              </a>
              <a className="button button-secondary button-contact-animated" href="#contato">
                Fale comigo
              </a>
              <a
                className="button button-github"
                href="https://github.com/Marcus-W-Camargo?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <Globe2 size={18} />
                <strong>Web</strong>
                <span>Sites responsivos</span>
              </div>
              <div>
                <Database size={18} />
                <strong>Apps</strong>
                <span>Sistemas sob medida</span>
              </div>
              <div>
                <Bot size={18} />
                <strong>IA</strong>
                <span>Chatbots e automações</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-orbit">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit-dot dot-one" />
              <div className="orbit-dot dot-two" />
              <div
                className="hero-profile-card"
                style={{
                  background: '#fff',
                  padding: '18px',
                  transform: 'none',
                }}
              >
                <img
                  src={logo}
                  alt="Logomarca Marcus Camargo Portfólio"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    borderRadius: '22px',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="brand-showcase" aria-label="Identidade visual Marcus Camargo">
          <div className="brand-showcase-inner">
            <div className="brand-showcase-copy">
              <span className="section-kicker">Identidade</span>
              <h2>Conheça a identidade visual do meu trabalho.</h2>
            </div>
            <div className="brand-logo-panel">
              <img src={identityImage} alt="Identidade visual Marcus Camargo Portfólio" />
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <SectionHeading
            kicker="O que eu desenvolvo"
            title="Tecnologia aplicada de forma prática ao seu negócio."
            text="Soluções personalizadas desde a ideia inicial até a publicação, com atenção à experiência do usuário, clareza visual e manutenção."
          />

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <span className="service-index">0{index + 1}</span>
                <div className="service-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <SectionHeading
            kicker="Projetos em destaque"
            title="Projetos digitais desenvolvidos na prática."
            text="Uma seleção de sites e aplicações criados para explorar interfaces, recursos web, integrações, APIs e experiências responsivas."
          />

          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.variant}`}
                key={project.title}
              >
                <div className="project-preview">
                  <ProjectPreview variant={project.variant} />
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver projeto ao vivo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="about-panel">
            <div>
              <span className="section-kicker">Sobre meu trabalho</span>
              <h2>Da necessidade real à solução digital publicada.</h2>
            </div>

            <div className="about-copy">
              <p>
                Desenvolvimento de sites, aplicações web e soluções digitais para
                pequenos negócios, profissionais e projetos personalizados.
              </p>
              <p>
                Trabalho com criação de páginas modernas e responsivas, sistemas
                online, integrações com APIs, bancos de dados, autenticação de
                usuários e automações. Também realizo criação e configuração de
                chatbots para atendimento, suporte e otimização de processos.
              </p>
              <p>
                O objetivo é construir soluções práticas, organizadas e adaptadas
                à necessidade de cada cliente, desde a ideia inicial até a
                publicação e manutenção do projeto.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="section-kicker">Vamos conversar?</span>
              <h2>
                Tem uma ideia, negócio ou processo que pode ficar melhor com
                tecnologia?
              </h2>
              <p>
                Entre em contato e me conte o que você precisa. Posso ajudar a
                transformar a ideia em um projeto claro, moderno e funcional.
              </p>
            </div>

            <div className="contact-actions">
              <button
                className="contact-card whatsapp"
                type="button"
                onClick={() => openContact('whatsapp')}
              >
                <div className="contact-icon">
                  <MessageCircleMore size={24} />
                </div>
                <div>
                  <small>Contato direto</small>
                  <strong>WhatsApp Business</strong>
                </div>
                <ArrowUpRight size={20} />
              </button>

              <button
                className="contact-card instagram"
                type="button"
                onClick={() => openContact('instagram')}
              >
                <div className="contact-icon">
                  <Instagram size={23} />
                </div>
                <div>
                  <small>Conteúdo & contato</small>
                  <strong>Instagram</strong>
                </div>
                <ArrowUpRight size={20} />
              </button>
            </div>

            <p className="contact-note">
              Escolha o canal que preferir e fale comigo diretamente.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <a href="#inicio" className="footer-brand">
          <img src={logo} alt="" />
          <span>Marcus Camargo Portfólio</span>
        </a>
        <p>Desenvolvimento web • Aplicações • Integrações • Automação</p>
        <p>© {new Date().getFullYear()} Marcus Camargo.</p>
      </footer>
    </>
  )
}

export default App
