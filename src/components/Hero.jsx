import './Hero.css'

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">since 2003</div>

        <h1 className="hero-title">
          기술로 만드는<br />
          <span>디지털 혁신</span>
        </h1>

        <p className="hero-desc">
          20년 이상의 노하우로 컴퓨터 판매부터 맞춤형 소프트웨어 개발,<br />
          웹 개발까지 — 고객의 비즈니스를 기술로 성장시킵니다.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => handleScroll('#services')}>
            서비스 보기
          </button>
          <button className="btn-outline" onClick={() => handleScroll('#contact')}>
            무료 상담 신청
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">20+</span>
            <span className="stat-label">년 업력</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">납품 프로젝트</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">300+</span>
            <span className="stat-label">고객사</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => handleScroll('#about')}>
        <span />
      </div>
    </section>
  )
}
