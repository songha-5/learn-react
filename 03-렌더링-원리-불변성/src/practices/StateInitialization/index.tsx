import S from './style.module.css'
import UserForm from './UserForm'

export default function StateInitialization() {
  return (
    <div className={S.container}>
      <header className={S.header}>
        <h2>회원가입 (버전:0)</h2>
        <button type='button' className={S.resetButton}>
          폼 초기화
        </button>
      </header>

      <UserForm />
    </div>
  )
}
