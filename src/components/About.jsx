import './About.css'

const values = [
  {
    icon: '🛡️',
    title: '신뢰',
    desc: '20년간 고객과 함께 쌓아온 신뢰를 가장 중요한 자산으로 여깁니다.',
    color: 'blue',
  },
  {
    icon: '⚡',
    title: '혁신',
    desc: '변화하는 기술 트렌드를 선도하며 최적의 솔루션을 제공합니다.',
    color: 'green',
  },
  {
    icon: '🤝',
    title: '파트너십',
    desc: '단순 납품이 아닌 고객과 함께 성장하는 장기적 파트너를 지향합니다.',
    color: 'red',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="about-tag">Company Overview</p>
            <h2 className="section-title">
              기술과 신뢰로<br />
              <span>20년을 함께</span>
            </h2>
            <p className="about-text">
              2003년 9월, 더 나은 IT 환경을 만들겠다는 신념 하나로 출발한 저희 회사는
              컴퓨터 판매부터 맞춤형 소프트웨어·웹 개발까지 IT 서비스 전반을 아우르는
              전문 기업으로 성장해왔습니다.
            </p>
            <p className="about-text">
              수백 개의 기업·기관과 함께하며 쌓은 경험과 기술력은 저희의 가장 큰 경쟁력입니다.
              빠르게 변하는 디지털 환경 속에서 고객의 비즈니스가 앞서갈 수 있도록
              최적의 기술 파트너가 되겠습니다.
            </p>

            <div className="about-founded">
              <div className="founded-item">
                <span className="founded-label">설립일</span>
                <span className="founded-value">2003년 9월 23일</span>
              </div>
              <div className="founded-item">
                <span className="founded-label">사업 분야</span>
                <span className="founded-value">컴퓨터 판매 · 소프트웨어 개발 · 웹 개발</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            {values.map(v => (
              <div key={v.title} className={`value-card value-card--${v.color}`}>
                <span className="value-icon">{v.icon}</span>
                <div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
