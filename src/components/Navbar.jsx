import { NavLink } from 'react-router-dom'
import { site } from '../data/site'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'APIs', to: '/apis' },
  { label: 'Packages', to: '/packages' },
  { label: 'Generators', to: '/generators' },
  { label: 'Docs', to: '/docs' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" end>
          {site.name}
        </NavLink>

        <nav className="primary-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a href={site.github} className="header-link" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.docs} className="header-link" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
      </div>
    </header>
  )
}
