import Header from '@/components/Header'
import Footer from '@/components/Footer'
import S from './style.module.css'
import Section from '@/components/Section'
// import { createElement } from 'react'

export default function App() {
  return (
    <div className={S.container}>
      <Header>
        <h1>헤더 컴포넌트</h1>
      </Header>

      <Section title="타이틀입니다" isShowTitle={true}>
        <p>섹션입니다.</p>
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
