import Header from '../components/header/header'
import Button from '../components/button/button'
import Image from '../components/image/image'
import FormField from '../components/form-field/form-field'
import Footer from '../components/foorer/footer'
import style from '../styles/App.module.css'

/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 */

function App() {
  return (
    <>
      {/* header */}
      <Header />

      <section className={style.main}>
        {/* image */}
        <Image />

        <h2><abbr>HTML</abbr>이 아닙니다</h2>

        {/* formField */}
        <FormField />
      </section>
      <section>
        <h2>웹 표준과 접근성을 준수해야 합니다.</h2>
        {/* button 위치 */}
        <Button /> {/* 리액트 컴포넌트 JSX구문 */}
      </section>

      {/* footer */}
      <Footer />
    </>
  )
}

export default App