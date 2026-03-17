
export interface User {
  id: number
  username: string
  email: string
  phone: string
  address: string
  createdAt: string
}

export interface ResponseUserData {
  message: string
  user: User
}

const API_URL = import.meta.env.VITE_API_URL

export const getUser = async (userId: string, option?: RequestInit): Promise<ResponseUserData> => {
  try {
    const response = await fetch(`${API_URL}/api/users/${userId}`, option)
        
    if (!response.ok) {
      throw new Error(`사용자 "${userId}" 요청에 실패했습니다.`)
    }

    return response.json()
  } catch(error) {
    throw error instanceof Error ? error : new Error(String(error))
  }
}