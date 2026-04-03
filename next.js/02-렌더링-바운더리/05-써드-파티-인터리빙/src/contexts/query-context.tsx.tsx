'use client'

import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from '@/functions/query-client'

/**
 * @function makeQueryClient
 * @description 새로운 QueryClient 인스턴스를 생성하는 팩토리 함수입니다.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        /**
         * [staleTime vs gcTime]
         *
         * staleTime (신선도 유지 기간)
         * - 설정된 시간(60초) 동안은 데이터를 'Fresh'하다고 간주합니다.
         * - 이 기간 내에는 컴포넌트가 다시 마운트되어도 추가 네트워크 요청을 하지 않습니다.
         * - SSR로 가져온 데이터를 클라이언트가 받자마자 다시 fetching 하는 것을 방지하는 핵심 설정입니다.
         *
         * gcTime (메모리 보존 기간)
         * - 데이터가 사용되지 않는 상태(Inactive)가 되었을 때, 메모리(캐시)에 유지하는 시간입니다.
         * - 기본값은 5분이며, staleTime보다 길게 설정하는 것이 권장됩니다.
         * - 이 시간이 지나면 데이터는 가비지 컬렉터에 의해 완전히 삭제됩니다.
         */
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
      },
    },
  })
}

/**
 * @component QueryProvider
 * @description 앱 전체에 React Query 상태를 주입하는 프로바이더입니다.
 * 클라이언트 컴포넌트이지만, Next.js 특성상 서버에서도 초기 렌더링(SSR)이 수행됩니다.
 */
export function QueryProvider({
  children,
  hideDevtools = false,
}: React.PropsWithChildren<{ hideDevtools?: boolean }>) {
  /**
   * [지연 초기화 (Lazy Initialization)]
   * useState(() => getQueryClient()) 형태로 전달하여
   * 리액트 렌더링 생명주기 내에서 초기 렌더링 시 딱 한 번만 실행되도록 보장합니다.
   * 이는 불필요한 인스턴스 생성을 방지하고 클라이언트 측 싱글톤을 안전하게 바인딩합니다.
   */
  const [queryClient] = useState(() => getQueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {hideDevtools || <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
  )
}
