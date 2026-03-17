import { useId } from 'react'
import S from '../SmartForm.module.css'

const MAX_NICKNAME = 10
const PROFANITY_PATTERN = '바보 멍청이 또라이'.split(' ').join('|')
const PROFANITY_SUBSTITUTION = '???'

interface Props {
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export default function NicknameField({value, onChange}: Props) {
  const fieldId = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const nativeEvent = e.nativeEvent as InputEvent 
    // TODO 1: [글자 수 제한] 
    // 입력값이 MAX_NICKNAME을 넘으면 잘라내고 리턴하세요.
    if(value.length > MAX_NICKNAME) {
      const trancatedValue = value.slice(0, MAX_NICKNAME)
      onChange(trancatedValue)  
      return
    }

    // TODO 2: [조합 중(IME) 처리]
    // 한글이 조립 중(isComposing)일 때는 필터링을 건너뛰고 상태만 업데이트하세요.
    if(nativeEvent.isComposing) {
      //비속어 필터링 기능은 한글 조립중에 작동될 경우 이상하게 작동될 것이므로 조립중에는 상태 업데이트만 수행
      onChange(value)
      return
    }

    // TODO 3: [영문/숫자/조합 완료 시 필터링]
    // replace와 정규식을 사용해 비속어를 '??'로 치환하세요.
    onChange(e.currentTarget.value)
  }

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    console.log('한글 조합 완료')
    // TODO 4: [최종 확정 필터링]
    // 한글 조합이 완전히 끝나는 시점에 다시 한번 비속어를 걸러주세요.
    compositionIME(e.currentTarget.value)
  }

  const compositionIME = (value: string) => {
    const filteredValue = value.replace(new RegExp(PROFANITY_PATTERN, 'i'), PROFANITY_SUBSTITUTION)
    onChange(filteredValue)
  }


  return (
    <div className={S.field}>
      <div className={S.labelWrapper}>
        <label htmlFor={fieldId} className={S.label}>닉네임</label>
        <span className={S.counter}>{value.length}/{MAX_NICKNAME}</span>
      </div>
      <input
        id={fieldId}
        className={S.input}
        placeholder="닉네임을 입력하세요"
        value={value}
        onChange={handleChange}
        onCompositionEnd={handleCompositionEnd}
      />
    </div>
  )
}
