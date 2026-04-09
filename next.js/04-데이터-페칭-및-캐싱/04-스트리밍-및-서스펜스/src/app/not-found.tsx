import Link from "next/link"

export default function NotFound() {
  return (
    <section className="m-5 flex flex-col justify-center gap-2">
      <header>
        <h1 className="text-5xl font-black uppercase text-blue-600 tracking-tight" lang="en">
          404 not found
        </h1>
      </header>
      <p>요청된 페이지를 찾을 수 없습니다.</p>
      <Link href="/">메인 페이지로 이동</Link>
    </section>
  )
}