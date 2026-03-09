import Wrapper from '../Wrapper'
import S from './style.module.css'

// 부모(상위) 컴포넌트가 자식(하위) 컴포넌트에 전달한 데이터 집합 props = properties
// javascript 함수이름(인자) -> function 함수이름(매개변수) {}
// react 컴포넌트이름(데이터, {키:값}) -> function 컴포넌트이름(props) {}

// 타입스크립트 문서 - 인터페이스
// https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html

interface FooterProps {
  slogan: string
}

export default function Footer(props: FooterProps) {

  // 부모 자식컴포넌트의 관계
  // 몇몇의 정보를 자식 컴포넌트에게 전달 가능
  // https://ko.react.dev/learn/passing-props-to-a-component
  /**
   * 데이터 바인딩 (Data Binding = Data + JSX = Markup)
   * - JavaScript 데이터(변수, 상수, 계산된 값(표현식, 함수 반환 값) 등)
   * - JSX 구문 안에 데이터 끼워넣기(Interpolation {data})
   */
  // 숫자값이 아닌 date객체를 이용해 현재 값을 가져올 수 있을까?
  // const currentYear = 2026 
  const currentYear = new Date().getFullYear() 

  /**
   * Props로 데이터 전달(부모 → 자식)
   * - 부모에서 자식으로 전달하는 데이터
   * - React.createElement API에서 Props
   * - Props 타입 정의 (인라인 → 인터페이스)
   */
  const slogan = props.slogan
  console.log({ props }, props.slogan)

  /**
   * 접근성 고려
   * - 사용자가 이해하기 쉽고 읽기 쉽도록 저작권 레이블(label) 구성
   */
  const copyrightLabel = `모든 저작권은 이듬(EUID)에 있습니다. ${slogan}`

  return (
    <footer className={S.footer}>
      <Wrapper>
        <small aria-label={copyrightLabel}>
          {currentYear} COPYRIGHT RESERVED. © <abbr title="이듬(EUID)">EUID</abbr>
          . {slogan}
        </small>
      </Wrapper>
    </footer>
  )
}
