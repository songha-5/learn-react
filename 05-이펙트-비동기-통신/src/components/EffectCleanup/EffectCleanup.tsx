import { useState } from 'react'
import S from './EffectCleanup.module.css'
import Timer from './Timer'

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

