import { createServerClient } from '@supabase/ssr'
import 'server-only'
import { supabaseConfig } from './config'
import { cookies } from 'next/headers'

// 서버용 supabase client 객체 생성 함수
export const createClient = async (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  return createServerClient(supabaseConfig.url, supabaseConfig.key, {
    cookies: {
      getAll: () => {
        return cookieStore.getAll()
      },
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        } catch {
          // 서버 컴포넌트 내부에서 직접 쿠키 정보를 수정할 수 없음
          // 에러를 무시하도록 catch 내부를 비워둠
        }
      }
    }
  })
}