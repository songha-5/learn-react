import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

type setAction<T> = React.Dispatch<React.SetStateAction<T>>

interface FamilyContextValue {
  // 상태
  name: string
  email: string
  checked: boolean

  // 액션(함수)
  setName: setAction<string>
  setEmail: setAction<string>
  setChecked: setAction<boolean>
}

export const FamilyContext = createContext<FamilyContextValue|null>(null)

// 컨텍스트 전용 커스텀 훅 함수 정의 후 내보내기
export const useFamily = () => {
  const familyContextValue = useContext(FamilyContext)

  if (!familyContextValue) {
    throw new Error('useFamily 훅은 FamilyProvider 내부에서만 사용해야 합니다.')
  }

  return familyContextValue
}