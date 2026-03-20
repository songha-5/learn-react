import { useRef, useState } from 'react'
import S from './TodosCRUD.module.css'
import type {Todo} from './type'
import { formatDate } from '../../util/index'
// --------------------------------------------------------------
// 실습 가이드
// --------------------------------------------------------------
// - [Create, 생성] 새로운 할 일 추가, 생성 날짜 설정
//    - `id` 값은 `Date.now()`로 설정
//    - `createdAt` 값은 `new Date.toISOString()`로 설정
// - [Read, 조회] 할 일 목록 데이터를 읽어 상태 선언
// - [Update, 수정] 선택된 할 일 완료 여부 토글(toggle), 업데이트 날짜 수정
//    - `updatedAt` 값은 `new Date.toISOString()`로 설정
// - [Delete, 삭제] 선택된 할 일 삭제
// - [Formatting, 형식 변환] 완료 날짜 포맷팅 (예: '2026년 3월 20일')
// - [A11y, 접근성] 초점 이동, 버튼 비활성화 등 사용자 경험 향상 고려
// --------------------------------------------------------------


const INITAL_TODO: Todo[] = [
    {
      id: 'todo-1773533484499', 
      text: '중첩된 객체 합성',
      done: false,
      metadata: {
        createdAt: '2026-03-18T17:12:41.964Z',
        updatedAt: null,
      },
    },
    {
      id: 'todo-1773533492567',
      text: '전개 연산자 사용 힘들어! 😭',
      done: false,
      metadata: {
        createdAt: '2026-03-19T21:06:47.985Z',
        updatedAt: null,
      },
    },
  ]

export default function NestedObject() {
  const [todos, setTodos] = useState(INITAL_TODO)

  // 할일 뒤집기 (위에 할일이 쌓이도록) => 파생된 상태: 상태가 변경되면 렌더링 중에 다시 계산된 값
  const reversedTodos = [...todos].toReversed()

  // input 컴포넌트의 참조 - DOM 접근 / 조작
  const doitRef = useRef<HTMLInputElement>(null)
  const addButtonRef = useRef<HTMLButtonElement>(null)


  

  // 입력필드 사용 방식 : 제어 vs [비제어]
  const handledSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 웹 표준 방식으로 사용자 입력 값 읽기
    const formData = new FormData(e.currentTarget)
    const doit = formData.get('doit') as string // 타입 단언
    console.log(doit)
    // 유효성검사 & 이 코드가 없다면 빈상태에서 추가누르면 추가 됨
    if(doit && doit.trim().length > 0) {
      // 할 일 추가
      addTodo(doit)

      // 할 일 입력 필드 초기화
      const doitInput = doitRef.current
      if(doitInput) {
        doitInput.value = ''
        doitInput.focus()
      }
    }
  }

  const addTodo = (doit: Todo['text']) => {
    // 새로운 할 일 객체
    const newTodo: Todo = {
      id: `todo-${Date.now()}`,
      text: doit,
      done: false,
      metadata: {
        createdAt: new Date().toISOString(),
        updatedAt: null
      }
    }
    setTodos((prev) => [...prev, newTodo])
  }

  /* const handleUncontrolledInput = (e: React.InputEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value
    const addButton = addButtonRef.current
    
    // if 조건문
    if (input.trim().length > 0) {
      addButton?.setAttribute('aria-disabled', 'false')
    } else {
      addButton?.setAttribute('aria-disabled', 'true')
    }
  } */

    
  // =---
  
  // 방법 2
  const [doit, setDoit] = useState('')

  // 파생된 상태
  const isDisabled = 1 > doit.trim().length

  const handleChangeDoit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setDoit(value)
  }

  return (
    <section className={S.container} aria-labelledby="todos-title">
      <header className={S.header}>
        <h2 id="todos-title" className={S.title}>
          객체/배열 <abbr title="Create Read Update Delete">CRUD</abbr> 실습
        </h2>

        <form className={S.form} onSubmit={handledSubmit}>
          <input
            ref={doitRef}
            // 방법 1 비제어방식
            // onInput={handleUncontrolledInput}

            // 방법 2 제어 방식
            value={doit}
            onChange={handleChangeDoit}
            type="text"
            name="doit" // 비제어 방식에 필요함
            className={S.input}
            aria-label="할 일"
            placeholder="오늘 할 일 입력"
          />
          <button ref={addButtonRef} type="submit" className={S.buttonAdd} 
            // 비제어방식
            aria-disabled={isDisabled}
          >
            추가
          </button>
        </form>
      </header>

      <ul className={S.list} aria-label="할 일 목록">
        {reversedTodos.map((todo) => {
          const todoTextClassName = `${S.text} ${todo.done ? S.completed : ''}`.trim()
          const { createdAt, updatedAt } = todo.metadata

          return (
            <li key={todo.id} className={S.item}>
              <span className={todoTextClassName}>
                {todo.text}
                <span className="sr-only">
                  {!todo.done
                    ? `${formatDate(createdAt)} 생성`
                    : `${formatDate(updatedAt ?? '')} 완료`}
                </span>
              </span>
              <div className={S.buttonGroup}>
                <button
                  type="button"
                  className={S.buttonToggle}
                  aria-pressed={todo.done}
                >
                  {todo.done ? '취소' : '완료'}
                </button>
                <button
                  type="button"
                  className={S.buttonDelete}
                  aria-label={`${todo.text} 삭제`}
                >
                  삭제
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      {todos.length === 0 && (
        <p className={S.empty}>할 일 목록이 비어 있습니다.</p>
      )}
    </section>
  )
}
