import Header from '@/components/Header'
import Footer from '@/components/Footer'
import S from './style.module.css'
import Section from '@/components/Section'
import Button from '@/components/Button'
// import { createElement } from 'react'

export default function App() {
  return (
    <div className={S.container}>
      <Header>
        <h1>헤더 컴포넌트</h1>
      </Header>

      <Section title="타이틀입니다" isShowTitle={true}>
        <p>섹션입니다.</p>
        <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
          {/* if문 // 삼항연산자로 할때 */}
          {/* <Button>Reaction</Button>
          <Button isDisabled>Reactive</Button>
          <Button>Reactivity</Button> */}

          {/* 함수전달방식 */}
          <Button onNoti={() => alert('버튼!')}>Reaction</Button>
          <Button onNoti={() => alert('버튼!')} isDisabled>Reactive</Button>
          <Button onNoti={() => alert('버튼!')}>Reactivity</Button>
        </div>
      </Section>
      <Footer slogan={'완주 이후엔 스스로 학습이 가능!'}/>
      
      {/* 위와 동일한 컴포넌트 */}
      {/* {createElement( 
        // Component Name
        Footer,
        // Component Props
        { slogan: '완주 이후엔 스스로 학습 가능!' },
      )} */}
    </div>
  )
}
