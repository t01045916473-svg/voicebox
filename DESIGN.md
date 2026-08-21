---
name: 우리 동네 목소리함
colors:
  background: "#FFF9F0"
  on-background: "#2B2438"
  surface: "#FFFFFF"
  surface-container: "#FFF3E2"
  surface-container-high: "#FDEEDB"
  on-surface: "#2B2438"
  on-surface-variant: "#5C5566"
  outline: "#E4DEE0"
  outline-variant: "#EFEAEB"
  primary: "#FF7A59"
  on-primary: "#2B2438"
  primary-container: "#FFE4DA"
  on-primary-container: "#2B2438"
  secondary: "#8A8296"
  on-secondary: "#FFFFFF"
  secondary-container: "#ECE9EF"
  on-secondary-container: "#2B2438"
  error: "#D14343"
  on-error: "#FFFFFF"
  error-container: "#FDE3E1"
  on-error-container: "#7A241F"
shadow:
  sm: "0px 2px 8px rgba(43, 36, 56, 0.08)"
  md: "0px 8px 24px rgba(43, 36, 56, 0.12)"
typography:
  fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
  headline:
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  title:
    fontSize: 18px
    fontWeight: "700"
    lineHeight: 26px
  title-sm:
    fontSize: 16px
    fontWeight: "600"
    lineHeight: 24px
  body:
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  body-sm:
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
  meta:
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    color: "{colors.on-surface-variant}"
  label-button:
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
  title-xs:
    fontSize: 14px
    fontWeight: "700"
    lineHeight: 20px
  caption:
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 18px
  meta-xs:
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 16px
    color: "{colors.on-surface-variant}"
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 16px
  lg: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 16px
  margin: 20px
breakpoints:
  mobile: "< 768px"
  tablet: "768px – 1023px"
  desktop: ">= 1024px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 20px"
    border: "1px solid {colors.outline}"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  card-post:
    layout: "row (좌: 사진 56px, 우: 본문)"
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
    gap: "{spacing.sm}"
    shadow: "{shadow.sm}"
    border: "1px solid {colors.outline-variant}"
  card-post-hover:
    shadow: "{shadow.md}"
  card-post-photo:
    size: "56px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.outline-variant}"
    iconColor: "{colors.on-surface-variant}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.outline}"
  input-field-focus:
    border: "1px solid {colors.primary}"
  input-textarea:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.outline}"
    minHeight: "120px"
    resize: "vertical"
  photo-upload:
    backgroundColor: "{colors.surface}"
    border: "1px dashed {colors.outline}"
    rounded: "{rounded.md}"
    height: "160px"
    maxWidth: "240px"
    iconColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
  photo-upload-remove:
    size: "24px"
    shape: "circle"
    backgroundColor: "{colors.surface}"
    shadow: "{shadow.sm}"
  badge-status:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-status-done:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  badge-status-sm:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.meta-xs}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  badge-status-sm-done:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  category-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.full}"
    padding: "5px 12px"
    typography: "{typography.caption}"
  category-chip-active:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    fontWeight: "700"
  tab-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    typography: "{typography.caption}"
  tab-filter-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  tab-nav:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.title-sm}"
    padding: "12px 0"
    borderBottom: "2px solid transparent"
  tab-nav-active:
    textColor: "{colors.on-background}"
    borderBottom: "2px solid {colors.primary}"
  button-status-group:
    layout: "3버튼 세그먼트(접수/처리중/완료), 라디오형 단일 선택"
    rounded: "{rounded.DEFAULT}"
    border: "1px solid {colors.outline}"
    itemPadding: "10px 0"
    itemTypography: "{typography.label-button}"
  button-status-selected-progress:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  button-status-selected-done:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-google:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 20px"
    border: "1px solid {colors.outline}"
    iconSize: "24px"
  page-header:
    backgroundColor: "{colors.background}"
    padding: "14px {spacing.margin}"
    iconSize: "28px"
    iconRounded: "{rounded.sm}"
    brandTypography: "{typography.title-sm}"
  hero-banner:
    backgroundColor: "{colors.surface-container}"
    borderBottom: "1px solid {colors.outline-variant}"
    padding: "{spacing.margin}"
    titleTypography: "{typography.title}"
    descriptionTypography: "{typography.body-sm}"
  page-footer:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    padding: "{spacing.lg} {spacing.margin}"
