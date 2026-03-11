import { useState } from 'react'
import S from './style.module.css'

// 타입 알리아스(Type Alias)
type UserRole = 'user' | 'admin'

export default function UserForm() {
  // 사용자 이름(name), 이메일(email), 역할(role)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<UserRole>('user')

  const userRole = role === 'admin' ? '관리자' : '일반사용자'

  return (
    <form className={S.container}>
      <fieldset>
        <legend>사용자 정보 입력</legend>
        {/* 이름 입력 필드 */}
        <div className={S.fieldGroup}>
          <label htmlFor="username">이름</label>
          <input 
            type='text'
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value.trim())}
            id="username" 
            placeholder="예: 황주연"
          />
        </div>
        {/* 이메일 입력 필드 */}
        <div className={S.fieldGroup}>
          <label htmlFor="useremial">이메일</label>
          <input 
            type='email'
            name="name"
            value={email}
            onChange={(e)=>setEmail(e.target.value.trim())}
            id="useremial" 
            placeholder="예: email@email.com"
          />
        </div>

        {/* 역할 셀렉트 메뉴 */}
        <div className={S.fieldGroup}>
          <label htmlFor="userrole">역할</label>
          <select name="role" id="userrole" value={role}
           onChange={(e) => {
              const value = e.target.value as UserRole
              setRole(value)
            }}
          >
            <option value="user">일반 사용자</option>
            <option value="admin">관리자</option>
          </select>
        </div>
      </fieldset>

      <output className={S.priview}>
        <strong>현재 입력 값</strong>{' '}{name || '없음'} / {email || '없음'} ({userRole})
      </output>
    </form>
  )
}
