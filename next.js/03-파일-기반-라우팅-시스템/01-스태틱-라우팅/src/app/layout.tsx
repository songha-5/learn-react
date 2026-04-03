import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import { QueryProvider } from '@/contexts/query-context'
import { cn } from '@/utils'

import '@/styles/globals.css'
import Link from 'next/link'

const notoSansKR = Noto_Sans_KR({ variable: '--font-noto' })

export const metadata: Metadata = {
  title: 'URBAN_LIB < Next.js 러닝 가이드',
  description: '현대적인 웹 경험을 위한 Next.js 프레임워크 학습 플랫폼',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko-KR">
      <body
        className={cn(
          notoSansKR.variable,
          'flex min-h-screen flex-col overflow-y-scroll',
          'bg-background text-foreground min-h-screen antialiased',
          'selection:bg-foreground selection:text-background',
          'focus:outline-none',
          '[&_*:focus-visible]:ring-foreground [&_*:focus-visible]:ring-2 [&_*:focus-visible]:ring-offset-2',
          '[&_*:focus-visible]:ring-offset-background',
        )}
      >
        <QueryProvider hideDevtools>
          <header>
            <nav>
              <ul className="flex gap-5 bg-slate-50 p-5">
                {/* 내비게이션 바 (로고, 링크, 검색 바 등) */}
                <li>
                  <Link href="/">
                    <img src="/next-js.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="/categories">카테고리 페이지</Link>
                </li>
                <li>
                  <Link href="/another">다른 페이지</Link>
                </li>
                <li>
                  <Link href="/books">도서 목록 페이지</Link>
                </li>
                <li>
                  <Link href="/profile">프로필</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className={cn('container mx-auto grow px-6')}>{children}</main>

          <footer className="flex justify-center bg-slate-100 p-7">
            <small lang="en" className="text-sm font-medium">
              {/* 저작권 등 사이트 정보 */}
              &copy; {new Date().getFullYear()} Copy light All Reserved.
            </small>
          </footer>
        </QueryProvider>
      </body>
    </html>
  )
}
