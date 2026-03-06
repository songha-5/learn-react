import Header from '@/components/header/Header'
import Button from '@/components/button/Button'
import Footer from '@/components/foorer/Footer'
import Main from '@/components/main/Main'
import JsxExpressiton from '@/components/jsx-expression/JsxExpressiton'

/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 */

function App() {
  return (
    <>
      {/* header */}
      <Header />

      <Main />
      <section>
        <h2>웹 표준과 접근성을 준수해야 합니다.</h2>
        {/* button 위치 */}
        <Button /> {/* 리액트 컴포넌트 JSX구문 */}
      </section>

      {/* JsxExpressiton */}
      <JsxExpressiton />
      {/* footer */}
      <Footer />
    </>
  )
}

export default App