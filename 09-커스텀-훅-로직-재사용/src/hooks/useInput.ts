import { useCallback, useRef, useState } from 'react'

/**
 * useInput 커스텀 훅 v3
 * @param initialValue 초기값
 * @returns props: JSX 요소에 주입할 속성 모음
 * @returns methods: 입력 제어를 위한 메서드 모음
 */
export function useInput<T extends HTMLInputElement>(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback((e: React.ChangeEvent<T>) => {
    setValue(e.target.value)
  }, [])

  const reset = useCallback(() => {
    setValue(initialValue)
  }, [initialValue])

  const ref = useRef<T>(null)
  
  const focus = useCallback(() => { ref.current?.focus() }, [])
  const select = useCallback(() => { ref.current?.select() }, [])

  return { 
    props: { ref, value, onChange }, 
    methods: { reset, focus, select } 
  }
}

// import { useCallback, useState } from "react"

// export function useInput(init = '') {
//   // - 인풋 로직
//   const [value, setValue] = useState(init)
//   const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value)
//   }, [])

//   const reset = useCallback(() => setValue(init), [init])

//   return { 
//     props: {value, onChange},
//     methods: {reset}
//   }
// }

// 방법 2
// 무조건 이 순서대로 고정
// import { useCallback, useState } from 'react'

// export function useInput(initialValue = '') {
//   const [value, setValue] = useState(initialValue)

//   const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value)
//   }, [])

//   const reset = useCallback(() => {
//     setValue(initialValue)
//   }, [initialValue])

//   // 어떤 모양으로 내보낼까?
//   // - 배열? [] 순서가 중요한 상태 값 ✅
//   // - 객체? {} 객체의 키가 중요한 상태 값

//   // [props, methods]
//   return [{ value, onChange }, { reset }] as const
// }
