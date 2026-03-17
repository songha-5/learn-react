import { useEffect, useState } from 'react'
import { getTodos, type Todo } from '@/api/getTodo'
import S from './TodoSearch.module.css'

// 디바운스 시간(ms)
const DEBOUNCE_TIME = 500

export default function TodoSearch() {
  // 리액트로 하여금 화면을 변경
  // 선언적 API로 제어 (상태 선언)
  // - 로딩(loading) 상태
  const [loading, setLoading] = useState(false)
  // - 할 일 목록(todos) 상태
  const [todos, setTodos] = useState<Todo[]>([])
  // - 사용자 ID(userId) 상태
  const [userId, setUserId] = useState('')

  // 사용자 ID 값이 변경될 때마다 이펙트 함수 실행
  useEffect(() => {

    // 아직 응답되지 않은 이전의 네트워크 요청 중단
    const controller = new AbortController()
    const { signal } = controller
    
    const fetchTodos = async () => {
      if (userId === '') return setTodos([])
        
      setLoading(true)
        
      try {
        const todos = await getTodos(userId, { signal })
        setTodos(todos)
      } catch(error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('데이터 로드 실패')
          setTodos([]) // todos 상태 초기화
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    // 디바운스 : 사용자 입력이 더 없다면 그때 데이터 가져오기 요청 (시간만큼)
    const debounceId = setTimeout(fetchTodos, DEBOUNCE_TIME)


    // 클린업(정리) 함수
    return () => {
      controller.abort()
      console.log('정리(Cleanup): 중복된 또는 응답되지 않은 이전의 요청 중단')
      clearTimeout(debounceId)
    }

  }, [userId])

  // 파생된 상태 (Derived State)
  // 테스트를 목적으로 todos 순환하여 랜덤으로 completed 상태 전환
  const dummyTodos = getRandomCompletedTodos(todos)

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
          min={1}
          max={20}
          placeholder="사용자 ID를 입력하세요 (예: 1 ~ 20)"
          value={userId}
          onChange={(e) => setUserId(e.target.value.trim())}
        />
      </div>

      {!loading && todos.length > 0 && (
        <ul className={S.list}>
          {dummyTodos.map(({ id, content, completed }) => {
            const doneClassname = completed ? S.completed : ''

            return (
              <li key={id} className={S.item}>
                <span className={`${S.textContent} ${doneClassname}`}>
                  {content}
                </span>
                <span
                  aria-label={completed ? '완료' : '예정'}
                  style={{ opacity: completed ? 1 : 0.3 }}
                >
                  {completed ? '✅' : '❎'}
                </span>
              </li>
            )
          })}
        </ul>
      )}

      <div role="status" className={S.statusRegion}>
        {loading && <p className={S.loading}>데이터를 가져오고 있습니다...</p>}

        {!loading && userId && todos.length === 0 && (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </section>
  )
}

// 유틸리티 함수
const getRandomCompletedTodos = (todos: Todo[]) =>
  todos.map((todo) => ({
    ...todo,
    completed: Math.random() >= 0.5,
  }))