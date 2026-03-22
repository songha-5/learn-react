import S from '../SignUpForm.module.css'

export default function ErrorMessage({ children }: React.PropsWithChildren) {
  if (!children) return null

  return (
    <span role="alert" className={S.errorText}>
      {children}
    </span>
  )
}
