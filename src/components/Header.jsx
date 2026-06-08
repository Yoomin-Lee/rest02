import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: '홈', href: '#hero' },
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '연혁', href: '#history' },
  { label: '문의하기', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="logo" onClick={e => handleNav(e, '#hero')}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">DevCo</span>
          <span className="logo-bracket">]</span>
        </a>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={e => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={e => handleNav(e, '#contact')}>
            상담 신청
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
