import { useEffect, useState } from 'react'
import { AuthContext, type AuthContextValue, type User } from './context'
import { USER_STOREGE_KEY } from '@/configs/storageKey'


export function AuthProvider(props: React.PropsWithChildren) {
  // 인증 상태 (State) ----------------------------------------------------------

  const [user, setUser] = useState<AuthContextValue['user']>(null)
  const [initalizing, setInitalizing] = useState(true)

  // 앱 초기 구성 이펙트 -----------------------------------------------------------

  useEffect(() => {
    // 애플리케이션 초기화 (인증 상태 확인 후, 인증 컨텍스트의 user 값으로 설정)
    const initApp = () => {
      try {
        // 사용자 브라우저 스토리지에 저장된 사용자 정보 가져오기
        const userInfo = localStorage.getItem(USER_STOREGE_KEY)
        // 만약 사용자 정보가 있다면? 인증 컨텍스트의 user 값으로 설정
        if (userInfo) setUser(JSON.parse(userInfo))
      } catch (error) {
        console.error('인증 정보 해석 실패:', error)
        // 잘못된 인증 정보 삭제
        localStorage.removeItem(USER_STOREGE_KEY)
      } finally {
        // 준비상태 끝
        setInitalizing(false)
      }
    }

    initApp()
  }, [])

  // 인증 액션 (Actions) ---------------------------------------------------------

  const login = async (email: User['email']) => {
    // 로그인 시도 (서버에 로그인 요청/응답)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // 1.5초 지연 (서버 비동기 처리 시뮬레이션)

    // 인증된 사용자 정보
    const userInfo = { email }

    // user 상태 업데이트 요청
    setUser(userInfo)

    // 사용자 브라우저 스토리지에 인증 정보 저장 (노출 가능한 것만, 민감한 것은 제외)
    localStorage.setItem(USER_STOREGE_KEY, JSON.stringify(userInfo))
  }

  const logout = () => {
    // 로그아웃 시도
    setUser(null)

    // 사용자 브라우저 스토리지에 인증 정보 제거
    localStorage.removeItem(USER_STOREGE_KEY)
  }

  const authContextValue: AuthContextValue = {
    user,
    initalizing,
    login,
    logout,
  }

  return <AuthContext value={authContextValue} {...props} />
}