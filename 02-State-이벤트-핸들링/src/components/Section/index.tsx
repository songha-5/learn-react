import type { ReactNode } from 'react'
import S from './style.module.css'

interface SectionProps {
  title: string
  isShowTitle: boolean
  children?: ReactNode
}

// 조건부 렌더링 문서
// https://ko.react.dev/learn#conditional-rendering

// 삼항연산식은 JSX에서 쓸수있지만 if문은 밖에서 써서 넣어야함


function Section(props: SectionProps) {
  // if문
  // let headingClassname 
  
  // if(props.isShowTitle) {
  //   headingClassname = 'sr-only'
  // }

  /**
   * 컴포넌트 title, children 속성
   * - 컴포넌트 타입 정의 (인라인 → 인터페이스) ✔
   * - 섹션 제목 설정 (필수) ✔
   * - 섹션 제목 화면에 표시 여부 설정 (선택)
   * - 섹션 내부에 넣을 (리액트) 자식 요소 설정 (선택) ✔
   */
  return (
    <section className={S.container}>
      {/* 삼항연산문 */}
      <h1 className={props.isShowTitle ? 'sr-only' : undefined }>{props.title}</h1>
      {/* if문 */}
      {/* <h1 className={headingClassname}>{props.title}</h1>  */}
      {props.children}
    </section>
  )
}

export default Section
