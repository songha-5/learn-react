import './App.css'

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
      <section>
        <h2><abbr>HTML</abbr>이 아닙니다</h2>
        <label htmlFor='username'>이름</label>
        <input id='username' type='text' className='input' placeholder='이름을 입력하세요.'/>
      </section>
      <section>
        <h2>웹 표준과 접근성을 준수해야 합니다.</h2>
        {/* 클릭 이벤트 리스너 추가 onClick = {함수} */}
        {/* button은 button으로! div X */}
        <div onClick={() => alert('no div')}>no div</div>
        <button onClick={() => alert('yes button')}>사용자 고려버튼</button>
      </section>
      <footer className='footer'>
        <small>
          COPYRIGHT RESERVE &copy; <abbr>카피라이터!</abbr>
        </small>
      </footer>
    </>
  )
}

export default App