'use client'

import { cn } from "@/utils"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

/* 이름순, 출판일순, ISBN순 정렬(오름차순,내림차순) 기능 구현 */
function SortOrder() {

  const router = useRouter()

  const searchParams = useSearchParams()
  const sortKey = searchParams.get('sortKey') ?? 'pubdate'
  const orderBy = searchParams.get('orderBy') ?? 'desc'

  return (
    <div className="flex gap-5 rounded-xl border border-slate-400 p-5">
      <button
        type="button"
        onClick={() => {
          // console.log('?sortKey=pubdate&orderBy=asc')
          router.push('?sortKey=pubdate&orderBy=asc')
        }}
        className={cn(
          'text-foreground/70 hover:text-foreground',
          sortKey === 'pubdate' &&
            orderBy === 'asc' &&
            'font-black text-blue-600',
        )}
      >
        출판일 정렬 (오름차순)
      </button>
      <button
        type="button"
        onClick={() => {
          router.push('?sortKey=pubdate&orderBy=desc')
        }}
        className={cn(
          'text-foreground/70 hover:text-foreground',
          sortKey === 'pubdate' &&
            orderBy === 'desc' &&
            'font-black text-blue-600',
        )}
      >
        출판일 정렬 (내림차순)
      </button>
    </div>
  )
}

export default SortOrder