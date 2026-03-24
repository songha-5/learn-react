import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  // 상태 (로딩 | 에러 | 데이터)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error|null>(null)
  const [data, setData] = useState<T|null>(null)

  // 이펙트 (외부 시스템과 리액트 동기화)
  useEffect(() => {
    // 데이터 페칭
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`네트워크 요청이 실패했습니다. 상태코드 : ${response.status}`)
        }

        const responseData: T = await response.json()
        setData(responseData)
      } catch(error) {
        const isError = error instanceof Error
        setError(isError ? error : new Error('알 수 없는 에러가 발생했습니다.'))
      } finally {
        setIsLoading(false)
      }
    }

    // 데이터 페칭 함수 실행
    fetchData()
  }, [url])


  // 상태 반환
  // 예시 const { isLoadding, error, data }
  return { isLoading, error, data }
}