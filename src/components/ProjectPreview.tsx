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
            <span className="letreiro-clapper" aria-hidden="true">🎬</span>
            <span className="letreiro-title">LETREIRO</span>
            <span className="letreiro-topline-spacer" aria-hidden="true" />
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
            {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row) => (
              <div className="mini-keyboard-row" key={row}>
                {row.split('').map((letter) => <b key={letter}>{letter}</b>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mock-browser mock-browser-lista">
      <div className="browser-bar lista-browser-bar"><i /><i /><i /></div>
      <div className="lista-ui">
        <div className="lista-head">
          <strong>Liste e Compre</strong>
          <span>Minha lista</span>
        </div>

        <div className="lista-summary">
          <div><small>Itens</small><strong>4</strong></div>
          <div><small>Estimativa</small><strong>R$ 148,90</strong></div>
        </div>

        <div className="lista-items">
          <div className="lista-item"><i>✓</i><span><b>Arroz</b><small>Mercearia</small></span><em>2 un</em></div>
          <div className="lista-item"><i>✓</i><span><b>Feijão</b><small>Mercearia</small></span><em>1 kg</em></div>
          <div className="lista-item"><i>✓</i><span><b>Leite</b><small>Laticínios</small></span><em>6 un</em></div>
          <div className="lista-item"><i>✓</i><span><b>Café</b><small>Mercearia</small></span><em>1 un</em></div>
        </div>

        <div className="lista-total">
          <span>Total estimado</span>
          <strong>R$ 148,90</strong>
        </div>
      </div>
    </div>
  )
}
