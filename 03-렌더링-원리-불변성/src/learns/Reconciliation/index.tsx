import { useState } from 'react'
import S from './style.module.css'

// 재조정
// 구조분해할당( = 비구조화 할당)
interface User {
  id: string
  name: string
  role: '마스터' | '어드민' | '프로' | '아마추어' | '게스트'
  age?: number
}

// 사용자 정의
const userKim: User = {
  id: 'user-agwdk',
  name: '김이름',
  role: '마스터',
  age: 43
}
const userChio: User = {
  id: 'user-ashs',
  name: '최이름',
  role: '아마추어',
  age: 32
}
const userLee: User = {
  id: 'user-123a',
  name: '이이름',
  role: '게스트',
  age: 22
}


// User 집합(그룹): User[] or Array<User>
const INITIAL_USER: User[] = [userKim, userChio, userLee]

export default function Reconciliation() {
  const [users, setUser] = useState(INITIAL_USER)

  const handleShuffle = () => {
    console.log('순서 섞기')
    const nextUser = [...users].sort(() => Math.random() - 0.5)
    setUser(nextUser)
  }

  return (
    <section className={S.container}>
      <h2 className={S.title}>재조정 및 Key</h2>

      <button type='button' className={S.shuffleButton} onClick={handleShuffle}>순서 섞기</button>

      {/* 리스트 렌더링 */}
      {/* key를 index로 넣게되면 무조건 첫번째 item을 0으로 인식해서 */}
      {/* 아이템 컨텐츠가 꼬일 수 있음 고유 id값을 넣어 관리하는것을 추천 */}
      <ul className={S.list} style={{ marginBlockStart: 12}}>
        {users.map(({id, name}) => {
          // 비구조화 할당 , 구조분해할당
          return (
              <li key={id} className={S.item}>
                <label htmlFor={id} className={S.label}>{name} 메모</label>
                <input id={id} type="text" className={S.inputField} placeholder='인물을 평가해 주세요'/>
              </li>
            )
        })}
      </ul>
    </section>
  )
}
