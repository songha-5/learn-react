
export interface Todo {
  message: string
  todos: []
}

interface GetTodo {
  id: number
  option?: RequestInit
}
const API_URL = import.meta.env.VITE_API_URL

export const getTodo = async ({id, option}: GetTodo): Promise<Todo> => {
  try {
    const response = await fetch(`${API_URL}/api/todos?userId=${id}`, option)
    if(!response.ok) throw new Error(`${id}의 TODO 호출에 실패했습니다`)

    return response.json()
  } catch(error) {
    throw error instanceof Error ? error : new Error(String(error))
  }
}