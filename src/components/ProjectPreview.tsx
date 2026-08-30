import type { Project } from '../data/projects'
import profile from '../assets/Perfil Marcus Camargo - Portifolio.png'

const listeLogo =
  'https://raw.githubusercontent.com/Marcus-W-Camargo/liste-e-compre/main/src/assets/liste-%26-compre.png'
const listeIcon =
  'https://raw.githubusercontent.com/Marcus-W-Camargo/liste-e-compre/main/src/assets/Liste.png'

type Props = {
  variant: Project['variant']
}

export function ProjectPreview({ variant }: Props) {
  if (variant === 'letreiro') {
    return (
      <div className="mock-browser mock-browser-letreiro">
        <div className="browser-bar letreiro-browser-bar"><i /><i /><i /></div>
        <div className="letreiro-ui">
          <div className="letreiro-topline">
            <div className="letreiro-brand-lockup">
              <span className="letreiro-clapper" aria-hidden="true">🎬</span>
              <span className="letreiro-title">LETREIRO</span>
            </div>
          </div>

          <div className="letreiro-clue">Descubra o filme pelas dicas</div>

          <div className="letter-row letreiro-answer-row">
            {'LETREIRO'.split('').map((letter, index) => (
              <span
                className={index === 2 ? 'tile-hit' : index === 5 ? 'tile-warn' : ''}
                key={`${letter}-${index}`}
              >
                {letter}
              </span>
            ))}
          </div>

          <div className="letreiro-history">
            <div><span>Estúdio</span><strong>Marvel</strong></div>
            <div><span>Categoria</span><strong>Ação e Ficção Científica</strong></div>
          </div>

          <div className="mini-keyboard letreiro-keyboard">
            <div className="mini-keyboard-row row-one">
              {'QWERTYUIOP'.split('').map((letter) => <b key={letter}>{letter}</b>)}
            </div>
            <div className="mini-keyboard-row row-two">
              {'ASDFGHJKL'.split('').map((letter) => <b key={letter}>{letter}</b>)}
            </div>
            <div className="mini-keyboard-row row-three">
              {'ZXCVBNM'.split('').map((letter) => <b key={letter}>{letter}</b>)}
              <b className="key-backspace" aria-label="Apagar">⌫</b>
            </div>
            <div className="mini-keyboard-row row-enter">
              <b className="key-enter">ENTER</b>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const items = [
    ['Arroz', '🟨 Mercearia', '2', '📦'],
    ['Feijão', '🟨 Mercearia', '0,500', '⚖️'],
    ['Leite', '🥛 Laticínios', '0,700', '⚖️'],
    ['Nutella', '📦 Outros', '1', '📦'],
  ]

  return (
    <div className="mock-browser mock-browser-lista lista-real-preview">
      <div className="browser-bar lista-browser-bar"><i /><i /><i /></div>

      <div className="lista-real-scene">
        <img className="lista-real-logo-image" src={listeLogo} alt="" />

        <div className="lista-real-user">
          <strong>Olá, Marcus Camargo.</strong>
          <img src={profile} alt="" />
        </div>

        <aside className="lista-real-sidecard">
          <div className="lista-real-side-title">📋 <strong>Minhas Listas</strong></div>
          <div className="lista-real-side-divider" />
          <div className="lista-real-sideitem">
            <div className="lista-real-side-info">
              <div className="lista-real-side-name">
                <b>Final de Semana</b>
                <span>✏️</span>
              </div>
              <small>4 itens</small>
              <small className="modified">Modificada em 30/08/2026</small>
            </div>
            <div className="lista-real-side-trash">🗑</div>
          </div>
        </aside>

        <div className="lista-real-main">
          <div className="lista-real-page-title">
            <img src={listeIcon} alt="" />
            <strong>Criar Lista</strong>
          </div>

          <div className="lista-real-formcard">
            <label>Nome do Produto</label>
            <div className="lista-real-input">Maçã ver</div>

            <div className="lista-real-controls">
              <div className="lista-control-category">
                <span>🍎 Categorias</span>
                <i>⌄</i>
              </div>
              <div className="lista-control-qty">
                <span>2</span>
                <i><b>+</b><b>−</b></i>
              </div>
              <div className="lista-control-switch"><span>📦</span></div>
            </div>

            <button className="lista-real-add" type="button" disabled>Adicionar à Lista</button>
          </div>

          <div className="lista-real-listcard">
            <div className="lista-real-list-toolbar">
              <strong>Itens da Lista</strong>
              <span className="lista-real-filter">Geral (Todos)⌄</span>
              <b>4 itens</b>
            </div>

            <div className="lista-real-items">
              {items.map(([name, category, quantity, unitIcon]) => (
                <div className="lista-real-item" key={name}>
                  <span className="lista-real-item-info">
                    <b>{name}</b>
                    <small>{category}</small>
                  </span>
                  <span className="lista-mini-spinner">
                    <em>{quantity}</em>
                    <i><b>+</b><b>−</b></i>
                  </span>
                  <span className="lista-mini-switch"><i>{unitIcon}</i></span>
                  <span className="lista-mini-trash">🗑</span>
                </div>
              ))}
            </div>

            <button className="lista-real-save" type="button">💾 Salvar Lista</button>
          </div>
        </div>

        <div className="lista-real-footer">
          © 2026 Marcus Camargo. Todos os direitos reservados.
        </div>
      </div>
    </div>
  )
}
