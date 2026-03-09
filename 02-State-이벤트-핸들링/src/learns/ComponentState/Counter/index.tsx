import React from 'react'
import S from './style.module.css'


// 화면 업데이트하기 useState
// https://ko.react.dev/learn#updating-the-screen
export default function Counter() {
  // 컴포넌트 내부에 일반 로컬(지역) 변수
  let localCount: number = 0 // 타입 추론(유추 - 타입스크립트는 타입 추측가능)

  // 일반 로컬(지역) 변수를 업데이트 하는 함수
  const handleIncreaseLocalCount = () => {
    localCount += 1
    console.log('현재 일반 로컬 카운트 값 =', {localCount })
  }


  // 컴포넌트 상태 관리
  // 컴포넌트 상태(기억된 값 관리) 추가 
  // 튜플 Tuple (앞에는 뭐가 들어오고 뒤에는 뭐가 들어오는지 지정) => [state, updateFn]
  // https://www.typescriptlang.org/ko/docs/handbook/variable-declarations.html#%ED%8A%9C%ED%94%8C-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-tuple-destructuring
  const [stateCount, setStateCount] = React.useState(0)

  const handleIncreaseStateCount = () => {
    console.log('update state value')
    const nextStateCount = stateCount + 1

    // 상태 업데이트 방법: 다음 번에 화면에 그릴 상태 변수 값을 설정
    setStateCount(nextStateCount)
  }


  return (
    <section className={S.container}>
      <h2 className={S.title}>상태 관리 기초</h2>

      {/* 일반 로컬 변수 영역 */}
      <div className={S.displayGroup}>
        <div role='group' className={S.card}>
          <span className={S.label}>일반 로컬 변수</span>
          <strong className={S.value}>{localCount}</strong>
        </div>

        {/* State 변수 영역 */}
        <div className={`${S.card} ${S.highlight}`}>
          <span className={S.label}>리액트 상태 변수</span>
          <strong className={S.value}>{stateCount}</strong>
        </div>
      </div>

      <div className={S.buttonGroup}>
        <button type='button' className={S.button} onClick={handleIncreaseLocalCount}>일반 로컬 변수 증가</button>
        <button type='button' className={`${S.button} ${S.primary}`} onClick={handleIncreaseStateCount}>리액트 상태 변수 증가</button>
      </div>
    </section>    
  )
}