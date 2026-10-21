# NAVER × Spotify — Clone Coding

NAVER × Spotify 프로모션 웹사이트를 참고하여 Figma 디자인부터 HTML, CSS, JavaScript 구현까지 직접 진행하는 클론 코딩 학습 프로젝트입니다.

기존에 학습한 웹 퍼블리싱 기술을 실제 웹사이트 제작에 적용하고, 레이아웃 구성과 인터랙션 구현 능력을 향상시키는 것을 목표로 합니다.

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 프로젝트명 | NAVER × Spotify Clone Coding |
| 프로젝트 유형 | 웹사이트 클론 코딩 / 개인 학습 |
| 원본 사이트 | https://mkt.naver.com/spotify |
| GitHub | https://github.com/dororo-dei/naver-spotify-clone |
| 제작 방식 | Figma 디자인 → HTML/CSS → JavaScript |
| 우선 제작 환경 | Desktop Web |
| 반응형 | PC 버전 완료 후 시간에 따라 확장 |
| 진행 상태 | 초기 기획 및 디자인 준비 |

### 프로젝트 목표

- 실제 웹사이트의 구조와 디자인을 분석하여 최대한 유사하게 재현
- Figma를 활용한 웹 디자인 및 컴포넌트 관리
- HTML 시맨틱 태그를 활용한 페이지 구조 작성
- CSS Flexbox, Grid 등을 활용한 레이아웃 구현
- JavaScript DOM 및 이벤트를 활용한 인터랙션 구현
- 스크롤 애니메이션과 앨범 카드 순환 효과 학습
- Git과 GitHub를 활용한 버전 관리

## 2. 사용 기술 및 도구

| 구분 | 기술 및 도구 | 용도 |
|---|---|---|
| Design | Figma | UI 디자인 및 컴포넌트 제작 |
| Markup | HTML5 | 웹페이지 구조 작성 |
| Styling | CSS3 | 레이아웃, 스타일, 애니메이션 |
| Interaction | JavaScript | DOM 조작 및 이벤트 처리 |
| Editor | VS Code | 코드 작성 |
| Version Control | Git / GitHub | 소스 코드 버전 관리 |
| Reference | Chrome DevTools | 원본 구조 및 리소스 분석 |

※ 일부 기술은 구현 예정이며, 실제 사용 기술은 프로젝트 진행에 따라 변경될 수 있습니다.

## 3. 제작 프로세스

### Phase 01. 원본 사이트 분석

- [x] 클론 코딩 대상 사이트 선정
- [x] GoFullPage를 활용한 전체 페이지 스크린샷 수집
- [x] 이미지 리소스 수집
- [ ] 이미지 리소스 분류 및 정리
- [ ] 섹션별 레이아웃 및 인터랙션 상세 분석

### Phase 02. Figma 디자인

- [x] Figma 프로젝트 페이지 구성
- [ ] Desktop 디자인 프레임 설정
- [ ] 공통 스타일 및 디자인 요소 분석
- [ ] 재사용 컴포넌트 제작
- [ ] Assets를 활용한 컴포넌트 인스턴스 배치
- [ ] 섹션별 Desktop 디자인 제작
- [ ] 전체 디자인 검토

### Phase 03. HTML/CSS 구현

- [ ] 프로젝트 폴더 및 파일 구성
- [ ] HTML 기본 구조 작성
- [ ] CSS Reset 및 공통 스타일 적용
- [ ] Header 및 메인 비주얼 구현
- [ ] 콘텐츠 섹션별 레이아웃 구현
- [ ] Footer 구현
- [ ] 원본 디자인과 비교 및 수정

### Phase 04. JavaScript 인터랙션

- [ ] 앨범 카드 순환 및 회전 애니메이션
- [ ] 스크롤 기반 애니메이션
- [ ] FAQ 열기 및 닫기
- [ ] 기타 필요한 이벤트 구현
- [ ] 인터랙션 동작 검증

### Phase 05. 최종 검증

- [ ] Desktop 레이아웃 검증
- [ ] 이미지 및 폰트 경로 확인
- [ ] JavaScript 오류 확인
- [ ] 원본과 디자인 비교
- [ ] 코드 정리
- [ ] README 최종 업데이트

