# 프로젝트 인덱스 & 맥락 문서 (Index & Context)

본 문서는 새롭게 투입되는 AI 에이전트 및 개발자가 프로젝트의 전체 구조, 설계 의도, 핵심 컨벤션, 시행착오를 단번에 인지하고 즉시 개발에 투입될 수 있도록 작성되었습니다.

---

## 1. 프로젝트 개요 & 스택

* **프로젝트 목적**: 개발자/디자이너 `The Poki999`의 개인 포트폴리오 및 인적 사항 안내 싱글 페이지 웹사이트
* **아키텍처 패턴**: Next.js App Router 기반의 Single Page Application (Island Layout 디자인 패턴 적용)
* **핵심 기술 스택 및 주요 라이브러리 버전**:
  * **Framework**: Next.js `16.2.6` (App Router)
  * **UI Core**: React `19.x`, React DOM `19.x`
  * **Language**: TypeScript `5.7.3`
  * **Styling**:
    * Tailwind CSS `4.3.3` (`@tailwindcss/postcss`)
    * `@base-ui/react` `1.5.0`
    * `styled-components` `6.4.4`
    * `class-variance-authority` `0.7.1`, `clsx` `2.1.1`, `tailwind-merge` `3.3.1`
  * **Icons**: `lucide-react` `1.16.0`
  * **Analytics**: `@vercel/analytics` `1.6.1`

---

## 2. 디렉토리 및 파일 역할 정의

### 📁 Root Directory
* `index.md`: **[본 문서]** 신규 AI 에이전트 전용 프로젝트 인덱스 및 맥락 안내서
* `package.json`: 프로젝트 의존성 라이브러리 및 스크립트 설정 파일
* `next.config.mjs`: Next.js 번들링 및 런타임 설정 파일
* `postcss.config.mjs`: Tailwind CSS v4 `@tailwindcss/postcss` 플러그인 연동 설정
* `components.json`: shadcn/ui 기반 컴포넌트 CLI 설정
* `tsconfig.json`: TypeScript 컴파일러 경로 별칭(`@/*`) 및 타입 설정

### 📁 `app/` (Next.js App Router)
* `app/layout.tsx`: 루트 레이아웃. Geist/Instrument Serif 폰트 설정, 테마 FOUC 방지 인라인 스크립트, styled-components SSR 레지스트리 및 Vercel Analytics 탑재
* `app/page.tsx`: 메인 페이지 엔트리. `IslandGlow` 아일랜드 배경 효과와 상단 헤더, 메인 콘텐트 섹션들을 조합
* `app/globals.css`: Tailwind v4 설정, OKLCH 다크/라이트 테마 변수 정의, 아일랜드 쉘(`island-shell`) 및 글로우 애니메이션(`island-glow`) CSS 클래스 스타일링

### 📁 `components/` (UI 컴포넌트)
* `components/site-header.tsx`: 상단 고정 네비게이션 헤더 (`Work`, `About`, `Contact` 앵커 이동 메뉴, 모바일 토글, `ThemeToggle` 탑재)
* `components/hero-section.tsx`: 메인 상단 히어로 섹션 (소개 타이틀 및 빠른 이동 버튼)
* `components/work-section.tsx`: 포트폴리오 작업물(Projects) 카드를 그리드 형태로 표시하는 섹션
* `components/about-section.tsx`: 프로필 이미지(`public/profile.png`), 자기소개 및 보유 기술 스택 태그 노출 섹션
* `components/contact-section.tsx`: 이메일 메일토 링크, 인스타그램/GitHub SNS 링크, 푸터 카피라이트 노출 섹션
* `components/ui/theme-toggle.tsx`: styled-components 기반 다크모드 커스텀 스위치 (해/달/크레이터 애니메이션 및 LocalStorage/HTML Class 제어)
* `components/ui/button.tsx`: `@base-ui/react` primitives 및 `cva` 기반 범용 버튼 컴포넌트

### 📁 `lib/` (유틸리티 & 레지스트리)
* `lib/registry.tsx`: SSR 환경에서 `styled-components` 스타일 분실/FOUC 현상을 방지하는 Server Style Sheet 레지스트리
* `lib/utils.ts`: Tailwind 클래스 병합 유틸리티 함수 `cn()` (`clsx` + `tailwind-merge`)

---

### 🔗 주요 파일 간 의존 관계 (Data & Control Flow)

