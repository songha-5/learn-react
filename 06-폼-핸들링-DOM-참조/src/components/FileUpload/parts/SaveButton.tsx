import S from '../FileUpload.module.css'

interface Props {
  isUpload?: boolean
  isDisabled?: boolean
}

export default function SaveButton({ isUpload = false, isDisabled }: Props) {
  return (
    <button type="submit" className={S.submitButton} aria-disabled={isDisabled || isUpload}>
      {isUpload ? '저장중' : '저장'}
    </button>
  )
}