---

## Brand & Style

위스테이 청소년센터는 남양주 별내에서 청소년의 방과 후를 돌보고 동네 일을 함께 챙기는 마을 공간이다. "우리 동네 목소리함"은 주민이 동네에 하고 싶은 말을 편하게 남기고, 그 목소리가 실제로 다뤄지는 과정을 지켜볼 수 있는 서비스다.

스타일은 **따뜻한 동네 커뮤니티**를 지향한다. 관공서 민원 서비스처럼 딱딱하지 않되, 장난스럽지도 않은 "부드럽고 단정한" 톤을 유지한다. 코랄빛으로 참여를 독려하고, 회보라로 차분함과 신뢰를 더한다. 장식은 최소화하고 카드형 레이아웃과 여백으로 정돈된 인상을 준다.

## Colors

- **주색 (Primary) `#FF7A59`** — 제출·작성 등 핵심 행동 버튼, 활성 탭, 강조 아이콘에만 사용한다. 주색 위 글자는 항상 `on-primary`(`#2B2438`, 진한 글자색)를 쓴다. 흰 글자는 대비가 부족해(약 2.6:1) 쓰지 않는다.
- **보조색 (Secondary) `#8A8296`** — 보조 버튼, 배지, 네비게이션 강조에 사용한다. 보조색 위 글자는 흰색(`on-secondary`)을 쓰되 굵은 라벨·배지 용도로만 한정한다(본문 텍스트로는 대비 부족).
- **배경 (Background) `#FFF9F0`** — 페이지 바탕색. 카드 등 뜬 요소는 `surface`(`#FFFFFF`)로 배경과 한 단만 밝게 구분한다.
- **글자색 `#2B2438`** — 본문·제목의 기본 글자색. 메타 정보(날짜, 조회수 등)는 `on-surface-variant`(`#5C5566`)로 한 단 낮춘다.
- **테두리 (Outline) `#E4DEE0`** — 카드·입력창의 기본 테두리. 더 옅은 구분선(리스트 divider 등)은 `outline-variant`(`#EFEAEB`)를 쓴다.
- **그림자 (Shadow)** — 순수 검정이 아닌 글자색을 낮은 투명도로 섞은 색을 쓴다. `shadow.sm`(카드 기본), `shadow.md`(호버·모달) 두 단계만 사용한다.
- **오류 (Error) `#D14343`** — 폼 검증 실패, 삭제 확인 등 위험 액션에만 쓴다. 다른 용도로 빨강을 쓰지 않는다.

## Typography

한글 가독성이 좋고 둥근 인상의 **Pretendard**를 기본 폰트로 쓴다(시스템 폰트로 자동 대체).

| 단계 | 크기 | 굵기 | 용도 |
|---|---|---|---|
| headline | 24px | 700 | 페이지 제목 |
| title | 18px | 700 | 섹션 제목 |
| title-sm | 16px | 600 | 카드 제목 |
| body | 16px | 400 | 본문 |
| body-sm | 14px | 400 | 부가 설명 |
| meta | 13px | 500 | 작성일·조회수 등 메타 정보 (`on-surface-variant` 색) |
| label-button | 15px | 600 | 버튼·탭 라벨 |
| title-xs | 14px | 700 | 목소리함 게시글 카드 제목 (리스트형 밀도) |
| caption | 12px | 400 | 카드 본문 요약, 분야 칩, 필터 탭 라벨 |
| meta-xs | 11px | 500 | 카드 안 메타 정보(분야·작성자·날짜), 카드 안 상태 배지 (`on-surface-variant` 색) |

이 10단계 밖의 크기·굵기는 만들지 않는다. `title-xs`·`caption`·`meta-xs`는 목소리함 게시글 카드처럼 한 화면에 여러 건을 촘촘히 보여줘야 하는 리스트형 컴포넌트 전용이며, 페이지 제목이나 폼 라벨 등 일반 텍스트에는 기존 7단계를 그대로 쓴다.

## Layout & Spacing

간격은 `4 / 8 / 16 / 24 / 32 / 48px` 6단계(xs~2xl)만 쓴다. 그리드 사이 간격(gutter)은 아래 반응형 표를 따르고(화면 크기별로 다르다), 페이지 좌우 여백(margin)은 모바일 기준 20px로 고정한다.

