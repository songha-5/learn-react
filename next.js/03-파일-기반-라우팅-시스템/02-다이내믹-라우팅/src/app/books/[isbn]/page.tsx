import { getBookByISBN } from '@/services/books'

interface Props {
  params: Promise<{ isbn: string }>
}

export default async function BookDetailPage({ params }: Props) {
  const { isbn } = await params
  const book = await getBookByISBN(isbn)

  if (!book) {
    // 도서없음 화면
    return <p>도서가 존재하지 않습니다</p>
  }

  return (
    <section>
      <p>도서 이름 {book.title}</p>
    </section>
  )
}
