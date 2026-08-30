type Props = {
  kicker: string
  title: string
  text: string
}

export function SectionHeading({ kicker, title, text }: Props) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
