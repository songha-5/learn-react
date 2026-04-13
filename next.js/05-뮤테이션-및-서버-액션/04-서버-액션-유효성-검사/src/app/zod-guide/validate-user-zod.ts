import { z } from 'zod'

/**
 * Zod 스키마 선언
 * 기존의 if 조건문들을 체이닝 메소드로 대체합니다.
 */
export const UserSchema = z.object({
    name: z.string('사용자 이름은 문자 값이여야 합니다').min(2, '이름은 2글자 이상의 문자열이어야 합니다.'),
    age: z.number('사용자 이름은 숫자 값이여야 합니다').min(19, '사용자 나이는 최소 19세 이상이어야 합니다').max(59, '사용자 나이는 최대 59세 이하여야 합니다'),
    job: z.string('사용자 직업은 문자 값이여야 합니다'),
    email: z.email('유효한 이메일 형식이 아닙니다.'),
    phoneNumber: z.string('사용자 번호는 문자여야합니다').regex(/^010-\d{4}-\d{4}/, '전화번호 형식이 올바르지 않습니다. (예: 010-0000-0000)'),
    github: z.string('github 주소는 문자여야합니다').startsWith('https://', 'GitHub 주소는 https://로 시작해야 합니다.'),
    role: z.enum(['admin', 'member', 'guest'], '권한은 admin, member, guest 중 하나여야 합니다.')
  })
/**
 * TypeScript 타입 추출
 * 기존의 interface UserValid를 수동으로 작성할 필요 없이 스키마에서 추출합니다.
 */
export type User = z.infer<typeof UserSchema> 

/**
 * 검증 함수 (Zod 버전)
 * 기존 validateUser 함수를 대체합니다.
 */
export const validateUser = (user: User) => {
  // UserSchema를 사용해 사용자 입력 값을 검사 (parse, safeParse)
  const result = UserSchema.safeParse(user)
  if (!result.success) {
    // console.log(z.prettifyError(result.error))
    console.log(z.treeifyError(result.error))
  }
}