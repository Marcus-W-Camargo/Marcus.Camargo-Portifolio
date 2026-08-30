import type { Project } from '../data/projects'

type Props = {
  variant: Project['variant']
}

export function ProjectPreview({ variant }: Props) {
  if (variant === 'letreiro') {
    return (
      <div className="mock-browser">
        <div className="browser-bar"><i /><i /><i /></div>
        <div className="letreiro-ui">
          <span className="mini-label">Jogo diário</span>
          <h3>LETREIRO</h3>
          <div className="letter-row">
            {'LETREIRO'.split('').map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter}</span>
            ))}
          </div>
          <div className="mini-keyboard">
            {'QWERTYUIOP'.split('').map((letter) => <b key={letter}>{letter}</b>)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mock-browser">
      <div className="browser-bar"><i /><i /><i /></div>
      <div className="lista-ui">
        <div className="lista-head">
          <strong>Liste e Compre</strong>
          <span>Compras</span>
        </div>
        <div className="lista-item"><i>✓</i><span>Arroz</span><b>2 un</b></div>
        <div className="lista-item"><i>✓</i><span>Feijão</span><b>1 kg</b></div>
        <div className="lista-item"><i /><span>Leite</span><b>6 un</b></div>
        <div className="lista-total">
          Total estimado
          <strong>R$ 148,90</strong>
        </div>
      </div>
    </div>
  )
}
