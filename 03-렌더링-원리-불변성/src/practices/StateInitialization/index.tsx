import S from './style.module.css'
import UserForm from './UserForm'

export default function StateInitialization() {
  return (
    <div className={S.container}>
      <UserForm />
    </div>
  )
}
