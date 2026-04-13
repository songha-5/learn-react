'use server'

import z, { success } from "zod"
import { ko } from "zod/locales"

/**
 * Zod 라이브러리를 설치하고 스키마를 정의합니다.
 * 정의된 스키마를 사용하는 게시글 생성 서버 액션을 정의하세요.
 */
export type Post = z.infer<typeof PostSchema>

export interface FormState {
  success: boolean
  message?: string
  data?: Post
  errors?: | {
    title?: { errors: string[] }
    content?: {errors: string[]}
  }
}
// 오류 메세지 한글화
z.config(ko())

const PostSchema = z.object({
  title: z.string().min(3).max(20),
  content: z.string().min(3).max(100)
})

// 포스트 작성 서버 액션 함수
export const createPostAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  // const title = formData.get('title')?.toString()
  // const content = formData.get('content')?.toString()
  const rawFormData = Object.fromEntries(formData)
  // {title: '...', content: '...'}
  const result = PostSchema.safeParse(rawFormData)
  if (result.success) {
    return {
      success: true,
      message: '포스트 생성에 성공했습니다! 😃',
      data: result.data
    }
  } else {
    return {
      success: false,
      // errors: z.prettifyError(result.error)
      errors: z.treeifyError(result.error).properties
      // errors: z.flattenError(result.error)
    }
  }

}