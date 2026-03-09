import type { ReactNode } from 'react'
import S from './style.module.css'
import Wrapper from '../Wrapper'

interface HeaderProps {
  children: ReactNode
}

// ReactNode란? 모든 타입을 사용할거라는 선언
function Header(props: HeaderProps) {

  console.log(props)
  /**
   * 컴포넌트의 `children` 속성
   * - 부모 내부에 삽입되는 (리액트) 자식 요소들
   * - 컴포넌트의 props.children을 통해 전달됨
   * - `children` prop 타입 정의 (인라인 → 인터페이스)
   */

  return (
    <header className={S.header}>
      <Wrapper width={480}>
        {props.children}
      </Wrapper>
    </header>
  )
}

export default Header
