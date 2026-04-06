import { notFound } from "next/navigation"
import { books, type Book } from "../../_resources/data"

interface Props {
  params: Promise<{ title: Book['title'] }>
}

export default async function BookDetailPage({ params }: Props) {
  // const { upbdate, title} = await params

  // const decodedTitle = decodeURIComponent(title) 

  const title = (await params).title
  console.log(encodeURIComponent('어른의 행복은 조용하다'))
  console.log(decodeURIComponent('%EC%96%B4%EB%A5%B8%EC%9D%98%20%ED%96%89%EB%B3%B5%EC%9D%80%20%EC%A1%B0%EC%9A%A9%ED%95%98%EB%8B%A4'))
  const decodedTitle = decodeURIComponent(title) 

  // 제목으로 도서 찾기
  const book = books.find((book) => book.title === decodedTitle)
  // 도서를 찾을 수 없으면 Not Found 페이지로 이동
  if (!book) notFound()
  
  return (
    <select name="" id="">{book.title}</select>
 )
}