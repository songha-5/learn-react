import LinkCard from '@/_learn/ui/link-card'
import PageSectionTitle from '@/_learn/ui/page-section-title'
import { LucideTrophy } from 'lucide-react'

export default function BooksPage() {
  return (
    <section className="spacye-y-8 mx-auto py-1">
      <PageSectionTitle
        title="북 아카이브"
        description="현재 큐레이션된 도서 목록입니다. 당신의 인생 책을 찾아보세요"
      />
      <LinkCard
        href="/books/best"
        title="베스트셀러"
        description="지금 가장 인기있는 도서들을 확인해보세요."
        icon={LucideTrophy}
      />
    </section>
  )
}
