import S from './style.module.css'

type Props = React.PropsWithChildren<{
  isLoading: boolean
  error: Error | null
}>

// 조건부 UI 렌더링 (선언적 API)
export default function FetchStatus({ isLoading, error, children }: Props<T>) {

  if (isLoading) {
    return (
      <div className={S.statusContainer}>
        <div role="status" className={S.loading} aria-busy="true">
          로딩중입니다 ...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={S.statusContainer}>
        <div role='alert' className={S.errorBox}>
          {error.message}
        </div>
      </div>
    )
  }

  return <>{children}</>
}

