export default function GeneratorCard({ generator }) {
  return (
    <article className="card generator-card">
      <h2>{generator.name}</h2>
      <p>{generator.description}</p>

      <div className="meta-row">
        <span className="method-badge language-badge">{generator.language}</span>
      </div>

      <a href={generator.github} className="inline-link" target="_blank" rel="noreferrer">
        GitHub Repository →
      </a>
    </article>
  )
}
