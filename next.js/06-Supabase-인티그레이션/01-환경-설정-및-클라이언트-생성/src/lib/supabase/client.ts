import { createBrowserClient } from "@supabase/ssr"
import { supabaseConfig } from "./config"

// 브라우저용 supabase client 객체 생성 내보내기
// 브라우저에 이미 쿠키 설정되어있어, 별도로 쿠키 설정이 없어도됨
export const craeteClient = () => { 
  return createBrowserClient(supabaseConfig.url, supabaseConfig.key)
}