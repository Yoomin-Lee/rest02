import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="about-tag">Contact Us</p>
            <h2 className="section-title">
              프로젝트를<br />
              <span>함께 시작해요</span>
            </h2>
            <p className="contact-desc">
              컴퓨터 견적 문의, 소프트웨어 개발 상담, 웹사이트 제작 등<br />
              어떤 IT 고민이든 말씀해 주세요. 빠르게 연락드리겠습니다.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon"><i className="fa-solid fa-phone" /></span>
                <div>
                  <span className="info-label">전화 문의</span>
                  <span className="info-value">02-0000-0000</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><i className="fa-regular fa-envelope" /></span>
                <div>
                  <span className="info-label">이메일</span>
                  <span className="info-value">info@devco.co.kr</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><i className="fa-regular fa-clock" /></span>
                <div>
                  <span className="info-label">운영시간</span>
                  <span className="info-value">평일 09:00 – 18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="form-success">
                <i className="fa-solid fa-circle-check success-icon" />
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시일 내에 연락드리겠습니다.</p>
                <button onClick={() => setSent(false)} className="btn-outline-sm">
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>담당자 이름 *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="홍길동" required />
                  </div>
                  <div className="form-group">
                    <label>회사명</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="(주)회사명" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>연락처 *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="010-0000-0000" required />
                  </div>
                  <div className="form-group">
                    <label>이메일</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>문의 서비스</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">선택해 주세요</option>
                    <option value="pc">컴퓨터 / 장비 구매</option>
                    <option value="sw">소프트웨어 개발</option>
                    <option value="web">웹사이트 / 앱 개발</option>
                    <option value="etc">기타 문의</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>문의 내용 *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  문의 보내기 <i className="fa-solid fa-paper-plane" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
