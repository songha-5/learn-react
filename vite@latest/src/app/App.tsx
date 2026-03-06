import Button from '../components/button/button'
import style from '../styles/App.module.css'

/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 */

function App() {
  return (
    <>
      <header className={style.header}>
        <h1>
          <dfn><abbr>JSX</abbr></dfn> 기초 배우기
        </h1>
        <Button />
      </header>
      <section className={style.main}>
        <h2><abbr>HTML</abbr>이 아닙니다</h2>
        <label className={style.field} htmlFor='username'>이름</label>
        <input id='username' type='text' className={style.input} placeholder='이름을 입력하세요.'/>
      </section>
      <section>
        <h2>웹 표준과 접근성을 준수해야 합니다.</h2>
        {/* button 위치 */}
        <Button /> {/* 리액트 컴포넌트 JSX구문 */}
      </section>
      <footer className={style.footer}>
        <small>
          COPYRIGHT RESERVE &copy; <abbr>카피라이터!</abbr>
        </small>
      </footer>
    </>
  )
}

export default App