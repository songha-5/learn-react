import '@/styles/globals.css'
import type { Metadata } from 'next'

// 타입스크립트에서 지원하는 metadata 타이틀 등을 설정가능
export const metadata: Metadata = {
  title: 'Next.js 타이틀',
  description: '홈페이지 설명 글'
}


export default function RootLayout({ children }: React.PropsWithChildren) {
  
  // [서버 사이드 렌더링]
  // React 서버 컴포넌트(RSC) → HTML 페이지 렌더링 → 클라이언트(브라우저)에 전송
  return (
    <html lang="ko-KR">
      <body className="overflow-y-scroll">{children}</body>
    </html>
  )
}
