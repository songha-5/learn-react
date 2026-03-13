import { useEffect, useState } from 'react'
import styles from './EffectBasic.module.css'

async function wait(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export default function EffectBasic() {
  const [count, setCount] = useState(0)

  // 이벤트 - 인터렉션
  const handleIncreaseCount = async () => {
    await wait(1500)
    setCount((prev) => prev + 1)
  }
  // 이펙트 - 라이프사이클
  useEffect(() => {
    document.title = `현재 카운트: ${count}`
  })
  
  return (
    <section className={styles.container}>
      

      <h2 className={styles.title}>Effect 기초 학습</h2>

      <button type="button" className={styles.counterButton} onClick={handleIncreaseCount}>
        카운트 증가: {count}
      </button>

      <p className={styles.statusText}>
        콘솔 로그를 통해 실행 순서를 확인해보세요.
      </p>
    </section>
  )
}
