import { useState } from 'react'
import logo from '../assets/logo.png'

const links = [
  ['Início', 'inicio'],
  ['Serviços', 'servicos'],
  ['Projetos', 'projetos'],
  ['Sobre', 'sobre'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <a href="#inicio" className="brand" onClick={closeMenu}>
        <img src={logo} alt="Marcus Camargo Portfólio" />
        <span className="brand-text">
          <strong>Marcus Camargo</strong>
          <small>Desenvolvimento & Soluções Digitais</small>
        </span>
      </a>

      <button
        className={`menu-toggle ${open ? 'active' : ''}`}
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contato" onClick={closeMenu}>
          Contato
        </a>
      </nav>
    </header>
  )
}
