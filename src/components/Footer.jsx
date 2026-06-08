import './Footer.css'

export default function Footer() {
  const year = 2024

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="logo" onClick={e => { e.preventDefault(); scrollTop() }}>
              <span className="logo-bracket">[</span>
              <span className="logo-text">DevCo</span>
              <span className="logo-bracket">]</span>
            </a>
            <p className="footer-tagline">
              기술과 신뢰로 함께하는 IT 파트너<br />
              2003년 창업 이후 20년 이상의 경험
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h5>서비스</h5>
              <a href="#services">컴퓨터 판매</a>
              <a href="#services">소프트웨어 개발</a>
              <a href="#services">웹 개발</a>
            </div>
            <div className="footer-col">
              <h5>회사</h5>
              <a href="#about">회사소개</a>
              <a href="#history">연혁</a>
              <a href="#contact">채용 문의</a>
            </div>
            <div className="footer-col">
              <h5>문의</h5>
              <span>02-0000-0000</span>
              <span>info@devco.co.kr</span>
              <span>평일 09:00 – 18:00</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} DevCo. All rights reserved. 사업자등록번호: 000-00-00000
          </p>
          <button className="scroll-top" onClick={scrollTop} aria-label="맨 위로">
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
