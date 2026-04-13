import {
  LucideShieldCheck,
  ExternalLink,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/utils'
import { validateUser, type User } from './validate-user-zod'
import { regex, z } from 'zod'

export default function ZodGuidePage() {
  
  // 유효성 검증할 데이터
  const users: User[] = [
    {
      name: '박주아',
      age: 23,
      job: '프론트엔드 개발자',
      email: 'park@jua.com',
      phoneNumber: '010-1234-5678',
      github: 'https://github.com/juapark',
      role: 'member',
    },
    {
      name: '윤',
      age: 62,
      job: '백엔드 개발자',
      email: 'kim.yun',
      phoneNumber: '9876-5432',
      github: 'http://github.com/doyun-kim',
      role: 'master',
    },
  ]

  const [user, user2] = users

  // zod를 사용한 스키마
  // const mySchema = z
  //   .number('사용자 나이는 숫자여야 합니다')
  //   .positive('0보다 큰 양수여야 합니다')
  //   .min(19, '사용자 나이는 19세 이상이여야합니다')
  //   .max(59, '사용자 나이는 59세 이하여야 합니다')

  const mySchema = z
    .number('사용자 나이는 숫자여야 합니다')
    .positive('0보다 큰 양수여야 합니다')
    .min(19, '사용자 나이는 19세 이상이여야합니다')
    .max(59, '사용자 나이는 59세 이하여야 합니다')

  const userEmailSchema = z.email('유효하지 않은 이메일')
  const PhoneNumberSchema = z
    .string('폰 번호는 문자값이여야합니다')
    .regex(
      /^010-\d{4}\d{4}^/,
      '유효하지 않은 전화번호 양식입니다'
  )
  const UrlSchema = z
    .string('URL은 문자값이어야 합니다.')
    .startsWith(
      'https://',
      'GitHub 웹 사이트 경로는 https://로 시작해야 합니다.',
    )

  const RoleSchema = z.enum(
    ['admin', 'member', 'guest'],
    '권한은 admin, member, guest 중 하나여야 합니다.',
  )

  // 사용자 정보 입력 내용 유효성 검사를 위한 스키마 선언(객체형)
  const UserSchema = z.object({
    name: z.string().min(2),
    age: z.number().min(19).max(59),
    job: z.string(),
    email: z.email(),
    phoneNumber: z.string().regex(/^010-\d{4}\d{4}^/),
    github: z.string().startsWith('https://'),
    role: z.enum(['admin', 'member', 'guest'])
  })

  // 사용자 입력 값
  // const someValue = user2.age
  const someValue = user2.age
  const emailValue = user.email
  
  // 선언된 스키마를 사용해 값의 유효성 검사
  // error 반환
  // console.log(mySchema.parse(someValue))
  // {success: false, message: '' 반환}
  // console.log(mySchema.safeParse(someValue))
  // console.log(mySchema.safeParse(someValue))
  // console.log(userEmailSchema.safeParse(emailValue))

  // validate zod사용자 검증을 통해 사용자 검증
  users.forEach((user) => console.log(validateUser(user)))
  

  return (
    <section
      className={cn('flex flex-col items-center', 'font-noto px-6 pt-16')}
    >
      <header className={cn('mb-8 text-center')}>
        <span
          role="presentation"
          className={cn(
            'mb-6 inline-flex rounded-3xl p-4',
            'bg-blue-600 shadow-xl shadow-blue-100',
          )}
        >
          <LucideShieldCheck
            className="size-10 text-white"
            aria-hidden="true"
          />
        </span>
        <h1
          className={cn(
            'text-4xl font-extrabold tracking-tight',
            'text-slate-900',
          )}
        >
          Zod 검증 프로세스
        </h1>
        <p className={cn('mx-auto mt-4 max-w-2xl', 'text-lg text-slate-500')}>
          TypeScript-first 스키마 선언부터 런타임 유효성 검사까지,{' '}
          <br className="hidden md:block" />
          Zod의 핵심 기능을 단계별로 학습합니다.
        </p>
      </header>

      <div className="max-w-2xl">
        <a
          href="https://shorturl.at/R4QvH"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'scale-75 hover:scale-78',
            'group relative block rounded-4xl p-1',
            'transition-all duration-500',
            'bg-linear-to-br from-blue-500 via-blue-600 to-indigo-800',
            'hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]',
          )}
          aria-label="Zod 상세 가이드 문서 보기 (새 창 열기)"
        >
          <div
            className={cn(
              'flex flex-col items-center gap-6',
              'rounded-[28px] bg-white p-8',
              'md:flex-row',
            )}
          >
            <div
              role="presentation"
              className={cn(
                'flex size-16 shrink-0 items-center justify-center',
                'rounded-2xl bg-blue-50 text-blue-600',
                'transition-transform duration-500 group-hover:scale-110',
              )}
            >
              <BookOpen className="size-8" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div
                className={cn(
                  'mb-1 flex items-center justify-center gap-2',
                  'md:justify-start',
                )}
              >
                <span
                  lang="en"
                  className={cn(
                    'text-xs font-bold tracking-widest uppercase',
                    'text-blue-600',
                  )}
                >
                  Documentation
                </span>
                <ExternalLink className="size-3 text-slate-400" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-slate-900">
                Zod 핵심 요약 가이드
              </h2>
              <p className="leading-relaxed text-slate-500">
                개념 이해부터 실전 문법까지, <br className="md:hidden" />
                정리된 노션 문서에서 확인하세요.
              </p>
            </div>

            <div
              className={cn(
                'flex h-12 w-12 shrink-0 items-center justify-center',
                'rounded-full bg-slate-900 text-white',
                'transition-all duration-300',
                'group-hover:translate-x-1 group-hover:bg-blue-600',
              )}
            >
              <ArrowRight className="size-5" />
            </div>
          </div>
        </a>

        <p className={cn('mt-6 text-center text-sm text-slate-400')}>
          위 카드 링크를 클릭하면{' '}
          <strong
            lang="en"
            className={cn(
              'rounded-md border border-slate-200 bg-slate-50',
              'px-1.5 py-0.5 text-xs font-medium text-slate-600',
            )}
          >
            EUID Notion
          </strong>{' '}
          학습 페이지로 이동합니다.
        </p>
      </div>
    </section>
  )
}
