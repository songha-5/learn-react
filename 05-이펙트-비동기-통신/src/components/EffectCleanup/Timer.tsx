import S from './EffectCleanup.module.css'
import { useEffect, useState } from "react"


function expensiveCale() {
  console.group('값 비싼 계산')
    console.warn('값 비싼 계산이 수행됨')
    const startTime = Date.now()

    console.time('렌더링 지연 처리')
    // 0.1초 렌더링 지연

    while (Date.now() -startTime < 500 /* 0.5s */) continue
    console.timeEnd('렌더링 지연 처리')
  console.groupEnd()

  return 0
}

export default function Timer() {
  const [seconds, setSeconds] = useState(expensiveCale())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  })


  return (
    <div className={S.card}>
      <p className={S.info}>실시간 타이머</p>
      <output 
        className={S.timerDisplay} 
        aria-live="polite" 
        aria-atomic="true"
      >
        {seconds}s
      </output>
      <span className={S.info}>
        이 카드가 사라지면 콘솔 로그도 멈춰야 합니다.
      </span>
    </div>
  )
}

// 백업
// 특정 시간마다 콜백 함수를 실행하는 방법(타이머 : WEB API)
// 리액트 관점에서보면 리액트 렌더링과 관련이없음
// 타이머 조작은 사이트 이펙트임
// useEffect사용해야함
//  useEffect(() => {
//     //setup 함수
//     // WEB API -> 특정 주기마다 콜백 함수 실행
//     const intervalId = setInterval(() => { 
//       console.log('타이머 시작')
//       setSeconds((prev) => prev + 1)
//     }, 1000)
//     // cleanup 함수
//     return () => {
//       console.log('타이머 종료')
//       clearInterval(intervalId)
//     }
//   }, [])


//   useEffect(() => {

//     console.log('마운트 됨')

//     // 문서를 통해 사용자와 상호자도록 이벤트를 연결(추가)
//     document.addEventListener('click', () => {
//       console.log(`현재 seconds값은 ${seconds} 이다`)
//     })

//     // 정리가 필요 (연결된 이벤트 제거)
//     return function cleanup() {
//       document.removeEventListener('click', () => {
//         console.log(`현재 secconds값은 ${seconds}이다.`)
//       })
//     }

//   }, [seconds])