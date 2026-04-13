'use server'

import { readFile } from 'node:fs/promises'
import path from 'node:path'
/**
 * src/database/todos.json 파일을 읽고, 쓰는 함수 작성
 * '할 일 생성/토글' 서버 액션 함수 작성
 */

const filePath = path.join(process.cwd(), 'src/database/todos.json')

// 파일 읽기
export async function getTodos(): Promise<Todo[]> {
  try {
    const todosString = await readFile(filePath, 'utf-8')
    const todos = todosString ? JSON.parse(todosString) : []
    return todos
  } catch(error) {
    console.error('에러발생', error)
    return []
  }
}

// 파일 쓰기
// export function setTodos() {
// }


export interface Todo {
  id: number
  title: string
  done: boolean
}