- **모서리(rounded)**: `8 / 12 / 16 / 20px`, 배지·아바타는 `full`(원형/필). 입력창 8px, 버튼 12px, 사진 업로드 박스 16px, 게이트 화면 카드 등 큰 카드 20px로 역할을 고정한다. 목소리함 게시글 카드(`card-post`)는 촘촘한 리스트형이라 예외적으로 12px를 쓴다.
- **그림자**: 카드 기본은 `sm`, 호버·모달은 `md`. 한 요소에 그림자를 겹쳐 쓰지 않는다.

### 반응형 3폭

| 화면 | 너비 | 열 수 | gutter |
|---|---|---|---|
| PC | ≥1024px | 3열 | 24px |
| 태블릿 | 768px~1023px | 2열 | 20px |
| 모바일 | <768px | 1열 | 16px |

컨테이너 최대 너비는 1200px로 두고 그 이상은 좌우 여백만 늘어난다. 목소리함 게시글 카드 그리드는 이 표를 기준으로 열 수만 바뀌고, 카드 내부 구조(패딩·모서리·그림자)는 화면 크기와 무관하게 동일하게 유지한다. 다만 카드 자체가 정보 우선형으로 촘촘하므로 그리드 gutter는 화면 크기와 무관하게 `spacing.sm`(8px)으로 통일해 쓴다 — 카드가 조밀한데 사이 간격만 넓으면 밀도감이 깨진다. (이 값은 위 breakpoints 표의 gutter가 아니라 목소리함 게시글 카드 그리드에만 적용하는 예외다.)

## Elevation & Depth

배경(`#FFF9F0`)과 카드(`#FFFFFF`)의 밝기 차이, 그리고 옅은 그림자만으로 위계를 표현한다. 굵은 테두리로 카드를 두르지 않는다 — 테두리는 `outline-variant` 1px 정도로 보조 수단에 그친다.

## Shapes

버튼과 배지는 확실히 둥글게(버튼 12px, 배지 full), 카드는 그보다 살짝 덜 둥글게 만들어 "카드 안에 담긴 버튼"이라는 위계가 형태로도 드러나게 한다. 사진 업로드 박스·게이트 화면 카드처럼 여백이 넉넉한 큰 카드는 16px, 목소리함 게시글 카드처럼 촘촘한 리스트형 카드는 12px를 쓴다.

## Components

오늘 함께 만드는 4가지 공통기능 — **글 저장하기 · 사진 올리기 · 로그인 & 회원가입 · 처리상태 & 관리자 화면** — 을 기준으로 아래 컴포넌트 규격을 정한다. 페이지 골격(헤더·히어로·푸터)은 확정된 「안 1 · 정보 우선형」 시안을 그대로 따른다.

### 페이지 골격 — 헤더 · 히어로 · 푸터

모든 일반 화면(홈, 마이페이지, 관리자 화면)은 이 헤더·푸터를 공유한다. 로그인/회원가입 게이트 화면만 히어로 없이 헤더·본문·푸터로 구성한다.

- **헤더 (page-header)**: 최대 너비 1200px 중앙 정렬, 상하 패딩 14px · 좌우 페이지 마진(20px). 좌측 정렬로 아이콘(28×28px, `rounded.sm`) + 단체명(`title-sm`, `on-background` 색)만 배치한다. 배경은 페이지 배경과 동일해 구분선이 없다.
- **히어로 (hero-banner)**: 배경 `surface-container`, 하단 1px `outline-variant` 보더. 내부 패딩은 페이지 마진(20px)과 동일, 최대 너비 1200px. 좌측에 제목(`title`, `on-background` 색)과 설명(`body-sm`, `on-surface-variant` 색), 우측에 `button-primary` 하나("의견 남기기")를 배치한다. 화면이 좁아지면 버튼이 텍스트 아래로 줄바꿈된다. 설명문은 서비스가 하는 일과 접수→처리중→완료 흐름을 차분히 안내하는 톤을 유지하고, 강한 슬로건형 카피는 쓰지 않는다.
- **푸터 (page-footer)**: 배경 `surface-container`, 패딩 `spacing.lg`(24px) 상하 · 페이지 마진 좌우, 최대 너비 1200px. 단체명(`body-sm`/700, `on-surface`) → 단체 한 줄 소개(`caption`, `on-surface-variant`) → 저작권 표기(`caption`) 순서로 쌓는다.

### 버튼 & 입력창

