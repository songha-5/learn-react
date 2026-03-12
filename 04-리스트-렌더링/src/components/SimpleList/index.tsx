import { useState } from 'react'
import S from './style.module.css'

const INITTAL_SNACKS = ['감자칩', '초코바', '젤리', '쿠키', '팝콘', '나쵸', '오징어땅콩', '맛동산', '에이스', '홈런볼', '꼬깔콘', '포카칩', '프링글스', '고래밥', '칸쵸', '빼빼로', '양파링', '자갈치', '새우깡', '꿀꽈배기', '눈을감자']

export default function FruitList() {
  const [snacks] = useState(INITTAL_SNACKS)

  return (
    <section className={S.container}>
      <h2 className={S.title}>오늘의 추천 스낵 ({snacks.length}종)</h2>

      <ul className={S.list}>
        {INITTAL_SNACKS.map((snack, index) => <li className={S.item} key={index}>{snack}</li> )}
      </ul>
    </section>
  )
}

