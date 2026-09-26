import CopyButton from './CopyButton'

export default function ApiCard({ api }) {
  return (
    <article className="card api-card">
      <h2>{api.name}</h2>
      <p>{api.description}</p>

      <div className="meta-row">
        <span className="method-badge">{api.method}</span>
      </div>

      <div className="endpoint-row">
        <code>{api.endpoint}</code>
        <CopyButton value={api.endpoint} label="Copy" />
      </div>

      <a href={api.docs} className="inline-link" target="_blank" rel="noreferrer">
        API Documentation →
      </a>
    </article>
  )
}
