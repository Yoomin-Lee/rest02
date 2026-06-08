import './History.css'

const milestones = [
  {
    year: '2003',
    month: '09',
    title: '회사 설립',
    desc: '컴퓨터 판매 및 IT 서비스 전문 기업으로 창업. 지역 기업·기관 대상 IT 인프라 공급 시작.',
    type: 'founding',
  },
  {
    year: '2005',
    month: '03',
    title: '소프트웨어 개발팀 창설',
    desc: '기업 맞춤형 업무 소프트웨어 개발 사업 진출. 첫 ERP 시스템 납품 성공.',
    type: 'growth',
  },
  {
    year: '2008',
    month: '06',
    title: '웹 개발 사업 확장',
    desc: '웹 개발 전담팀 구성 및 기업 홈페이지·쇼핑몰 제작 서비스 론칭.',
    type: 'expansion',
  },
  {
    year: '2012',
    month: '01',
    title: '정부 공공 SI 사업 진출',
    desc: '공공기관 행정시스템 개발 사업 수주. 지자체 및 공공 포털 개발 레퍼런스 확보.',
    type: 'milestone',
  },
  {
    year: '2016',
    month: '09',
    title: '설립 13주년 · 고객사 200곳 달성',
    desc: '누적 고객사 200개사 돌파. 중소기업 IT 파트너로서 입지 강화.',
    type: 'milestone',
  },
  {
    year: '2020',
    month: '04',
    title: '클라우드 · 모바일 사업 확대',
    desc: '클라우드 기반 SaaS 개발 및 모바일 앱 개발 서비스 추가. 비대면 환경 대응.',
    type: 'expansion',
  },
  {
    year: '2023',
    month: '09',
    title: '설립 20주년',
    desc: '창립 20주년을 맞이하며 누적 프로젝트 500건 이상, 고객사 300개사 이상 달성.',
    type: 'founding',
  },
]

const typeLabel = {
  founding: { label: '창업·기념', color: 'blue' },
  growth: { label: '사업 성장', color: 'green' },
  expansion: { label: '사업 확장', color: 'green' },
  milestone: { label: '주요 성과', color: 'red' },
}

export default function History() {
  return (
    <section id="history" className="history">
      <div className="container">
        <div className="section-header">
          <p className="about-tag">Company History</p>
          <h2 className="section-title">
            20년의 <span>성장 기록</span>
          </h2>
          <p className="section-subtitle">
            2003년 창업 이후, 한 걸음씩 성장해온 발자취입니다.
          </p>
        </div>

        <div className="timeline">
          {milestones.map((m, i) => {
            const t = typeLabel[m.type]
            return (
              <div key={i} className={`timeline-item${i % 2 === 0 ? ' left' : ' right'}`}>
                <div className="timeline-content">
                  <span className={`timeline-badge badge--${t.color}`}>{t.label}</span>
                  <div className="timeline-date">
                    <span className="timeline-year">{m.year}</span>
                    <span className="timeline-month">{m.month}월</span>
                  </div>
                  <h4 className="timeline-title">{m.title}</h4>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            )
          })}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  )
}
