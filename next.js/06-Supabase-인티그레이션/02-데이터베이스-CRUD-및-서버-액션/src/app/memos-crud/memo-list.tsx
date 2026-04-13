import { use } from 'react'
import MemoItem from './memo-item'
import { Memo } from '@/actions/memo-action'

interface Props {
  memoListPromise?: Promise<Memo[]>
}

export default function MemoList({ memoListPromise }: Props) {

  if (!memoListPromise) return null

  const memos = use(memoListPromise)

  return (
    <article className="space-y-4">
      <h3 className="px-2 text-sm font-bold tracking-tight text-slate-400 uppercase">
        메모 목록 ({memos?.length || 0})
      </h3>

      {memos?.map((memo) => (
        <MemoItem key={memo.id} memo={memo} />
      ))}
    </article>
  )
}
