export type Project = {
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  variant: 'letreiro' | 'lista'
}

export const projects: Project[] = [
  {
    title: 'Letreiro',
    description:
      'Jogo diário de descoberta de filmes com desafios automáticos, calendário de partidas anteriores, dicas progressivas, persistência local e automação diária integrada ao GitHub Actions.',
    technologies: ['React', 'TypeScript', 'Supabase', 'TMDB'],
    liveUrl: 'https://letreiro-cine-puzzle.vercel.app/pt-br',
    variant: 'letreiro',
  },
  {
    title: 'Liste e Compre',
    description:
      'Aplicação completa para planejar listas, acompanhar compras, controlar quantidades e preços e consultar histórico sincronizado por conta, com experiência adaptada para desktop e celular.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Vercel'],
    liveUrl: 'https://liste-e-compre.vercel.app/',
    variant: 'lista',
  },
]
