'use server'
//서버 지시어

// Node.js 모듈 가져오기
// - node:fs:fs/promise (file system)
import fs from 'node:fs/promises'
// - node:prosess.cwd
import process from 'node:process'
// - node:path
import path from 'node:path'
import { isErrorObject } from '@/utils'

const dataPath = path.join(process.cwd(), 'src/data/likes.json')
console.log('likes.json 데이터 경로', dataPath)

// 데이터 읽기 (서버 전용 함수)
export async function readLikes() {
  // 'use server' // 서버 지시어

  try {
    const jsonString = await fs.readFile(dataPath, { encoding: 'utf-8' })
    const data = JSON.parse(jsonString) as { count: number }
    console.log(data)
    return data.count
  } catch {
    // 실제값을 못읽어와도 0으로 반환
    return 0
  }

  return 0
}

// 데이터 쓰기 (서버 전용 함수)
export async function writeLikes(likeCount: number) {
  try {
    // 클라이언트에서 전달된 데이터 값 > JSON 문자화
    const jsonString = JSON.stringify({ count: likeCount })
    // JSON 문자열을 fs.wirteFile() API(함수) 서버의 likes.json파일 쓰기
    await fs.writeFile(dataPath, jsonString, { encoding: 'utf-8' })
    console.log(jsonString)

    return { success: true }
  } catch (error) {
    if (isErrorObject(error)) console.error(error.message)
    else console.error('[에러발생]', String(error))
    return { success: false }
  }
}
