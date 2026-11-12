# 링크나무 🌳

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스입니다. (자세한 내용은 [PRD.md](./PRD.md))

## 기능
- 프로필: 이름, 한 줄 소개, 원형 프로필 사진
- 링크 카드: SNS·블로그 링크를 카드 형태로 나열
- 클릭 수 집계: 링크 클릭 시 MongoDB Atlas에 횟수 기록

## 기술 스택
Next.js 16 (App Router) · TypeScript · Tailwind CSS · MongoDB Atlas · Vercel

## 시작하기
```bash
npm install
cp .env.example .env.local   # MONGODB_URI 입력
npm run dev                  # http://localhost:3000
```

## 내 정보로 바꾸기
`src/data/profile.ts`에서 이름, 소개, 사진 경로, 링크 목록을 수정합니다. 사진은 `public/`에 넣으세요.

## API
| 메서드 | 경로 | 설명 |
| --- | --- | --- |
| POST | `/api/clicks/:id` | 링크 클릭 1회 기록 |
| GET | `/api/clicks` | 링크별 클릭 수 조회 |

## 폴더 구조
```
src/
  app/            페이지, API 라우트
  components/     UI 컴포넌트
  data/           프로필·링크 데이터
  lib/            MongoDB 연결, 클릭 집계 로직
```