### Optional. 반응형 웹 디자인

PC 버전 완성 후 시간이 남으면 진행합니다.

- [ ] Figma Tablet 디자인
- [ ] Figma Mobile 디자인
- [ ] CSS Media Query 적용
- [ ] 반응형 레이아웃 테스트

## 4. Figma 작업 구조

Figma 파일은 역할에 따라 페이지를 구분하여 관리합니다.

```text
NAVER × Spotify — Clone Coding
│
├── 01 — Components
│   └── 공통 UI 컴포넌트
│
├── 02 — Web Design
│   └── Desktop 웹 디자인
│
└── 03 — References
    └── 원본 스크린샷 및 참고 자료
```

### 컴포넌트 관리 방식

반복적으로 사용하는 UI 요소는 별도의 Components 페이지에서 메인 컴포넌트로 제작합니다.

실제 웹 디자인 페이지에서는 Assets 패널을 통해 컴포넌트 인스턴스를 배치하고, 공통 디자인을 일관성 있게 관리합니다.

## 5. 프로젝트 폴더 구조

아래는 개발 단계에서 사용할 예정인 폴더 구조입니다.

```text
naver-spotify-clone/
│
├── index.html
│
├── css/
│   ├── reset.css
│   └── style.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── references/
│   └── reference-desktop-full.png
│
└── README.md
```

반응형 구현 시 `css/responsive.css` 파일을 추가할 예정입니다.

## 6. 주요 구현 예정 기능

### 앨범 카드 순환 애니메이션

여러 앨범 이미지가 겹쳐진 상태에서 일정 시간마다 회전하고 순환하는 애니메이션을 구현할 예정입니다.

**학습 및 활용 예정 기술**

- CSS `position`, `z-index`
- CSS `transform`, `transition`
- JavaScript DOM 조작
- `setInterval()`을 활용한 반복 실행

### 스크롤 애니메이션

스크롤 위치에 따라 콘텐츠가 등장하거나 움직이는 효과를 분석하고 구현할 예정입니다.

**학습 및 활용 예정 기술**

- CSS `opacity`, `transform`
- CSS `transition`
- JavaScript 이벤트
- `IntersectionObserver` (필요 시)

### FAQ 인터랙션

사용자가 질문을 클릭하면 답변이 펼쳐지고 닫히는 기능을 구현할 예정입니다.

**학습 및 활용 예정 기술**

- `querySelectorAll()`
- `addEventListener()`
- `classList`
- CSS 상태별 스타일

※ 실제 구현 방법은 원본 동작 분석 및 개발 과정에서 결정합니다.

## 7. 학습 목표

이 프로젝트에서 중점적으로 학습할 내용은 다음과 같습니다.

1. 기존 웹사이트의 디자인과 구조를 분석하는 방법
2. Figma 컴포넌트와 인스턴스를 활용한 UI 제작
3. 디자인을 HTML/CSS 코드로 변환하는 과정
4. CSS 레이아웃과 요소 배치 원리
5. JavaScript를 활용한 인터랙션 구현
6. 원본과 결과물을 비교하며 수정하는 과정
7. Git/GitHub를 활용한 프로젝트 관리

## 8. 진행 기록

| 날짜 | 작업 내용 | 상태 |
|---|---|---|
| 2026-10-20 | 프로젝트 대상 선정 및 원본 리소스 수집 | 진행 |
| 2026-10-20 | Figma 페이지 구성 | 완료 |
| 2026-10-20 | GitHub 저장소 생성 및 초기 Push | 완료 |
| 추후 업데이트 | Desktop 디자인 및 웹 구현 | 예정 |

## 9. 참고 및 유의사항

본 프로젝트는 HTML, CSS, JavaScript 학습을 목적으로 제작하는 비공식 클론 코딩 프로젝트입니다.

NAVER, Spotify 및 관련 로고, 이미지, 콘텐츠의 권리는 각 권리자에게 있습니다.

원본 사이트와 공식적인 제휴 관계가 없으며, 학습용으로 수집한 리소스를 외부에 공개하거나 배포할 때에는 별도의 사용 권한 확인이 필요합니다.

**Original Website:** https://mkt.naver.com/spotify