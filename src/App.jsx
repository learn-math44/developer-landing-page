import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageHeader from './components/PageHeader'
import ApiCard from './components/ApiCard'
import PackageCard from './components/PackageCard'
import GeneratorCard from './components/GeneratorCard'
import SearchInput from './components/SearchInput'
import Button from './components/Button'
import { apis } from './data/apis'
import { packages } from './data/packages'
import { generators } from './data/generators'
import { site } from './data/site'
import './App.css'

function HomePage() {
  return (
    <main className="container page-content">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Developer portal</p>
          <h1>Math44 Developers</h1>
          <p className="lead">
            Build with Math44 through simple APIs, open-source packages, and reusable generators.
          </p>
          <div className="stacked-actions">
            <Button href={site.docs}>Documentation</Button>
            <Button href={site.github} variant="secondary">GitHub</Button>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2>Build with Math44</h2>
        <div className="feature-grid three-up">
          <div className="feature-item">
            <h3>APIs</h3>
            <p>Use Math44 APIs in your own projects.</p>
            <Link to="/apis" className="inline-link">View APIs →</Link>
          </div>
          <div className="feature-item">
            <h3>npm Packages</h3>
            <p>Install reusable Math44 developer packages.</p>
            <Link to="/packages" className="inline-link">View Packages →</Link>
          </div>
          <div className="feature-item">
            <h3>GitHub Generators</h3>
            <p>Generate questions and developer resources with open-source tools.</p>
            <Link to="/generators" className="inline-link">View Generators →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function ApiPage() {
  const [query, setQuery] = useState('')

  const filteredApis = useMemo(() => {
    const searchText = query.trim().toLowerCase()

    if (!searchText) {
      return apis
    }

    return apis.filter((api) => {
      const haystack = `${api.name} ${api.description} ${api.endpoint} ${api.method}`.toLowerCase()
      return haystack.includes(searchText)
    })
  }, [query])

  return (
    <>
      <PageHeader title="APIs" description="Public APIs and developer endpoints provided by Math44." />

      <main className="container page-content listing-page">
        <div className="list-tools">
          <SearchInput value={query} onChange={setQuery} placeholder="Search APIs..." />
        </div>

        <div className="card-grid">
          {filteredApis.map((api) => (
            <ApiCard key={`${api.name}-${api.endpoint}`} api={api} />
          ))}
        </div>
      </main>
    </>
  )
}

function PackagesPage() {
  return (
    <>
      <PageHeader title="npm Packages" description="Reusable JavaScript packages for Math44 developers." />

      <main className="container page-content listing-page">
        <div className="card-grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </main>
    </>
  )
}

function GeneratorsPage() {
  return (
    <>
      <PageHeader title="GitHub Generators" description="Open-source generators for creating math questions and developer resources." />

      <main className="container page-content listing-page">
        <div className="card-grid">
          {generators.map((generator) => (
            <GeneratorCard key={generator.name} generator={generator} />
          ))}
        </div>
      </main>
    </>
  )
}

function DocsPage() {
  return (
    <>
      <PageHeader title="Documentation" description="Documentation and references for building with Math44." />

      <main className="container page-content docs-page">
        <div className="docs-cta">
          <Button href={site.docs}>Open Documentation →</Button>
        </div>

        <div className="docs-sections">
          <div className="docs-column">
            <h2>Getting Started</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/docs">Documentation</Link></li>
            </ul>
          </div>
          <div className="docs-column">
            <h2>APIs</h2>
            <ul>
              <li><Link to="/apis">Browse APIs</Link></li>
              <li><a href={site.docs} target="_blank" rel="noreferrer">API Reference</a></li>
            </ul>
          </div>
          <div className="docs-column">
            <h2>npm Packages</h2>
            <ul>
              <li><Link to="/packages">Package Library</Link></li>
              <li><a href={site.github} target="_blank" rel="noreferrer">GitHub Packages</a></li>
            </ul>
          </div>
          <div className="docs-column">
            <h2>Generators</h2>
            <ul>
              <li><Link to="/generators">Open-source Generators</Link></li>
              <li><a href={site.github} target="_blank" rel="noreferrer">Generator Repositories</a></li>
            </ul>
          </div>
          <div className="docs-column">
            <h2>Developer Resources</h2>
            <ul>
              <li><a href={site.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={site.docs} target="_blank" rel="noreferrer">Reference Docs</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHeader title="Math44 Developers" description="" />

      <main className="container page-content about-page">
        <p>
          Math44 Developers is the developer side of Math44, providing APIs, packages, generators,
          and resources for building with Math44.
        </p>
      </main>
    </>
  )
}

function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apis" element={<ApiPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/generators" element={<GeneratorsPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
