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
| [`06_account_card/`](./01_web-main/02_css/06_account_card) | 계좌 카드에 스타일 입히기 — 박스모델 + Flexbox 실습 |

박스모델(content · padding · border · margin), viewport와 반응형, 미디어 쿼리는
[Day 3 로그](../daily-log/0828.md#5-css)에 정리했다.
박스모델과 Flexbox를 실제로 적용한 결과는 [`06_account_card/style.css`](./01_web-main/02_css/06_account_card/style.css) 에 있다 —
코드 안에 박스모델이 쓰인 자리를 `ⓐ~ⓔ`, Flexbox가 쓰인 자리를 `①~③` 으로 표시해 두었다.

### JavaScript — [`01_web-main/03_js`](./01_web-main/03_js)

| 파일 | 내용 |
| --- | --- |
| [`1_js_primitive.js`](./01_web-main/03_js/1_js_primitive.js) | 변수(`var`/`let`/`const`) · 명명규칙 · 원시 자료형(`bigInt` 포함) · 연산자 · 조건문(`if` · `switch` · 삼항연산자) · `alert`/`confirm`/`prompt` |
| [`2_js_reference.js`](./01_web-main/03_js/2_js_reference.js) | 참조 자료형 — 배열 · Set · 객체 · Map · JSON / 반복문(`for` · `while` · `forEach` · `for...of`) / 함수 · 스코프 · 호이스팅 · 클래스 |
| [`exam6-ajax.html`](./01_web-main/03_js/exam6-ajax.html) · [`exam7-fetch.html`](./01_web-main/03_js/exam7-fetch.html) · [`exam9-async-await.html`](./01_web-main/03_js/exam9-async-await.html) | 비동기 통신 — ajax · fetch · async/await — _진행 예정_ |

`===` 를 쓰는 이유, 이벤트 핸들러 "등록"의 의미, BOM(window · location · navigator)은
[Day 4 로그](../daily-log/0831.md)에 정리했다.

## 실습

| 실습 | 설명 | 링크 |
| --- | --- | --- |
| **타자 게임 개선 · 배포** | 문제점 8개 발견 후 수정, 파일 분리, GitHub Pages 배포 | [게임](https://mgyokim.github.io/woori-wonit-typing-game-mgyo/) · [코드](https://github.com/mgyokim/woori-wonit-typing-game-mgyo) |
| 우리WON뱅킹 핵심 UI 클론 코딩 | _진행 예정_ | – |
| AI와 함께 코딩하기 | 낯선 코드 읽기 · AI 디버깅 · 자동완성으로 계좌 카드 만들기 | [woori-wonit-ai-coding](https://github.com/mgyokim/woori-wonit-ai-coding) |
| AI에게 구조만 시켜보기 | CSS 없이 시맨틱 태그로만 계좌 카드 구조 만들기 | [`02_html기초.html`](./01_web-main/01_html/02_html기초.html) |
| 폼 데이터 다루기 | `method` 를 바꿔가며 전송값 관찰, 입력 종류별 값 추출 | [`04_html_input/`](./01_web-main/01_html/04_html_input) |
| 계좌 카드에 CSS 입히기 | 박스모델 + Flexbox로 카드 한 장 완성, 구조와 표현 분리 | [`06_account_card/`](./01_web-main/02_css/06_account_card) |
| 나의 포트폴리오 페이지 | `index.html` + `keyword.html`, 시맨틱 태그와 내비게이션 | [mgyokim.github.io](https://mgyokim.github.io/) · [코드](https://github.com/mgyokim/mgyokim.github.io) |
| 이체 가능 여부 판정 | 조건문을 함수로 묶어 잔액 · 한도 검사, 경계값 테스트 | _진행 중_ |
| 메뉴 분기 네 가지 방법 | 같은 문제를 `switch` · fallthrough · `includes()` · 삼항연산자로 | [`1_js_primitive.js`](./01_web-main/03_js/1_js_primitive.js) |
| 나이 분기 조건문 | `else if` 체인 순서와 경계값, 음수 · `NaN` 예외 처리 | [`1_js_primitive.js`](./01_web-main/03_js/1_js_primitive.js) |
| 배열 다루기 | 앞뒤 삽입·삭제, `splice` 로 교체, 숫자 `sort` 에 비교함수 넘기기 | [`2_js_reference.js`](./01_web-main/03_js/2_js_reference.js) |
| Map vs Object | 같은 숫자 key 를 Map 은 그대로, Object 는 문자열로 저장 | [`2_js_reference.js`](./01_web-main/03_js/2_js_reference.js) |
| 실습 파일 리팩터링 | 변수명 231곳 정리 후 실행 결과 대조로 동작 동일성 검증 | [`2_js_reference.js`](./01_web-main/03_js/2_js_reference.js) |

### 타자 게임 — 문제점 개선 후 배포

- **Situation** — 주어진 타자 게임 코드에서 문제점을 찾아 고치고, HTML·CSS·JS 를 분리해 배포하는 과제.
  코드는 동작은 했지만 **콘솔에 아무 에러도 안 뜨는 상태**였다.
- **Task** — 직접 눌러봐야 보이는 문제를 찾아내고, 고친 근거를 나중에도 설명할 수 있게 남기기.
- **Action** — 기능을 하나씩 실제로 조작하며 8개를 찾았다. 제외 키 목록을 늘리는 대신
  **`event.key.length !== 1`** 로 특수키를 한 줄에 걸렀고, `onclick` 속성을 `addEventListener` 로 옮겨
  **HTML 은 구조, JS 는 동작**만 담당하게 분리했다. 색·간격은 CSS 변수로 모았다.
- **Result** — 가장 큰 건 **스페이스바를 누르면 초기화 버튼이 다시 눌리던 버그**였다.
  버튼 클릭 후 포커스가 남아 스페이스·엔터로 재활성화되는 것이 원인이라 `preventDefault()` 와 `blur()` 로 해결했다.
  그 외 특수키 감점, 점수 무한 음수, 같은 문자 연속 출제, 키보드 없는 기기에서 실행 불가를 고쳤고
  정확도와 최고 점수(localStorage)를 추가했다. **8개 중 콘솔에 잡히는 건 하나도 없었다.**
- **기록** — [게임](https://mgyokim.github.io/woori-wonit-typing-game-mgyo/) · [코드와 상세](https://github.com/mgyokim/woori-wonit-typing-game-mgyo)

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

### 계좌 카드에 CSS 입히기 — 박스모델과 Flexbox

- **Situation** — 구조만 있던 계좌 카드에 스타일을 입히는 단계. 앞 실습에서 만든 HTML은
  `02_html기초.html` 한 파일 안에 들어 있어, 구조와 표현을 분리할 자리가 없었다.
- **Task** — 흰 배경 · 옅은 그림자 · 둥근 모서리, 버튼 두 개는 Flexbox로 카드 하단 양 끝 정렬.
  제약은 **CSS 파일 하나 · 외부 라이브러리 금지 · 속성마다 왜 썼는지 한글 주석**.
- **Action** — `06_account_card/` 폴더를 만들어 `index.html`(구조) 과 `style.css`(표현) 로 분리했다.
  나중에 다시 읽었을 때 어디서 무엇을 배웠는지 찾을 수 있도록, 코드 안에 **박스모델이 쓰인 자리는
  `ⓐ~ⓔ`, Flexbox가 쓰인 자리는 `①~③`** 으로 표시했다. 마진이 어떻게 동작하는지 보려고
  카드를 두 장 뒀다.
- **Result** — 만들면서 걸린 지점이 셋이었다.
  `box-sizing: border-box` 를 깔지 않으면 `width: 200px` 상자에 `padding: 20px` 을 준 순간
  실제 너비가 **240px** 이 되어 레이아웃이 밀린다. 카드 사이 간격은 `margin-bottom` 대신
  **flex의 `gap`** 으로 잡았는데, 마지막 카드에 남는 여백을 따로 지울 필요가 없어서다.
  `<dd>` 는 브라우저가 기본으로 왼쪽 **40px 들여쓰기**를 넣어, 계좌번호가 은행명보다 안쪽으로
  밀려 보였다 — `margin-left: 0` 으로 해결. 버튼에는 `flex: 1` 을 줘서 남는 공간을 반씩 나눠
  갖게 했고, 덕분에 글자 수가 달라져도 폭이 흔들리지 않는다.
- **기록** — [`06_account_card/`](./01_web-main/02_css/06_account_card) · [Day 3 (08.28)](../daily-log/0828.md#5-css)

## 관련 Daily Log

- [Day 2 (08.27)](../daily-log/0827.md) — AI 코딩 도구 · 프롬프트 엔지니어링 · AI 디버깅
- [Day 3 (08.28)](../daily-log/0828.md) — 웹의 개념 · HTTP · 브라우저 구조 / HTML · 시맨틱 태그 · 폼 · DOM / CSS 박스모델 · Flexbox · 반응형
- [Day 4 (08.31)](../daily-log/0831.md) — JavaScript 첫걸음 — 변수 · 자료형 · `===` · 조건문 · 함수
- [Day 5 (09.01)](../daily-log/0901.md) — 조건문 실습 — 부등호 방향 · `else if` 순서 · `NaN`
- [Day 6 (09.02)](../daily-log/0902.md) — 참조 자료형 — 배열 · 객체 · Map · 반복문 · 함수 · 클래스
- [Day 7 (09.03)](../daily-log/0903.md) — 클래스 실습 · DOM 과 이벤트 · 타자 게임 개선 후 배포
