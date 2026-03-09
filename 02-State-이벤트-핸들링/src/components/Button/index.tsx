import type { ReactNode } from 'react'
import S from './style.module.css'

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset'
  children: ReactNode
  isDisabled?: boolean
  onNoti?: () => void // return undefined
}

{/* 기본값 설정 가능 ex - button*/}
function Button({ type = 'button', isDisabled = false, onNoti, children }: ButtonProps) {
  // 구조 분해 할당 (Props는 객체)
  // const { children } = props
  // const isDisabled = false

  /**
   * 컴포넌트 속성(Props) 설계
   * - 속성 타입 정의 (인라인 → 인터페이스)
   * - 속성 구조 분해 할당
   */

  // if문으로 축약
  // let handleClick

  // if(!isDisabled) {
  //   handleClick = () => alert('모든 사용자가 행복해요!!! 🌈')
  // }

  // 함수를 전달해서 부모에서 함수를 전달해 실행하는 방법
  const handleClick = () => {
    if (isDisabled) return
    // 옵셔널 체이닝 (함수타입이야? 함수타입이면 실행)
    onNoti?.()
  }

  return (
    <button
      type={type}
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