```
app/layout.tsx
  ├─► lib/registry.tsx (StyledComponentsRegistry wrapping)
  └─► app/globals.css (글로벌 스타일 / Tailwind / Theme Variables)

app/page.tsx
  ├─► components/site-header.tsx
  │     └─► components/ui/theme-toggle.tsx (다크모드 DOM toggle & localStorage 연동)
  ├─► components/hero-section.tsx
  ├─► components/work-section.tsx
  ├─► components/about-section.tsx
  └─► components/contact-section.tsx
```

---

## 3. 컨벤션 & 개발 규칙

1. **컴포넌트 작성 규칙**:
   * Next.js App Router 서버 컴포넌트(RSC)를 기본으로 활용합니다.
   * `useState`, `useEffect` 또는 DOM/이벤트 핸들러가 필요한 컴포넌트(`site-header.tsx`, `theme-toggle.tsx`, `registry.tsx`)에만 최상단 `'use client'` 지시어를 사용합니다.
2. **스타일링 시스템 규칙**:
   * **Tailwind CSS v4**: 주 스타일링 체계로 Tailwind CSS v4를 사용하며, `@import 'tailwindcss';` 방식을 따릅니다.
   * **Theme Variables**: OKLCH 색상 모델을 사용한 CSS 변수 기반 다크모드를 사용합니다 (`.dark` 클래스 제어).
   * **styled-components**: 애니메이션 효과가 들어간 복잡한 컴포넌트(`ThemeToggle`)에 한해 사용하며, 반드시 SSR Hydration 처리(`lib/registry.tsx`)를 거치도록 유지합니다.
3. **상태 관리 방식**:
   * 별도의 외부 전역 상태 라이브러리(Zustand, Redux 등) 없이 React 내장 Local State(`useState`) 및 DOM/localStorage 상태 조작을 사용합니다.
4. **절대 규칙**:
   * 경로 임포트 시 상대 경로 대신 `@/` 별칭(Alias)을 사용합니다 (`@/components/...`, `@/lib/...`).

---

## 4. 현재 진행 상황 & 작업 맥락

### 🟢 구현 완료된 주요 기능
* Next.js App Router 기반 Single Page 포트폴리오 레이아웃 구축 (`Island Shell` 디자인)
* 라이트/다크 모드 전환 및 FOUC(Flash of Unstyled Content) 완벽 방지
* styled-components SSR 레지스트리 적용
* 반응형 네비게이션 및 모바일 메뉴 drawer 구현
* Hero, Work, About, Contact 핵심 4개 섹션 UI 구성 완료

### 🟡 현재 작업 중이거나 미완성된 파일/기능
* `components/work-section.tsx`: 추가 작업물 데이터 구성 (현재 임시 프로젝트 카드 "what's next"가 포함됨)

### 📋 다음 담당 AI가 바로 이어받아 작업해야 할 Todo 목록
1. **`components/work-section.tsx` 프로젝트 목록 업데이트**: 실제 프로젝트 링크, 이미지, 태그 정보로 데이터 업데이트
2. **메타데이터 & SEO 최적화**: OpenGraph 이미지 추가 및 `app/layout.tsx` 내 metadata 상세 정의
3. **문의 기능(Contact) 고도화**: 이메일 클릭 액션 외 Formspree / EmailJS 또는 API route 연동 직접 전송 폼 추가 검토

---

## 5. 주의사항 & 시행착오 (Lessons Learned)

1. **Next.js SSR과 styled-components 혼용 이슈 (중요)**
   * **시행착오**: Next.js App Router 사용 시 `styled-components` 컴포넌트가 SSR 중 스타일을 상실하여 깜빡임(FOUC) 현상이 발생할 수 있음.
   * **지침**: `app/layout.tsx`에서 `<StyledComponentsRegistry>`로 `{children}`을 감싸는 로직을 **절대 삭제하거나 변경하지 마십시오**.

2. **다크모드 FOUC 방지 인라인 스크립트**
   * **시행착오**: 클라이언트 측 하이드레이션 이후 테마를 검사하면 페이지 로드 시 라이트 모드에서 다크 모드로 튀는 현상 발생.
   * **지침**: `app/layout.tsx`의 `<head>` 영역 내부 `dangerouslySetInnerHTML` 인라인 스크립트를 통해 DOM 렌더링 전 `localStorage` 및 `prefers-color-scheme`을 읽어 `.dark` 클래스를 즉시 부여합니다. 이 스크립트 구조를 임의로 지우지 마십시오.

3. **Tailwind CSS v4 PostCSS 가이드**
   * 프로젝트는 Tailwind CSS v4를 사용 중이며 `@import 'tailwindcss';`를 `app/globals.css`에서 사용하고 있습니다. 이전 Tailwind v3 방식(`@tailwind base;` 등)으로 재작성하지 마십시오.
