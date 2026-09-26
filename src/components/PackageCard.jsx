import CopyButton from './CopyButton'

export default function PackageCard({ pkg }) {
  const installCommand = `npm install ${pkg.name}`

  return (
    <article className="card package-card">
      <div className="package-header">
        <h2>{pkg.name}</h2>
        <span className="version-badge">{pkg.version}</span>
      </div>

      <p>{pkg.description}</p>

      <div className="command-row">
        <code>{installCommand}</code>
        <CopyButton value={installCommand} label="Copy" />
      </div>

      <div className="card-links">
        <a href={pkg.npm} target="_blank" rel="noreferrer">
          npm →
        </a>
        <a href={pkg.github} target="_blank" rel="noreferrer">
          GitHub →
        </a>
      </div>
    </article>
  )
}
