export default function PageHeader({ title, description }) {
  return (
    <header className="page-header">
      <div className="container page-header-inner">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  )
}
