# 01. 금융 서비스 프론트엔드 개발

> HTML·CSS 기초 · JavaScript 핵심 · React 기초 & 금융 컴포넌트

## 학습 목표

- [ ] 금융 서비스 화면을 구성하는 기본 구조와 스타일을 직접 구현할 수 있다.
- [ ] JavaScript를 활용해 입력 값 처리, 화면 전환 등 필요한 동작을 구현할 수 있다.
- [ ] React로 금융 서비스에 자주 사용되는 UI 컴포넌트를 만들 수 있다.
- [ ] 우리WON뱅킹의 핵심 화면을 따라 만들며 실제 금융 서비스의 사용자 흐름을 이해할 수 있다.

## 학습 내용

### HTML — [`01_web-main/01_html`](./01_web-main/01_html)

| 파일 | 내용 |
| --- | --- |
| [`01_html_basics.md`](./01_web-main/01_html/01_html_basics.md) | 웹의 3요소(구조 · 스타일 · 동작), HTML 문서 뼈대, DOM |
| [`00_emmet.html`](./01_web-main/01_html/00_emmet.html) | Emmet 약어로 태그 구조 펼치기 |
| [`02_html기초.html`](./01_web-main/01_html/02_html기초.html) | 시맨틱 태그로 만든 계좌 카드 — 태그마다 선택 근거 주석 |
| [`05_html_layout.html`](./01_web-main/01_html/05_html_layout.html) | block vs inline, `div` 와 `span` |
| [`03_html_input.html`](./01_web-main/01_html/03_html_input.html) | `input` 종류 — text · radio · checkbox · date · range · tel |
| [`04_html_input2.html`](./01_web-main/01_html/04_html_input2.html) · [`04_html_input/`](./01_web-main/01_html/04_html_input) | 폼 데이터 다루기 — URL 인코딩, `get`/`post`, 값 꺼내는 법 |
| [`06_layout.html`](./01_web-main/01_html/06_layout.html) | 레이아웃 종합 — Material Design 3 디자인 토큰 |
| [`02_ai_prompting.md`](./01_web-main/01_html/02_ai_prompting.md) | 프론트엔드 프롬프팅 — 프레임워크 명시 · 구조 묘사 · class 우선 |
| [`mission.md`](./01_web-main/01_html/mission.md) | 실습 과제 |

### CSS — [`01_web-main/02_css`](./01_web-main/02_css)

| 파일 | 내용 |
| --- | --- |
| [`01_position.html`](./01_web-main/02_css/01_position.html) | `static` · `relative` · `absolute` · `fixed` · `sticky` |
| [`02_z-index.html`](./01_web-main/02_css/02_z-index.html) | 겹친 요소의 수직(앞뒤) 순서 |
| [`04_size.html`](./01_web-main/02_css/04_size.html) | 크기 단위 — `px` · `em` · `rem` · `vw` · `vh` |
| [`03_flex.html`](./01_web-main/02_css/03_flex.html) | Flexbox — 1차원 레이아웃 — _진행 예정_ |
| [`05_grid.html`](./01_web-main/02_css/05_grid.html) | Grid — 2차원 레이아웃 — _진행 예정_ |

