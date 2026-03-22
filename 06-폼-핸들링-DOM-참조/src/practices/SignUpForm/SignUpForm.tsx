import { useId, useState } from 'react'
import S from './SignUpForm.module.css'
import type { FormProps } from './type'

// MISSION.md 파일에서 요구하는 실습을 진행합니다.

export default function SignUpForm() {

  const [formData, setFormData] = useState<FormProps>({
    username: '',
    email: '',
    password: ''
  })

  const usernameId = useId()
  const emailId = useId()
  const passwordId = useId()

  const [isComposing, setIsComposing] = useState(false)

  const isValid = Object.values(formData).every(Boolean)


  const sandFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    // input값 반영
    const { value, name } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


  return (
    <section className={S.container}>
      <h2 className={S.title}>회원가입</h2>

      <form className={S.form} onSubmit={(e) => e.preventDefault()}>
        <div className={S.field}>
          <label htmlFor={usernameId} className={S.label}>
            아이디 (한글 가능)
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={sandFormData}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            id={usernameId}
            name="username"
            placeholder="2글자 이상 입력"
            pattern=".{2,}" 
            className={S.input}
          />
          {/* 
            <span role="alert" className={S.errorText}>
		          {'아이디는 2글자 이상 입력합니다.'}
		        </span>
          */}
        </div>

        <div className={S.field}>
          <label htmlFor={emailId} className={S.label}>
            이메일
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={sandFormData}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            id={emailId}
            name="email"
            placeholder="example@email.com"
            className={S.input}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
          {/* 
            <span role="alert" className={S.errorText}>
		          {'올바른 이메일 형식이 아닙니다.'}
		        </span>
          */}
        </div>

        <div className={S.field}>
          <label htmlFor={passwordId} className={S.label}>
            비밀번호
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={sandFormData}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            id={passwordId}
            name="password"
            placeholder="6자리 이상 입력"
            pattern=".{6,}" 
            className={S.input}
          />
          {/* 
            <span role="alert" className={S.errorText}>
		          {'비밀번호는 6자리 이상 입력해야 합니다.'}
		        </span>
          */}
        </div>

        <button
          type="submit"
          className={S.submitBtn}
        >
          {'가입' /* 또는 '처리 중...' */}
        </button>
      </form>
    </section>
  )
}
