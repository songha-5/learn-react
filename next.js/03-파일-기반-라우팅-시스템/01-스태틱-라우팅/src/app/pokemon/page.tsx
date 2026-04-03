import Link from 'next/link'

export default function PokemonLayout() {
  return (
    <>
      <p>[도감 전용 레이아웃] 세대별 필터 메뉴 (1세대, 2세대...)</p>
      <Link href={'/'}>링크</Link>
    </>
  )
}
