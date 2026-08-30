import type { Project } from '../data/projects'

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

  return (
    <div className="mock-browser mock-browser-lista lista-real-preview">
      <div className="lista-real-scene">
        <span className="lista-real-doodle doodle-one">🍅</span>
        <span className="lista-real-doodle doodle-two">🥕</span>
        <span className="lista-real-doodle doodle-three">🍐</span>
        <span className="lista-real-doodle doodle-four">🍄</span>

        <div className="lista-real-logo">Liste &amp;<br />Compre</div>
        <div className="lista-real-user">Olá, Marcus <span>👤</span></div>

        <div className="lista-real-sidecard">
          <strong>📋 Minhas Listas</strong>
          <div className="lista-real-sideitem">
            <span><b>Final de Semana</b><small>4 itens</small></span>
            <em>✎</em>
          </div>
        </div>

        <div className="lista-real-main">
          <h3>🛒 Criar Lista</h3>

          <div className="lista-real-formcard">
            <label>Nome do Produto</label>
            <div className="lista-real-input">Maçã ver</div>
            <div className="lista-real-suggestion">Maçã Verde</div>

            <div className="lista-real-controls">
              <div><small>Categoria</small><b>🍎 Hortifruti</b></div>
              <div><small>Qtd.</small><b>2</b></div>
              <div className="lista-real-toggle">kg</div>
            </div>

            <button className="lista-real-add" type="button">Adicionar à Lista</button>
          </div>

          <div className="lista-real-listcard">
            <div className="lista-real-listhead">
              <span>Itens da Lista</span>
              <b>4 itens</b>
            </div>
            <div className="lista-real-chip">Geral (Todos)⌄</div>

            <div className="lista-real-item"><span><b>Arroz</b><small>🟨 Mercearia</small></span><em>2</em><i>🗑</i></div>
            <div className="lista-real-item"><span><b>Feijão</b><small>🟨 Mercearia</small></span><em>0,700</em><i>🗑</i></div>
            <div className="lista-real-item"><span><b>Leite</b><small>🥛 Laticínios</small></span><em>2</em><i>🗑</i></div>
            <div className="lista-real-item"><span><b>Nutella</b><small>📦 Outros</small></span><em>1</em><i>🗑</i></div>

            <button className="lista-real-save" type="button">💾 Salvar Lista</button>
          </div>
        </div>
      </div>
    </div>
  )
}
