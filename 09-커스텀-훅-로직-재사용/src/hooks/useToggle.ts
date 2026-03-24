// 재사용 가능한 로직 추출하기 (컴포넌트에서)
// - 토글 로직
// 커스텀 훅 이름 짓기 (use로 시작하는 함수)

import { useCallback, useState } from "react"

// [boolean, () => void] 순서지정
export function useToggle(initialValue = false) {
  const [isToggle, setIsToggle] = useState<boolean>(initialValue)

  const toggle = useCallback(() => setIsToggle((prev) => !prev), [])

  // 내보내기 (훅 함수의 실행 결과 반환)
  // 배열 또는 객체 타입
  // or [isToggle, toggle] as const
  return [isToggle, toggle] as const
}
