import type { ReactNode } from 'react'
import S from './style.module.css'

interface ButtonProps {
  children: ReactNode
  isDisabled?: boolean
}

function Button({ isDisabled = false, children }: ButtonProps) {
  // 구조 분해 할당 (Props는 객체)
  // const { children } = props
  // const isDisabled = false

  /**
   * 컴포넌트 속성(Props) 설계
   * - 속성 타입 정의 (인라인 → 인터페이스)
   * - 속성 구조 분해 할당
   */

  let handleClick

  if(!isDisabled) {
    handleClick = () => alert('모든 사용자가 행복해요!!! 🌈')
  }

  return (
    <button
      type="button"
      className={S.button}
      // 함수가 조금 지저분함
      // onClick={ isDisabled ? undefined : () => alert('모든 사용자가 행복해요!!! 🌈')}
      // 함수 정리
      onClick={handleClick}
      aria-disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
