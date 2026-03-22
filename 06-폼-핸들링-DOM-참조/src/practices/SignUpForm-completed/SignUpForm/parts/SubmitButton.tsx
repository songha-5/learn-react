import S from '../SignUpForm.module.css'

type Props = React.PropsWithChildren<{
  isDisabled: boolean
}>

export default function SubmitButton({ children, isDisabled }: Props) {
  return (
    <button type="submit" className={S.submitBtn} aria-disabled={isDisabled}>
      {children}
    </button>
  )
}
