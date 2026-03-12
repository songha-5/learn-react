import { useState } from 'react'
import UserForm from './UserForm'
import S from './style.module.css'

export default function Debugging() {
  const [resetKey, setResetKey] = useState(0)
  const [message, setMassage] = useState('')
  return (
    <section className={S.container}>
      <h2 className={S.title}>디버깅 (Debugging)</h2>

      <div className={S.inputGroup}>
        <label htmlFor="debugging-input">메시지</label>
        <input 
          id='debugging-input'
          type="text" 
          value={message}
          onChange={(e) => setMassage(e.target.value.trim())}
        />
      </div>

      <button 
        type='button'
        onClick={() => setResetKey((prve) => prve + 1)}
      >
        폼 초기화
      </button>
      <UserForm key={resetKey}/>
    </section>
  )
}
