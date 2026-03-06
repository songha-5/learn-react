import style from './JsxExpressiton.module.css'

export default function JsxExpressiton() {
  // 기본(원시) 데이터
  // string, number
  const nickname = '이름'
  const age = 32

  // boolean, null, undefined
  const isAdmin = true
  const reference = null
  const undefinedValue = undefined

  // 객체형 데이터 array, object, function
  const userPrifile = {
    name: nickname,
    id: 'u-01',
  }

  return (
    <section className={style.container}>
      <h2>JSX 표현식 (조건부 렌더링)</h2>
      <p>사용자 이름 [ {nickname} ] 입니다</p>
      <p>나이는 [ {age} ] 입니다</p>
      <p>내년에는 [ {age+ 1} ] 입니다</p>
      <output>object의 name{userPrifile.name}</output>
      <output>object의 id{userPrifile.id}</output>
      <p>관리자모드 확인 :  {isAdmin ? '관리자에요' : '관리자가 아니에요'}</p>
    </section>
  )
}