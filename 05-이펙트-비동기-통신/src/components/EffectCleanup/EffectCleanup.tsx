import { useEffect, useState } from 'react'
import S from './EffectCleanup.module.css'

export default function EffectCleanup() {
  
  // 타이머 표시/감춤 상태 선언
  const [isShow, setIsShow] = useState(false)

  const handleIsShow = () => {setIsShow(!isShow)}

  return (
    <article className={S.container}>
      <header>
        <h2>이펙트(Effect) 클린업</h2>
        <p>컴포넌트의 소멸과 자원 정리 과정을 관찰합니다.</p>
      </header>

      <button
        type="button"
        className={S.toggleButton}
        onClick={handleIsShow}
        aria-pressed={isShow}
      >
        타이머 {isShow ? '제거' : '추가'}
      </button>

      <div role="region" aria-live="polite">
        {isShow ? <Timer /> : null}
      </div>
    </article>
  )
}

function Timer() {
  const [seconds, setSeconds] = useState(0)

  // 특정 시간마다 콜백 함수를 실행하는 방법(타이머 : WEB API)
  // 리액트 관점에서보면 리액트 렌더링과 관련이없음
  // 타이머 조작은 사이트 이펙트임
  // useEffect사용해야함

  useEffect(() => {
    //setup 함수
    // WEB API -> 특정 주기마다 콜백 함수 실행
    const intervalId = setInterval(() => { 
      console.log('타이머 시작')
      setSeconds((prev) => prev + 1)
    }, 1000)
    // cleanup 함수
    return () => {
      console.log('타이머 종료')
      clearInterval(intervalId)
    }
  }, [])
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
