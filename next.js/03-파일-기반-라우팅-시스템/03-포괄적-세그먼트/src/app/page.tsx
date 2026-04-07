import LinkCard from '@/components/ui/link-card'
import { cn } from '@/utils'
import { LucideFileText } from 'lucide-react'

export default async function MainPage({
  params,
}: PageProps<'/docs/[...subjects]'>) {
  
  const { subjects } = await params
  
  const decodedSubjects = subjects.map((subject) => decodeURIComponent(subject))
  
  // 현재 페이지의 제목
  const lastSubjectTitle = decodedSubjects.at(-1)?.replace(/-/g, ' ')
  const depth = decodedSubjects.length

  return (
    <section>
      <div className="w-full py-12">
        <section className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* 학습 문서(Docs) 카드 */}
          <LinkCard
            href={`/docs/${encodeURIComponent('기초')}`}
            title="학습 문서"
            description={
              <>
                Next.js의 라우팅 원리와
                <br />
                기초 개념을 차근차근 익혀보세요.
              </>
            }
            actionLabel="가이드 읽어보기"
          />

          {/* 쇼핑(Shop) 카드 */}
          <LinkCard
            href="/shop"
            title="쇼핑"
            color="emerald"
            description={
              <>
                복잡한 카테고리 구조를 가진
                <br />
                스토어 예제를 직접 확인해보세요.
              </>
            }
            actionLabel="스토어 입장하기"
          />
          
        </section>
      </div>

      <header className="space-y-5">
        <div className={cn(
          'inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50',
          'px-3 py-1 text-xs font-black tracking-wide text-blue-600'
        )}>
          <LucideFileText className="size-3.5" />
          <span>학습 단계 {depth} / 3</span>
        </div>
        <h1
          className={cn(
            'text-5xl font-black tracking-tighter text-slate-900',
            'md:text-6xl',
          )}
        >
          {lastSubjectTitle}
        </h1>
        <p
          className={cn(
            'max-w-2xl',
            'text-xl leading-relaxed font-medium text-slate-500',
          )}
        >
          {lastSubjectTitle}에 대한 심화 학습을 위해 아래 하위 주제를
          선택하세요.
        </p>
      </header>
    </section>
  )
}
