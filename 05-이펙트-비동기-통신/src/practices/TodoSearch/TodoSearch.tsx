import { useEffect, useState } from 'react'
import S from './TodoSearch.module.css'

// API 엔드포인트(Endpoint)
const { VITE_API_URL: API_URL } = import.meta.env
console.log(`${API_URL}/api/todos?userId=${1}`)

// 응답 데이터 타입 지정
interface ResponseTodosData {
  message: string
  todos: Todo[]
}

interface Todo {
  id: number
  content: string
  completed: boolean
  userId: number
}


export default function TodoSearch() {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [userId, setUserId] = useState('')

  // 사용자 ID값이 변경될때마다 실행
  useEffect(() => {

    // userId가 빈값이면 함수종료
    const getTodos = async () => {
      if (userId === '') {
        setTodos([])
        return
      }

      // 로딩 상태 업데이트
      setLoading(true)

      // 데이터 요청/응답 (비동기)
      const response = await fetch(`${API_URL}/api/todos?userId=${userId}`)
      const data: ResponseTodosData = await response.json()
      setTodos(data.todos)
      // 로딩 상태 업데이트
      setLoading(false)
    }

    getTodos()
  }, [userId])

  return (
    <section className={S.container}>
      <header>
        <h2>사용자 ID로 할 일 찾기</h2>
        <p className={S.info}>사용자 ID를 입력해 목록을 확인하세요.</p>
      </header>

      <div className={S.searchField}>
        <label htmlFor="user-id-input" className="sr-only">
          사용자 ID
        </label>
        <input
          id="user-id-input"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value.trim())}
          min={1}
          max={20}
          placeholder="사용자 ID를 입력하세요 (예: 1 ~ 20)"
        />
      </div>

      {/* 할 일 목록 템플릿 */}
      {!loading && todos.length > 0 && (
        <ul className={S.list}>
          {todos.map(({ id, content/* , completed 실제 데이터 */ }) => {
            const isDone = getRandomDone() // 할 일 완료 상태 확인 (목적)
            const doneClassname = isDone ? S.completed : ''

            return (
              <li key={id} className={S.item}>
                <span className={`${S.textContent} ${doneClassname}`}>{content}</span>
                <span
                  aria-label={isDone ? '완료' : '예정'}
                  style={{ opacity: isDone ? 1 : 0.3 }}
                >
                  {isDone ? '✅' : '❎'}
                </span>
              </li>
            )
          })}
        </ul>
      )}

      {/* 상태 알림 템플릿 */}
      <div role="status" className={S.statusRegion}>
        {/* 데이로 로딩 중 표시 메시지 */}
        {loading && (
          <p className={S.loading}>데이터를 가져오고 있습니다...</p>
        )}
        {/* 검색 결과가 없을 경우 표시 메시지 */}
        {!loading && userId && todos.length === 0 && (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </section>
  )
}

// 유틸리티 함수
const getRandomDone = () => Math.random() >= 0.5