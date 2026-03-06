import './App.css'
const size = 120


/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 */

function App() {
  return (
    <>
      <header className='header'>
        <h1>
          <dfn><abbr>JSX</abbr></dfn> 기초 배우기
        </h1>
      </header>
      <main>
        {/* 태그 닫기! */}
        <h2>모든 태그는 닫혀야 합니다.</h2>
        <img src="/react.svg" alt="리액트 로고" width={size} height={size}/>

        <p>
          <dfn>
            <abbr title="Hyper Text Markup Language">HTML</abbr>에서는 허용되었던 {'<img>'}태그도 닫아야합니다.
          </dfn>
        </p>
      </main>
    </>
  )
}

export default App