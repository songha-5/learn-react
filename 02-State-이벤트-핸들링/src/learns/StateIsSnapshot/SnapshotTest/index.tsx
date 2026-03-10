import { useState } from 'react'
import S from './style.module.css'

const INITIAL_COUNT = 0

// 상태는 특정 렌더링 시점의 "스냅샷"이다
export default function SnapshotTest() {
  // 상태 선언과 상태를 업데이트 하는 기능
  const [count, setCount] = useState(INITIAL_COUNT)
  const handleCountIncrease = () => {
    setCount(prev => prev + 5)
  }

  // 만약 + 5만 하게 된다면? 
  const handleIncreaseFive = () => {
    // 상태 업데이트 (리액트에게 요청)
    const nextCount = count + 5
    setCount(nextCount)

    // count 상태 로그
    console.log('현재 카운트 값', { count })
    console.log('다음 렌더링 시점의 카운트 값', { nextCount })

    // 비동기 알림 확인
    setTimeout(() => {
      globalThis.alert(`3초 뒤 알림창에 뜬 카운트 값 ${count}`)
    }, 3000)
  }


  const handleCountReset = () => {
    setCount(INITIAL_COUNT)
  }

  return (
    <section className={S.container}>
      <h2 className={S.title}>현재 카운트: {count}</h2>

      <div role="group" className={S.buttonGroup}>
        <button 
          type='button' 
          className={S.button}
          onClick={handleIncreaseFive}
        >
          +5 증가시키고 로그/알림 확인
        </button>
        <button 
          type='button' 
          className={`${S.button} ${S.reset}`}
          onClick={handleCountReset}
        >
          초기화
        </button>
      </div>
    </section>
  )
}
