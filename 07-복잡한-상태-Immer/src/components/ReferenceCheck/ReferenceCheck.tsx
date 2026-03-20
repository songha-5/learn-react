import { useState } from 'react'
import S from './ReferenceCheck.module.css'

export default function ReferenceCheck() {

  // 셋다 동일
  const INITAL_PROFILE = {
    city: '서울',
    postcode: '013456'
  }

  const INITAL_USER = {
    name: '이두나',
    age: 21,
    profile: {
      ...INITAL_PROFILE
    },
  }
  // const INITAL_USER = {
  //   name: '이두나',
  //   age: 21,
  //   profile: {
  //     city: '서울',
  //     postcode: '013456'
  //   },
  // }

  type User = typeof INITAL_USER

  const [user, setUser] = useState<User>({
    ...INITAL_USER,
    profile: {
      ...INITAL_USER.profile
    }
  })

  // 원본데이터를 엎어버림으로 예기치 못한 오류 발생
  const handleWrongUpdate = () => {

    user.name = '강하영'
    user.profile.postcode = '91920'
    
   const nextUser = user
   setUser(nextUser)


    // ❌ Mutation: 데이터는 바뀌지만 참조가 같음
    console.error('뮤테이션')
    console.table(nextUser)
  }
  // 참조해서 수정해야 예기치 못한 오류 X
  const handleRightUpdate = () => {
     const nextUser: User = {
      ...user,
      name:'강하영',
      profile: {
        ...user.profile,
        city: '이천'
      }
    }
    setUser(nextUser)
    // ✅ Immutability: 새로운 객체 생성 (새로운 참조 주소)
    console.log('%c✅ 불변성 유지:', 'color: #04a200;')
    console.table(nextUser)
  }

  const handleReset = () => {
    // ⚠️ Mutation: 예상치 못한 결과 확인(참조형 데이터 오염)
    console.warn('참조형 데이터 오염')
    setUser(INITAL_USER)
  }

  return (
    <div className={S.container}>
      <section className={S.card}>
        <header className={S.header}>
          <h2 className={S.title}>참조형 데이터 업데이트</h2>
          <p className={S.description}>
            불변성을 지켰을 때만 화면이 반응합니다.
          </p>
        </header>

        <div className={S.content}>
          <dl className={S.infoBox}>
            <div className={S.infoRow}>
              <dt className={S.label}>이름</dt>
              <dd className={`${S.value} ${S.valueActive}`}>{user.name}</dd>
            </div>
            <div className={S.infoRow}>
              <dt className={S.label}>나이</dt>
              <dd className={S.value}>{user.age}세</dd>
            </div>
            <div className={S.infoRow}>
              <dt className={S.label}>도시</dt>
              <dd className={S.badge}>{user.profile.city}</dd>
            </div>
            <div className={S.infoRow}>
              <dt className={S.label}>우편번호</dt>
              <dd className={S.badge}>{user.profile.postcode}</dd>
            </div>
          </dl>
        </div>

        <footer className={S.footer}>
          <div className={S.buttonGroup}>
            <button
              type="button"
              className={`${S.btn} ${S.btnWrong}`}
              onClick={handleWrongUpdate}
            >
              직접 수정
            </button>
            <button
              type="button"
              className={`${S.btn} ${S.btnRight}`}
              onClick={handleRightUpdate}
            >
              새 객체 생성
            </button>
            <button
              type="button"
              className={`${S.btn} ${S.btnReset}`}
              onClick={handleReset}
            >
              초기화
            </button>
          </div>
          <p className={S.helperText}>
            * 직접 수정 후 새 객체 생성을 눌러 변화를 비교해보세요.
          </p>
        </footer>
      </section>
    </div>
  )
}
