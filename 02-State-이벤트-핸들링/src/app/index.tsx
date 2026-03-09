import Header from '@/components/Header'
import Footer from '@/components/Footer'
import S from './style.module.css'
// import { createElement } from 'react'

export default function App() {
  return (
    <div className={S.container}>
      <h1>타이틀</h1>
      <Header />

      <Header>
        <h1>ss</h1>
      </Header>
      <Header>
        <h1>ss</h1>
        <p>aa</p>
      </Header>
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
