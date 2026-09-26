import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{site.name}</div>
          <p className="footer-copy">Developer tools from Math44.</p>
        </div>

        <div className="footer-links" aria-label="Footer links">
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.docs} target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year}</span>
        <span>Math44</span>
      </div>
    </footer>
  )
}
