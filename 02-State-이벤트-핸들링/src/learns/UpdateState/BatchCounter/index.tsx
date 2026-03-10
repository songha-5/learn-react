import { useState } from 'react'
import S from './style.module.css'

const INITAL_COUNT = 0

export default function BatchCounter() {
  const [count, setCount] = useState(INITAL_COUNT)

  // 분리 예제
  const handleResetCount = () => setCount(INITAL_COUNT)

  return (
    <article className={S.container}>
      <h3 className={S.display} aria-label={`배치 카운터 현재 값: ${count}`}>
        {count}
      </h3>

      <div className={S.section}>
        <button 
          type='button'
          className={S.button}
          onClick={handleResetCount}
        >
          초기화
        </button>
        <button type='button'
          className={`${S.button} ${S.primary}`}
          // 배칭, 과거의 값에서 가져와야 바로 계산을해서 다음값에 계산을 할 수 있음
          onClick={() => setCount(INITAL_COUNT => INITAL_COUNT + 1)}
        >
          +1 증가
        </button>
        <button type='button'
          className={`${S.button} ${S.primary}`}
          // 배칭, 과거의 값에서 가져와야 바로 계산을해서 다음값에 계산을 할 수 있음
          onClick={() => setCount(INITAL_COUNT => INITAL_COUNT + 3)}
        >
          +3 증가
        </button>

        <p>리액트 상태 없데이트는 큐(Queue)를 사용해 처리됩니다</p>
      </div>
    </article>
  )
}


