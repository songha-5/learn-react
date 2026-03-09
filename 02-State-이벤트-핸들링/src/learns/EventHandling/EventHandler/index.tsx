import { useState } from 'react'
import S from './style.module.css'

function EventHandler() {
  const [count, setCount] = useState(0)

  const handlePrintMessage = (message: string) => {
    alert(message)
  }

  const handleIncreseCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.type + '이벤트 발동')
    const nextCount = count + 1
    setCount(nextCount)
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`${e.type} 이벤트 발동`)
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`${e.type} 이벤트 발동`)
  }

  return (
    <section className={S.container}>
      <h2 className={S.title}>이벤트 핸들링 실습</h2>
      <div role="group" className={S.buttonGroup}>
        <button type="button" className={S.button} onClickCapture={handleIncreseCount} onMouseEnter={() => handlePrintMessage('오늘 수업 끝!')}>
          클릭 이벤트 {count}
        </button>
        <button type="button" className={`${S.button} ${S.secondary}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          호버 이벤트
        </button>
      </div>
    </section>
  )
}

export default EventHandler