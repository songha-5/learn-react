import { useId } from 'react'
import S from '../SignUpForm.module.css'

interface Props extends React.ComponentPropsWithRef<'input'> {
  label: string
  errorMessage?: React.ReactElement | string
}

export default function InputField({
  ref,
  label,
  type = 'text',
  className,
  errorMessage,
  ...restProps
}: Props) {
  const inputId = useId()

  return (
    <div className={S.field}>
      <label htmlFor={inputId} className={S.label}>
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        id={inputId}
        className={`${S.input} ${className}`}
        {...restProps}
      />
      {errorMessage}
    </div>
  )
}
