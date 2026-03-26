import { useEffect, useState } from "react"


export function useDebounce(initialValue: string, delay = 300) {
  // 디바운스
  const [debounceValue, setDebounceValue] = useState(initialValue)

  // 디바운스 처리를 위한 이펙트
  useEffect(() => {
    // 타이머 (지연처리 : 비동기)
    const timerId = setTimeout(() => {
      setDebounceValue(initialValue)
    }, delay)
    // 클린업: 컴포넌트가 업데이트 될 때마다 정리 ( 타이핑 할 때마다 )
    return () => clearTimeout(timerId)
  }, [initialValue, delay])

  return [debounceValue, setDebounceValue] as const
}