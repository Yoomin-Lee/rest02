# 개발일지 — IT 개발 회사 사이트

> 프로젝트: `yoomin-lee/rest02`  
> 기술 스택: React 19 · Vite 8 · CSS Modules  
> 배포: GitHub Pages (`gh-pages` 브랜치)

---

## 2026-06-08

### 1차 — 개발 환경 셋업

- GitHub 저장소(`yoomin-lee/rest02`) 클론
- Vite + React 19 프로젝트 초기화
- `vite.config.js` — GitHub Pages 경로 대응 `base: '/rest02/'` 설정
- `.gitignore` 설정 (`node_modules`, `dist`)
- `npm run dev` 로컬 개발 서버 정상 확인

---

### 2차 — 전체 페이지 초기 개발

**컴포넌트 구조 설계**

```
src/
├── styles/
│   └── global.css        CSS 변수 (색상 시스템, 공통 레이아웃)
├── components/
│   ├── Header.jsx/css    고정 네비게이션 (스크롤 감지, 모바일 햄버거)
│   ├── Hero.jsx/css      메인 히어로 배너
│   ├── About.jsx/css     회사소개
│   ├── Services.jsx/css  3대 서비스 카드
│   ├── History.jsx/css   연혁 타임라인
│   ├── Contact.jsx/css   문의 폼
│   └── Footer.jsx/css    하단 푸터
└── App.jsx
```

**회사 정보 반영**
- 설립일: 2003년 9월 23일
- 사업 분야: 컴퓨터 판매 · 소프트웨어 개발 · 웹 개발
- 업력 20년 이상, 누적 프로젝트 500건, 고객사 300개사

**초기 색상 시스템**
- 메인: 다크블루 `#0d1b2e` + 로열블루 `#1e4db7`
- 포인트: 다크그린 + 다크레드

---

### 3차 — GitHub Pages 배포 설정

- `gh-pages` 패키지 설치
- `package.json` deploy 스크립트 추가
  ```json
  "deploy": "vite build && gh-pages -d dist --dotfiles"
  ```
- `.nojekyll` 파일 포함 배포 (`--dotfiles` 플래그) — Jekyll 렌더링 방지
- GitHub API로 Pages 소스 브랜치 `main` → `gh-pages` 전환
- 배포 URL: https://yoomin-lee.github.io/rest02/

**트러블슈팅**
| 문제 | 원인 | 해결 |
|---|---|---|
| Pages에서 README만 노출 | Jekyll이 `.nojekyll` 없이 README 렌더링 | `--dotfiles` 옵션으로 `.nojekyll` 포함 배포 |
| Pages 소스가 `main` 브랜치 | 기존 설정 잔존 | GitHub API PUT으로 `gh-pages` 브랜치로 변경 |

---

### 4차 — 색상 시스템 리디자인 (다크모드 고도화)

**요구사항:** 웹 개발 전문 회사에 어울리는 신뢰감 있는 다크모드

**변경 내용**

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 배경 최하층 | `#0d1b2e` | `#070c14` (더 깊은 다크) |
| 메인 블루 | `#1e4db7` | `#2563eb` (명료한 로열블루) |
| 포인트 1 | 다크그린 | 사이언 `#0891b2` (테크/혁신) |
| 포인트 2 | 다크레드 | 앰버 `#d97706` (강조/CTA) |
| 타이틀 그라데이션 | 단색 블루 | 블루 → 사이언 그라데이션 |
| 카드 스타일 | 색상별 배경 | 통일된 다크 + 상단 accent 라인 |

**레퍼런스 방향:** Vercel · Linear 스타일 고급 다크 테마

---

### 5차 — 파비콘 및 페이지 타이틀 적용

- SVG 파비콘 제작 (`public/favicon.svg`)
  - 다크 네이비 배경 + 블루→사이언 그라데이션 `[ D ]` 브래킷 스타일
  - 사이트 로고와 동일한 디자인 언어로 통일
- 페이지 타이틀 변경: `IT 개발 회사` → `DevCo | IT 개발 전문 회사`

---

### 6차 — 네비게이션 가독성 개선

**문제:** 헤더 메뉴(홈/회사소개/서비스/연혁/문의하기) 글씨가 어두워 가독성 저하

| 속성 | 변경 전 | 변경 후 |
|---|---|---|
| 색상 | `--text-300` (`#7e8fa8`) | `--text-200` (`#c8d3e8`) |
| 굵기 | `font-weight: 500` | `font-weight: 600` |
| 크기 | `0.9rem` | `0.92rem` |

---

### 7차 — 이모지 → Font Awesome 아이콘 전환

**요구사항:** 시스템 이모지 제거, 통일된 아이콘 체계로 감성적인 UI 구성

- Font Awesome 6 Free CDN 적용 (`index.html`)
- 전체 이모지를 FA 아이콘으로 교체

| 위치 | 기존 | 변경 후 |
|---|---|---|
| About — 신뢰 | 🛡️ | `fa-shield-halved` |
| About — 혁신 | ⚡ | `fa-microchip` |
| About — 파트너십 | 🤝 | `fa-handshake` |
| Services — 컴퓨터 판매 | 🖥️ | `fa-server` |
| Services — SW개발 | ⚙️ | `fa-code` |
| Services — 웹개발 | 🌐 | `fa-globe` |
| Contact — 전화 | 📞 | `fa-phone` |
| Contact — 이메일 | ✉️ | `fa-regular fa-envelope` |
| Contact — 운영시간 | 🕐 | `fa-regular fa-clock` |
| Contact — 문의 성공 | ✅ | `fa-circle-check` |

- 아이콘 박스 스타일: 색상 계열별 반투명 배경 + 테두리 + 라운드 처리
- 문의 버튼: `fa-paper-plane`, 서비스 링크: `fa-arrow-right` 추가

---

## 섹션별 기능 요약

### Header
- `position: fixed` 스크롤 고정
- 스크롤 50px 초과 시 `backdrop-filter: blur(16px)` 반투명 배경 활성화
- 모바일 햄버거 메뉴 (전체화면 오버레이)
- 로고: `[DevCo]` 브래킷 스타일

### Hero
- 풀스크린 (100vh)
- 그리드 배경 패턴 + 방사형 글로우 효과
- `SINCE 2003` 애니메이션 배지
- 통계 수치: 20+ 년 업력 / 500+ 납품 프로젝트 / 300+ 고객사
- 스크롤 힌트 애니메이션

### About
- 2열 그리드 (소개 텍스트 + 핵심가치 카드)
- 설립일·사업분야 인포박스
- 핵심가치 3가지: 신뢰 / 혁신 / 파트너십

### Services
- 3열 카드 그리드 (반응형: 모바일 1열)
- 서비스별 상단 accent 라인 색상 구분
  - 컴퓨터 판매: 블루 라인
  - 소프트웨어 개발: 사이언 라인
  - 웹 개발: 앰버 라인
- 호버 시 `translateY(-7px)` 부상 효과

### History (연혁)
- 좌우 교차 타임라인 (모바일: 단측 라인)
- 2003 창업 → 2023 설립 20주년 7개 마일스톤
- 유형별 배지 색상: 창업(블루) / 성장(사이언) / 성과(앰버)

### Contact
- 2열 레이아웃 (연락처 정보 + 문의 폼)
- 폼 필드: 담당자명 / 회사명 / 연락처 / 이메일 / 서비스 선택 / 문의내용
- 제출 후 성공 메시지 상태 전환

### Footer
- 서비스 / 회사 / 문의 링크 3열
- 맨 위로 스크롤 버튼
