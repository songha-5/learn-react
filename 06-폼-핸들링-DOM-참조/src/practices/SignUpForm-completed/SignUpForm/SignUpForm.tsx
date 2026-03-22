import { useRef, useState } from 'react'
import S from './SignUpForm.module.css'
import SubmitButton from './parts/SubmitButton'
import InputField from './parts/InputField'
import ErrorMessage from './parts/ErrorMessage'

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

interface FormState {
  username: string
  email: string
  password: string
}

type FormStateKey = keyof FormState

const INITIAL_STATE: FormState = {
  username: '',
  email: '',
  password: '',
}

export default function SignUpForm() {
  const [formData, setFormData] = useState(INITIAL_STATE)

  const [isCompositing, setIsCompositing] = useState(false)

  const [errors, setErrors] = useState(INITIAL_STATE)

  const [isPending, setIsPending] = useState(false)

  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const isValid = Object.values(formData).every((val) => val.trim() !== '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name as FormStateKey]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = { username: '', email: '', password: '' }
    let valid = true

    if (formData.username.length < 2) {
      newErrors.username = '아이디는 2글자 이상 입력합니다.'
      usernameRef.current?.focus()
      valid = false
    } else if (!EMAIL_PATTERN.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.'
      if (valid) emailRef.current?.focus()
      valid = false
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 6자리 이상 입력해야 합니다.'
      if (valid) passwordRef.current?.focus()
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isCompositing || !isValid || isPending || !validate()) return

    setIsPending(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('제출 데이터:', formData)
      alert('가입 성공!')
      setFormData(INITIAL_STATE)
      setErrors(INITIAL_STATE)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className={S.container}>
      <h2 className={S.title}>회원가입</h2>

      <form className={S.form} onSubmit={handleSubmit} noValidate>
        <InputField
          ref={usernameRef}
          label="아이디 (한글 가능)"
          name="username"
          placeholder="2글자 이상 입력"
          value={formData.username}
          onChange={handleChange}
          onCompositionStart={() => setIsCompositing(true)}
          onCompositionEnd={() => setIsCompositing(false)}
          errorMessage={<ErrorMessage>{errors.username}</ErrorMessage>}
        />

        <InputField
          ref={emailRef}
          label="이메일"
          type='email'
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          errorMessage={<ErrorMessage>{errors.email}</ErrorMessage>}
        />

        <InputField
          ref={passwordRef}
          label="패스워드"
          type='password'
          name="password"
          placeholder="6자리 이상 입력"
          value={formData.password}
          onChange={handleChange}
          errorMessage={<ErrorMessage>{errors.password}</ErrorMessage>}
        />

        <SubmitButton isDisabled={!isValid || isPending}>
          {isPending ? '처리 중...' : '가입'}
        </SubmitButton>
      </form>
    </section>
  )
}
