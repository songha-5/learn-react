import LoginForm from '@/components/LoginForm'
import S from './style.module.css'
import { useAuth } from '@/_/contexts/AuthContext/context'

export default function AuthTest() {

  return (
    <div className={S.container}>
      <LoginForm />
    </div>
  )
}