`button-primary`는 화면당 핵심 행동 1개에만 쓴다 — 홈의 "의견 남기기", 글쓰기 폼의 "저장하기", 게이트 화면의 구글 인증(단, 구글 버튼은 아래 전용 컴포넌트를 쓰고 `button-primary` 색을 입히지 않는다), 마이페이지 "내 정보 저장" 등 화면마다 하나로 좁힌다. `button-secondary`는 취소·뒤로가기·보조 액션(분야 추가 등)에 쓰며 테두리만 있고 배경은 `surface`다. 입력창(`input-field`)은 기본 상태에서 `outline` 테두리, 포커스 시 `primary` 테두리로 바뀐다.

### 카드 (card-post)

목소리함 게시글 카드는 **가로 배치형**이다 — 좌측에 56px 정사각 사진(`card-post-photo`, `rounded.sm`, 배경 `outline-variant`), 우측에 본문. 카드 자체는 배경 `surface`, `rounded.DEFAULT`(12px), `shadow.sm`, `outline-variant` 1px 테두리, 내부 패딩 `spacing.sm`(8px), 사진과 본문 사이 간격도 `spacing.sm`. 호버 시 그림자만 `shadow.md`로 올리고 다른 값은 바꾸지 않는다.

카드 본문 내부 순서는 고정한다: 상태 배지(`badge-status-sm`) → 제목(`title-xs`, 1줄 초과 시 ellipsis) → 본문 요약(`caption`, 1줄 clamp, `on-surface-variant`) → 메타 정보(`meta-xs`, 분야 · 작성자 · 날짜를 가운뎃점으로 나열, 분야만 `secondary` 색으로 강조). 사진이 없는 글도 자리표시자(placeholder) 사진 영역은 항상 노출해 카드 높이를 통일한다.

그리드는 모바일 1열 · 태블릿 2열 · PC 3열(최대 3열)이며, gutter는 화면 크기와 무관하게 `spacing.sm`(8px)을 쓴다.

### 배지 (badge-status / badge-status-sm)

접수·처리중 상태는 `secondary-container` 배경, 완료 상태는 `primary-container` 배경을 쓴다. 배지는 항상 `full` 모서리다. 일반 화면(관리자 목록 상단, 마이페이지 등 카드 밖 문맥)에서는 `badge-status`(`meta` 13px, 패딩 4px 10px)를 쓰고, 목소리함 게시글 카드 안에서는 한 단 작은 `badge-status-sm`(`meta-xs` 11px, 패딩 2px 8px)을 쓴다. 두 배지는 색 규칙이 같고 크기만 다르다.

### 분야 칩 (category-chip)

기본 상태는 배경 `surface`, `outline` 테두리, 글자 `on-surface-variant`, `rounded.full`. 선택된 칩은 배경 `secondary`, 글자 흰색(`on-secondary`)으로 바뀐다 — Colors 섹션 규칙대로 보조색 위 흰 글자는 굵은 라벨에만 허용되므로, 선택된 칩의 글자 굵기는 크기(`caption` 12px / `body-sm` 14px)는 그대로 두고 700으로 올린다. 목록 위 필터 영역에서는 패딩 5px 12px · `caption`(12px) 크기를 쓰고, 글쓰기 폼의 분야 선택에서는 한 단 크게 패딩 8px 16px · `body-sm`(14px)을 써서 선택 대상임을 분명히 한다.

분야 개수는 단체마다 다르고 계속 늘어날 수 있으므로 두 문맥을 다르게 대응한다 — **필터 영역**은 가로 스크롤(`overflow-x: auto`, 줄바꿈 없이 한 줄 유지)로 화면 폭이 안 깨지게 하고, **글쓰기 폼의 선택 영역**은 `flex-wrap`으로 줄바꿈을 허용해 모든 분야가 눈에 보이게 한다(고르는 게 목적이라 전체 노출이 낫다).

### 탭 — 필터 탭과 화면 탭은 다른 컴포넌트다

