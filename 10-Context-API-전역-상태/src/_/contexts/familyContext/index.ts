import { createContext, type Dispatch, type SetStateAction } from "react";

export interface FamilyContextValue {
  // 상태
  name: string
  email: string
  checked: boolean

  // 액션(함수)
  setName: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setChecked: Dispatch<SetStateAction<boolean>>
}

export const FamilyContext = createContext<FamilyContextValue|null>(null)