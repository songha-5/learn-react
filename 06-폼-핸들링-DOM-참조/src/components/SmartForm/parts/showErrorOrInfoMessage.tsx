import S from '../SmartForm.module.css'

interface Props {
  id: string
  requiredMessage: string
  error: string
}

export default function ShowErrorOrInfoMessage({id, error, requiredMessage}: Props) {
  const showError = error !== ''

  return (
    <p 
      role={showError ? "alert" : undefined} 
      id={id} 
      className={ showError? S.errorMessage : S.infoMessage }
    >
      {showError? error : requiredMessage}
    </p>
  )
}