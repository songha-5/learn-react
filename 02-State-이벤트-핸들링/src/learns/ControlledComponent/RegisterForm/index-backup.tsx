import { useState, type ChangeEvent, type InputEvent } from 'react'
import S from './style.module.css'


// 리엑트에 의헤 - 제어된 컴포넌트
// 리액트에 의해 - 제어되지 않은 컴포넌트


function RegisterForm() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form요소 참조
    const formElement = e.currentTarget
    // formData 객체 생성
    const formData = new FormData(formElement)

    // formData 객체의 get() 메서드 사용해서 사용자 입력 값을 가져올 수 있음
    // const username = formData.get('username')
    // const useremail = formData.get('useremail')
    // console.log(username, useremail)

    // Object.fromEntrise()메서드를 사용해 폼ㅁ 데이터를 일반 객체화
    const {username, useremail} = Object.fromEntries(formData)
    console.log(username, useremail)
  }

  // 리액트에 의해 제어되지 않는 컴포넌트
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleUncontrolled = (e: InputEvent<HTMLInputElement>) => {
     // 개발자가 타입스크립트에게 해당 타입을
    // 확신을 가지고 단언(assertion) 해야한다 
    // 아니면 input에게 에러가 일어남

    // as사용
    // https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#%ED%83%80%EC%9E%85-%EB%8B%A8%EC%96%B8
    const { value } = e.target as HTMLInputElement
    const trimedValue = value.trim()

    if(value.trim().length < 2) {
      console.warn('두글자 이상 입력해주세요')
    }

    const output = document.querySelector('.' + S.preview + ' span')
    if (output) output.textContent = trimedValue
  }

  // 리액트에 의해 제어되는 컴포넌트
  // [ state ] 필요
  const [userName, setUsername] = useState('')
  const [useremail, setUseremail] = useState('')
  const isUsernameLength2 = userName.length < 2
  const isUsereameLength2 = useremail.includes('@') && useremail.includes('.')

  const handleControlled = (e: ChangeEvent<HTMLInputElement>) => {
    // 사용자의 입력 값 정리
    const { value } = e.target

    if(value.trim().length< 2) console.warn('두글자 이상 입력해주세요')

    // 상태 업데이트 (리액트에 요청)
    setUsername(value)    
  }

  const handleControlledEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    const valueCheck = value.trim()
    if(valueCheck.length < 2) console.warn('두글자 이상 입력해주세요')

    setUseremail(value)
  }

  return (
    <form className={S.form}
      onSubmit={handleSubmit}
    >
      <div className={S.field}>
        <label htmlFor="username" className={S.label}>이름</label>
        <input 
          id="username" 
          type="text"
          name="username" 
          className={S.input} 
          placeholder='이름을 입력해주세요.' 
          // onInput={handleUncontrolled} //리액트에의해 제어되지 않는 컴포넌트
          onChange={handleControlled} //리액트에 의헤 제어되는 컴포넌트
        />
        {/* 조건부 렌더링 username상태 값이 길이가 2보다 작다면 오류 메시지 표시 */}
        { isUsernameLength2 && (
          <span role='alert' className={S.errorMessage}>이름 값은 2글자 이상 입력해야 해요!</span>
        )}
      </div>
      <div className={S.field}>
        <label htmlFor="useremail" className={S.label}>이메일</label>
        <input 
          id='useremail' 
          name='useremail' 
          type="email" 
          className={S.input} 
          value={useremail}
          placeholder='user@email.com'
          onChange={handleControlledEmail}
        />
        { isUsereameLength2 && (
          <span role='alert' className={S.errorMessage}>이름 값은 2글자 이상 입력해야 해요!</span>
        )}

      </div>

      <button type='submit' className={S.button}>제출</button>

      <p className={S.preview}>
        {/* 리액트에 의해 제어된 방식 (선언된 상태를 JSX에 바인딩) */}
        출력된 이름: {userName}

        {/* 전통적인 웹 표준 방식(DOM을통해 요소에 접근/조작) */}
        {/* <span>이름 데이터</span> */}
      </p>
    </form>
  )
}

export default RegisterForm
