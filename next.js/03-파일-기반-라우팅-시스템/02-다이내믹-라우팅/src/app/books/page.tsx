import { LucideTrophy } from 'lucide-react'

import LinkCard from '@/components/ui/link-card'
import PageSectionTitle from '@/components/ui/page-section-title'

import Link from 'next/link'
import { books } from './_resources/data'
import { cn } from '@/utils'

/**
 * [실습] 동적 세그먼트(Dynamic Segment) 및 쿼리 스트링 활용
 *
 * 핵심 학습 목표
 * - props.searchParams를 통한 URL 쿼리 스트링 데이터 추출
 * - 서버 컴포넌트에서의 데이터 정렬(Sorting) 및 필터링 로직 구현
 * - 클라이언트 컴포넌트(Link, useRouter)를 이용한 동적 경로 탐색
 *
 * 다루는 주요 상태 (Search Params)
 * - 정렬 기준: sortKey (이름순, 출판일순, ISBN순)
 * - 정렬 순서: orderBy (오름차순 asc, 내림차순 desc)
 * - 페이지네이션: page (현재 페이지), limit (한 번에 보여줄 개수)
 *
 * 구현 기능
 * - 서버 측: 전달받은 파라미터에 따라 DB(JSON) 데이터를 가공하여 전달
 * - 클라이언트 측: 드롭다운이나 버튼 클릭 시 URL을 변경하여 서버 다시 읽기 유도
 * - UI: 페이지네이션 정보(TotalCount, TotalPages, HasNextPage) 계산 및 표시
 */


interface Props {
  searchParams: Promise<{
    sortKey: 'title' | 'pubdate' | 'isbn'
    orderBy: 'asc' | 'desc'
    page: number
    size: number
  }>
}

export default async function BooksPage({ searchParams }: Props) {
  const {
    orderBy = 'disc',
    sortKey = 'pubdate',
    page = 1,
    size = 6
  } = await searchParams
 
  const filteredBooks = books.toSorted((a, b) => {
    const aField = String(a[sortKey] ?? '')
    const bField = String(b[sortKey] ?? '')
    const comparison = aField.localeCompare(bField) // 1, 0, -1

    return orderBy === 'asc' ? comparison : -comparison
  })

  return (
    <div className="mx-auto space-y-8">
      <PageSectionTitle
        title="북 아카이브"
        description="현재 큐레이션 된 도서 목록입니다. 당신의 인생 책을 찾아보세요."
      />

      {/* 이름순, 출판일순, ISBN순 정렬(오름차, 내림차순) 기능 구현 */}
      <div className="flex ge-5 p-5 border border-slate-400 rounded-x1">
        <Link 
          className="text-foreground/70 hover:text-foreground"
          href="?sortKey=title&orderBy=asc"
        >이름순 정렬 (오름차순)</Link>
        <Link 
          className="text-foreground/70 hover:text-foreground"
          href="?sortKey=title&orderBy=desc"
        >이름순 정렬 (내림차순)</Link>
      </div>

      {/* books 리스트 렌더링 */}
      <nav
        aria-label="도서 목록"
        className="flex flex-col gap-2 rounded-xl border p-5"
      >
        {filteredBooks.map((book) => {
          return (
            // Hard Navigation : <a> (외부 링크)
            // Soft Navigation : <Link> (내부 링크)
            <Link
              key={book.isbn}
              // href={`/books/${book.isbn}`}
              // href={`/books/${book.title}`}
              href={`/books/${book.pubdate}/${book.title}`}
              className={cn(
                'px-2 pt-1 pb-1.5',
                'text-foreground/80 hover:text-foreground font-medium',
              )}
            >
              {book.title}
              ({'isbn : '}{book.isbn}){''}{'출간날자 :'}{book.pubdate}
            </Link>
          )
        })}
      </nav>

      <LinkCard
        href="/books/best"
        title="베스트셀러"
        description="지금 가장 인기 있는 도서들을 확인해보세요."
        icon={LucideTrophy}
      />
    </div>
  )
}
