// 인증 정보(데이터)

import { createContext, useContext } from 'react'

// 사용자(user)
// 인증 여부(isAuth)
// 가입(register)
// 로그인(login)
// 로그아웃(logout)

export interface User {
  id: string
  name: string
  email: string
}

interface AuthContextValue {
  user: null | User
  isAuth: boolean
  register: (id: string, email: string, password: string) => void
  login: (email: string, password: string) => void
  logout: () => void
}

/**
 * 인증 컨텍스트
 */
export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuth: false,
  register: () => {},
  login: () => {},
  logout: () => {},
})

/**
 * 인증 커스텀 훅 (함수)
 * 
 * @example
 * 
 * const { register } = useAuth()
 * 
 * <button 
 *   type="button" 
 *   onClick={() => register(id, email, password)}
 * >
 *   회원가입
 * </button>
 */
export const useAuth = () => {
  const authContextValue = useContext(AuthContext)

  // 유효성 검사 (훅 함수는 반드시 컨텍스트 프로바이더 내부에서만 사용 가능)
  if (!authContextValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용 가능합니다.')
  }

  return authContextValue
}