- **필터 탭 (tab-filter)**: 목록 위 처리상태 필터에 쓰는 pill 버튼. 개수가 4개(전체/접수/처리중/완료)로 고정돼 있어 한 줄에 다 보여준다. 기본은 배경 `surface` · `outline` 테두리, 활성 시 배경 `primary` · 글자 `on-primary`. 패딩 6px 12px, `caption`(12px) 타이포.
- **화면 탭 (tab-nav)**: 마이페이지([내가 쓴 글] / [내 정보])와 관리자 화면([의견 관리] / [분야 관리])처럼 **다른 화면으로 전환**하는 2탭 내비게이션. pill이 아니라 밑줄형이다 — 배경 없이 하단 2px 보더만 쓰고, 활성 탭은 보더·글자를 `primary`/`on-background`로, 비활성 탭은 투명 보더·`on-surface-variant` 글자로 둔다. 2개 탭은 가로로 균등 분할하거나 좌측 정렬하며, 패딩 12px 0, `title-sm`(16px/600) 타이포로 필터 탭보다 한 단 크게 잡아 "지금 이 화면이 무엇인지"를 분명히 드러낸다.

필터 탭과 화면 탭을 같은 스타일로 섞어 쓰지 않는다 — 하나는 목록을 좁히는 도구, 하나는 화면을 바꾸는 내비게이션이라 형태로 구분해야 한다.

### 상태 변경 버튼 그룹 (button-status-group) — 관리자 전용

관리자가 [의견 관리] 화면에서 글 하나의 처리상태를 바꿀 때 쓰는 3버튼 세그먼트(접수 / 처리중 / 완료, 라디오형 단일 선택)다. 버튼 3개를 이어붙여 `rounded.DEFAULT`(12px)로 감싸고, 버튼 사이 구분선은 `outline` 1px. 선택되지 않은 버튼은 `button-secondary`와 같은 흰 배경이고, 선택된 버튼만 해당 상태의 배지 색을 그대로 채운다 — 접수·처리중을 선택하면 `secondary-container` 배경 + `on-secondary-container` 글자, 완료를 선택하면 `primary-container` 배경 + `on-primary-container` 글자. 상태 배지와 같은 색 규칙을 그대로 재사용해 "지금 이 배지 상태다"가 버튼에서도 바로 읽히게 한다. `button-primary`(주색 배경)는 이 버튼 그룹에 쓰지 않는다 — 화면의 핵심 행동 자리를 침범하지 않기 위해서다.

### 구글 인증 버튼 (button-google)

`button-secondary`와 같은 스타일(흰 배경, `outline` 테두리, `rounded.DEFAULT`, 패딩 12px 20px, `label-button` 타이포)에 좌측 24px 구글 아이콘만 더한다. 로그인은 서비스의 핵심 행동이 아니라 외부 인증 절차이므로 주색을 입히지 않고, 게이트 화면 안에서 전체 폭 버튼으로 하나만 둔다.

### 입력 폼 — 글 저장하기 · 사진 올리기

글쓰기 폼은 제목 · 사진 · 본문 · 분야 순서로 배치하고, 필드 사이 간격은 `spacing.md`(16px), 라벨(`body-sm`/600)과 필드 사이는 `spacing.xs`(4px)로 촘촘히 붙인다. 글쓰기는 로그인한 사용자만 할 수 있는 보호된 화면이다.

- **제목**: `input-field` 그대로(단일 줄, `rounded.sm`, 포커스 시 `primary` 테두리).
- **본문 내용**: `input-textarea` — `input-field`와 같은 배경·테두리·모서리 규칙이지만 최소 높이 120px, 세로 리사이즈만 허용한다.
- **작성자 · 작성시간**: 사용자가 입력하는 필드가 아니다 — 폼에는 노출하지 않는다. 작성자는 로그인 계정의 닉네임(마이페이지 [내 정보]에서 설정)을 저장 시점에 자동으로 기록하고, 작성시간도 저장 시점에 자동 기록하며, 목소리함 게시글 카드와 상세 화면 메타 정보에서 `YYYY.MM.DD` 형식으로만 보여준다.
- **사진 올리기 (photo-upload)**: 점선(`dashed`) `outline` 테두리 박스, `rounded.md`(16px), 배경 `surface`, 높이 160px · 최대 너비 240px. 업로드 전에는 가운데 사진 아이콘 + "사진을 추가해주세요(선택)" 안내문(`body-sm`, `on-surface-variant`)을 보여주고, 업로드 후에는 같은 자리에 썸네일(꽉 채워 자르기)로 바뀌며 우상단에 24px 원형 삭제 버튼(`photo-upload-remove`, 배경 `surface`, `shadow.sm`)이 뜬다. 이번 범위는 1장 업로드로 한정한다. 사진은 선택 항목이므로 폼 검증에서 필수로 막지 않는다.
- **분야 선택**: 위 분야 칩(폼용 크기, `flex-wrap`)에서 라디오형으로 하나만 고른다.
- **제출 버튼**: `button-primary`, 폼 하단 우측 정렬(모바일 폭에서는 버튼도 전체 폭으로).

