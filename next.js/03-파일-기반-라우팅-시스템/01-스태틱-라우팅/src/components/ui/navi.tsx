import Link from 'next/link'

export default function Navi() {
  return (
    <ul>
      <li>
        <Link href="/">
          <img src="/next-js.svg" alt="로고" />
          로고
        </Link>
      </li>
      <li>
        <Link href="/pokemon">도감</Link>
      </li>
      <li>
        <Link href="/types">속성별 섹션</Link>
      </li>
      <li>
        <Link href="/my-collection">나의 포켓몬 박스</Link>
      </li>
    </ul>
  )
}
