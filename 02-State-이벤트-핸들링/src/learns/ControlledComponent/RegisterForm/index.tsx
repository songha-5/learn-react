import { useState, type ChangeEvent } from 'react'
import S from './style.module.css'

const REG_EMAIL_CHECK = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function RegisterForm() {
  
  // 리액트에 화면을 그리도록 요청하기 위해 상태 선언
  const [formState, setFormState] = useState({
    name: 'NAME',
    email: 'email@naver.com',
  })

  // 하나의 함수로 input 값 모두 변경하기
  const handleChangeFormState = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // 계산된 속성을 사용해 폼 속성을 수정가능
    // 방법 1. nextState값으로 설정
    const nextFormState = {
      ...formState,
      [name]: value.trim()
    }
    setFormState(nextFormState)


    // 방법 2. 업데이트 함수를 사용해 이전 값을 기반으로 상태 값 설정
    // setFormState((prevFormState) => ({
    //     ...prevFormState,
    //     [name]: value.trim()
    // }))
  }

  // 각각 주는 방법 ( 비추 )
  // const handleChangeName = (e:ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target
  //     const nextFormState = {
  //     ...formState,
  //     name: value.trim(),
  //   }
  //   setFormState(nextFormState)
  // }
  // const handleChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target
  //     const nextFormState = {
  //     ...formState,
  //     email: value.trim(),
  //   }
  //   setFormState(nextFormState)
  // }

  console.log(formState)

  return (
    <form className={S.form} onSubmit={(e) => e.preventDefault()}>
      <div className={S.field}>
        <label htmlFor="username" className={S.label}>
          이름
        </label>
        <input
          id="username"
          name="name" // useState 키값과 동일
          type="text"
          className={S.input}
          placeholder="이름을 입력해주세요."
          value={formState.name}
          onChange={handleChangeFormState}
        />
      </div>

      <div className={S.field}>
        <label htmlFor="useremail" className={S.label}>
          이메일
        </label>
        <input
          id="useremail"
          name="email" // useState 키값과 동일
          type="email"
          className={S.input}
          placeholder="user@company.io"
          value={formState.email}
          onChange={handleChangeFormState}
        />
      </div>

      <button type="submit" className={S.button}>
        제출
      </button>

      <p className={S.preview}>
        출력될 이름: {formState.name} / {formState.email}
      </p>
    </form>
  )
}