### 로그인 & 회원가입 — 게이트 화면 (/login, /signup)

헤더는 홈과 동일한 `page-header`를 그대로 재사용하고, 히어로와 필터 없이 바로 본문이 온다. 본문은 화면 전체를 세로 가운데 정렬하고, 그 안에 최대 너비 400px 카드 하나만 둔다 — 배경 `surface`, `rounded.lg`(20px), `shadow.sm`, 내부 패딩 `spacing.xl`(32px). 카드 내부 순서: 타이틀(`title`, "로그인" 또는 "회원가입") → 안내문(`body-sm`, `on-surface-variant`) → `button-google`(전체 폭) → 하단 전환 링크("아직 계정이 없으신가요? 회원가입" 등, `caption` 크기, `primary` 색 텍스트 링크). 로그인하지 않은 채 마이페이지·글쓰기 등 보호된 화면에 들어오면 이 게이트 화면으로 보낸다.

### 마이페이지 · 관리자 화면 — 2탭 레이아웃

두 화면 모두 헤더는 공용 `page-header`를 재사용하고, 그 아래 페이지 타이틀(`headline`, "마이페이지" 또는 "관리자") → `tab-nav` 2개 → 탭별 콘텐츠 순서로 쌓는다. 컨테이너 최대 너비 1200px, 좌우 마진은 Layout & Spacing 규칙을 그대로 따른다.

- **마이페이지 [내가 쓴 글]**: 목소리함 게시글 카드 그리드를 그대로 재사용한다(열람 전용, 수정·삭제 버튼 없음). 카드에는 상태 배지가 그대로 보여 본인 글이 어디까지 처리됐는지 확인할 수 있다.
- **마이페이지 [내 정보]**: `input-field` 기반의 짧은 폼(닉네임 등 최소 정보) + `button-primary`("저장").
- **관리자 [의견 관리]**: 목소리함 게시글 카드 그리드를 재사용하되, 카드마다 하단에 `button-status-group`을 붙여 관리자가 그 자리에서 접수/처리중/완료를 바꿀 수 있게 한다.
- **관리자 [분야 관리]**: `category-chip` 목록을 나열하고 칩마다 옆에 작은 삭제(×) 아이콘을 붙인다. 목록 아래에 인라인 `input-field`(짧은 폭) + `button-secondary`("추가")로 새 분야를 등록한다.

## 하지 말 것

- 순수 검정(`#000000`)이나 순수 회색(`#888` 등)을 글자·테두리·그림자에 쓰지 않는다. 항상 이 문서에 정의된 톤을 쓴다.
- 주색(`#FF7A59`) 배경 위에 흰 글자를 쓰지 않는다. 대비 기준 미달이다.
- 간격·모서리·그림자 값을 이 문서에 없는 임의의 px로 만들지 않는다.
- 카드나 버튼에 그림자를 두 겹 이상 겹쳐 쓰지 않는다.
- PC 화면에서도 4열 이상 그리드를 쓰지 않는다(최대 3열).
- 한 화면에 `button-primary`를 2개 이상 두지 않는다 — 핵심 행동은 하나로 좁힌다.
- 오류색(`#D14343`)을 경고·안내 등 위험이 아닌 상황에 쓰지 않는다.
- 관리자 상태 변경 버튼 그룹(`button-status-group`)에 `button-primary`의 주색 배경을 쓰지 않는다 — 상태 배지와 같은 색 규칙(`secondary-container` / `primary-container`)만 쓴다.
- 목록 위 필터 탭(`tab-filter`)과 마이페이지·관리자의 화면 탭(`tab-nav`)을 같은 모양으로 섞어 쓰지 않는다 — 하나는 pill, 하나는 밑줄형으로 구분한다.
- 구글 인증 버튼에 주색을 입히지 않는다 — 외부 인증 절차이지 서비스의 핵심 행동이 아니다.
- 작성시간을 사용자가 입력하게 만들지 않는다 — 저장 시점에 자동으로 기록한다.
