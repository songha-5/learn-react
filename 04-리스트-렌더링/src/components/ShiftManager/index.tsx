import { useState } from 'react'
// 1. 데이터 가져오기(불러오기)
import managersData from './data/managers.json'
// 2. 타입 가져오기(불러오기)
import type { Manager } from './type/manager'
import S from './style.module.css'

// 3. 초기 데이터에 타입 지정하기
const INITIAL_MANAGERS: Manager[] = managersData

export default function ShiftManager() {
  // 4. 컴포넌트의 상태로 선언하기 (초기 데이터값 설정)
  //    '매니저들(managers)' 상태 선언
  const [managers, setManagers] = useState(INITIAL_MANAGERS)

  const handleShuffle = () => {
    const nextManagers = managers.toSorted(() => Math.random() - 0.5)
    setManagers(nextManagers)
  }

  return (
    <section className={S.container}>
      <header className={S.header}>
        <h2 id="manager-title">오늘의 근무 순서 조정</h2>
        <p className={S.guide}>
          기본 메시지를 확인하고, <strong>추가 메모를 작성</strong>한 뒤 순서를
          섞어보세요.
        </p>
        <button
          type="button"
          className={S.reorderBtn}
          aria-label='manager-list'
          onClick={handleShuffle}
        >
          근무 순서 무작위 재배치
        </button>
      </header>

      <ul className={S.list}>
        {managers.map((manager) => {
          return (
            <li key={manager.id} className={S.card}>
              <div className={S.staffInfo}>
                <span className={S.badge}>{manager.task}</span>
                <strong className={S.name}>{manager.name}</strong>
              </div>

              <div className={S.defaultMessage}>
                <span className={S.label}>공지 {manager.message}</span>
              </div>

              <div className={S.memofield}>
                <label htmlFor={manager.id}>{manager.name}님 전달사항</label>
                <input type="text" id={manager.id} className={S.input} placeholder={`${manager.name} 님에게 전달할 메모`}/>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}