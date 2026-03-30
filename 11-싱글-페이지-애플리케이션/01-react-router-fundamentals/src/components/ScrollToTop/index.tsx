import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  // const location = useLocation()
  const { pathname, search } = useLocation()

  // URL의 pathname 또는 search값이 바뀌면 gloablThis.scrollTo(0, 0) 적용
  // 페이지 이동시 저 두가지는 항상 바뀌니까

  useEffect(() => {
    // 타이머를 사용해 이동 시간을 조금 뒤로 미룸
    // 웹에 바로 적용이 안되기 때문
    const timerId = setTimeout(() => {
      // 페이지 상단으로 스크롤 이동
      globalThis.scrollTo(0, 0)
    }, 50)

    // 클린업 (메모리 누수 방지)
    return () => clearTimeout(timerId)
  }, [pathname, search])
  return null
}
