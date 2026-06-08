import './Services.css'

const services = [
  {
    id: '01',
    icon: '🖥️',
    title: '컴퓨터 판매',
    subtitle: 'Computer Sales',
    desc: '기업·기관에 최적화된 PC, 서버, 주변기기를 합리적인 가격에 공급합니다. 구성 상담부터 납품·설치·A/S까지 원스톱으로 지원합니다.',
    features: ['데스크탑 / 노트북 공급', '서버 · 네트워크 장비', '주변기기 · 소모품', '납품 후 A/S 보장'],
    color: 'blue',
    accent: '#1e4db7',
  },
  {
    id: '02',
    icon: '⚙️',
    title: '소프트웨어 개발',
    subtitle: 'Software Development',
    desc: '고객의 업무 프로세스에 꼭 맞는 맞춤형 소프트웨어를 개발합니다. 요구사항 분석부터 운영·유지보수까지 전 과정을 책임집니다.',
    features: ['기업용 ERP / MES 개발', '업무 자동화 솔루션', '데이터베이스 설계', '유지보수 · 기술지원'],
    color: 'green',
    accent: '#1a5c2a',
  },
  {
    id: '03',
    icon: '🌐',
    title: '웹 개발',
    subtitle: 'Web Development',
    desc: '반응형 웹사이트부터 대규모 웹 애플리케이션까지 최신 기술로 제작합니다. 사용자 경험과 성능을 동시에 잡는 웹 솔루션을 제공합니다.',
    features: ['기업 · 기관 홈페이지', '쇼핑몰 · 전자상거래', '웹 애플리케이션', '모바일 · 반응형 UI'],
    color: 'red',
    accent: '#8b1a1a',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <p className="about-tag">Our Services</p>
          <h2 className="section-title">
            전문 IT 서비스<br />
            <span>세 가지 핵심 영역</span>
          </h2>
          <p className="section-subtitle">
            컴퓨터 판매부터 맞춤 개발까지, 기업의 IT 환경을 책임집니다.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div key={s.id} className={`service-card service-card--${s.color}`}>
              <div className="service-num">{s.id}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-sub">{s.subtitle}</p>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}>
                    <span className="check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="service-btn">자세히 보기 →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
