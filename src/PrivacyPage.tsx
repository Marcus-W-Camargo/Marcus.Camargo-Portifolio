import logo from './assets/Marcus-Camargo-Logo-Transparente.png'

export function PrivacyPage() {
  return (
    <div className="privacy-page">
      <main className="privacy-shell">
        <a className="privacy-brand" href="/" aria-label="Voltar para a página principal">
          <img src={logo} alt="" />
          <span>Marcus Camargo Portfólio</span>
        </a>

        <article className="privacy-card">
          <span className="section-kicker">Privacidade</span>
          <h1>Política de Privacidade</h1>

          <p>
            Este Portfólio é uma página institucional e, atualmente, não possui cadastro de
            usuários, login, banco de dados próprio de visitantes ou formulário interno de
            coleta de dados.
          </p>

          <p>
            Na versão atual do código, não foram identificados cookies publicitários, Google
            Analytics, Meta Pixel ou ferramentas semelhantes de rastreamento e publicidade.
          </p>

          <p>
            O site contém links para serviços externos, como WhatsApp, Instagram, GitHub e
            projetos publicados. Ao acessar esses serviços, também passam a valer as políticas
            de privacidade e os termos definidos pelos respectivos provedores.
          </p>

          <p>
            A hospedagem e a infraestrutura técnica podem processar informações necessárias ao
            funcionamento, desempenho e segurança do site, como registros técnicos e logs de
            acesso. Atualmente, o Portfólio é hospedado em infraestrutura externa da Vercel.
          </p>

          <p>
            Para dúvidas relacionadas a este Portfólio, utilize os canais profissionais já
            disponibilizados na seção de contato da página principal.
          </p>

          <a className="privacy-back" href="/">
            Voltar ao Portfólio
          </a>
        </article>
      </main>
    </div>
  )
}