박스모델(content · padding · border · margin), viewport와 반응형, 미디어 쿼리는
[Day 3 로그](../daily-log/0828.md#5-css)에 정리했다.

### JavaScript

| 폴더 | 상태 |
| --- | --- |
| [`03_js`](./01_web-main/03_js) | 원시/참조 타입 · ajax · fetch · async-await — _진행 예정_ |

## 실습

| 실습 | 설명 | 링크 |
| --- | --- | --- |
| 우리WON뱅킹 핵심 UI 클론 코딩 | _진행 예정_ | – |
| AI와 함께 코딩하기 | 낯선 코드 읽기 · AI 디버깅 · 자동완성으로 계좌 카드 만들기 | [woori-wonit-ai-coding](https://github.com/mgyokim/woori-wonit-ai-coding) |
| AI에게 구조만 시켜보기 | CSS 없이 시맨틱 태그로만 계좌 카드 구조 만들기 | [`02_html기초.html`](./01_web-main/01_html/02_html기초.html) |
| 폼 데이터 다루기 | `method` 를 바꿔가며 전송값 관찰, 입력 종류별 값 추출 | [`04_html_input/`](./01_web-main/01_html/04_html_input) |
| 계좌 카드에 CSS 입히기 | 박스모델 + Flexbox로 카드 한 장 완성 — _Flexbox 진도 이후_ | – |
| 나의 포트폴리오 페이지 | `index.html` + `keyword.html`, 시맨틱 태그와 내비게이션 | _별도 저장소_ |

### AI를 활용한 프론트엔드 버그 5종 디버깅

- **Situation** — 잔액 미표시 · 입금 버튼 무반응 · 이자 소수점 · 환율 `[object Promise]` · 모달 미표시.
  콘솔에 에러가 뜨는 건 5개 중 1개뿐이라, 나머지는 "에러는 없는데 결과가 이상한" 유형이었다.
- **Task** — 각 증상의 원인을 규명하고, 수정 근거를 나중에도 설명 가능한 상태로 남기기.
- **Action** — 재현 조건 / 기대 동작 / 실제 동작 3종 세트로 프롬프트를 구성하고, 에러는 스택트레이스
  전문을 전달했다. AI에게 "먼저 설명, 그다음 코드" 순서를 강제해 답을 검증 가능하게 만들었고,
  수정 후 Node 내장 테스트 러너로 11개 케이스를 검증했다.
- **Result** — 5개 전부 수정. 원인이 전부 달랐다 — 이벤트 핸들러 즉시 실행(`()`), `await` 누락,
  오타로 인한 `null` 반환, 부동소수점 오차, `position` 누락으로 `top`/`z-index` 무시.
  이자 버그에서 AI는 `toFixed(2)` 를 권했지만 문자열이 되고 소수점도 남아 **오답**이었고,
  금액을 `Math.round()` 로 원 단위 정수 처리해 해결했다. CSS 버그는 유효한 CSS라
  콘솔에도 테스트에도 안 잡혀 개발자도구 Computed 탭에서 확인해야 했다.
- **기록** — [`02_버그잡기/README.md`](https://github.com/mgyokim/woori-wonit-ai-coding/blob/main/02_%EB%B2%84%EA%B7%B8%EC%9E%A1%EA%B8%B0/README.md)

### 시맨틱 태그로 계좌 카드 구조 만들기

- **Situation** — CSS를 배우기 전이라 스타일 없이 **구조만** 만들어야 했다. AI에게 그냥 요청하면
  의미 없는 `<div>` 로 감싼 결과가 돌아온다.
- **Task** — 태그를 고른 근거를 설명할 수 있는 상태로 만들기. 접근성 관점에서 `<div>` 최소화.
- **Action** — 제약(CSS 금지 · 시맨틱 태그 우선 · 태그마다 선택 이유 한 줄 주석)을 프롬프트에 못 박고,
  결과를 받은 뒤 **"여기서 `<div>` 대신 시맨틱 태그를 쓸 수 있는 곳이 있어?"** 라고 되물었다.
- **Result** — `<div>` 였던 자리가 `<article>` `<dl>` `<footer>` 로 바뀌었다. 되묻는 과정에서
  `<button>` 의 `type` 을 생략하면 `form` 안에서 submit으로 동작해 폼이 전송된다는 것,
  `<dl>` 이 "이름-값" 쌍에 맞고 `<table>` 은 2차원 데이터용이라는 것을 근거로 확인했다.
  **첫 답을 최종본으로 받지 않는 것**이 결과 품질을 갈랐다.
- **기록** — [`02_html기초.html`](./01_web-main/01_html/02_html기초.html) · [Day 3 (08.28)](../daily-log/0828.md)

## 관련 Daily Log

- [Day 2 (08.27)](../daily-log/0827.md) — AI 코딩 도구 · 프롬프트 엔지니어링 · AI 디버깅
- [Day 3 (08.28)](../daily-log/0828.md) — 웹의 개념 · HTTP · 브라우저 구조 / HTML · 시맨틱 태그 · 폼 · DOM / CSS 박스모델 · Flexbox · 반응형
