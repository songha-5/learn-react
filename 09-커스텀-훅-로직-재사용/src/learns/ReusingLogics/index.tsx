import { useCallback, useRef, useState } from 'react'
import S from './style.module.css'
import { useToggle, useInput } from '@/hooks'


export default function ReusingLogics() {
  
  // 중복 로직 1: Toggle (상세 정보용)
  // 토글 로직 재사용 적용
  const [isVisible, setIsVisible] = useToggle(true)

  // 중복 로직 2: Toggle (다크 모드용)
  // 토글 로직 재사용 적용
  const [isDarkMode, setIsDarkMode] = useToggle(false)

  // 중복 로직 3: Input (사용자 이름용)
  // 인풋 로직 재사용 적용
  const { props: nameProps, methods: {reset: nameReset} } = useInput('')  
  
  // 인풋 로직 재사용 적용
  // 중복 로직 4: Input (이메일용)
  const { 
    props: emailProps, 
    methods: {
      reset: emailReset, 
      focus: emailFocus,
      select: emailSelect
    }
  } = useInput('')
  
  // 방법 2 순서 고정 방법
  // const [nameInputProps, nameInputMethods] = useInput('')
  // const [emailInputProps, emailInputMethods] = useInput('')


  const handleResetAll = () => {
    nameReset()
    emailReset()
  }

  return (
    <section className={`${S.container} ${isDarkMode ? S.dark : ''}`}>
      <header className={S.header}>
        <h2 className={S.title}>로직(Logic) 중복</h2>
        <p className={S.description}>
          동일한 형태의 useState와 핸들러가 반복되고 있습니다.
        </p>
      </header>

      <div className={S.card}>
        {/* 입력 그룹 */}
        <div className={S.inputGroup}>
          <label htmlFor="user-name" className={S.label}>
            사용자 이름
          </label>
          <input
            id="user-name"
            type="text"
            {...nameProps}
            placeholder="이름을 입력하세요"
            className={S.input}
          />
        </div>

        <div className={S.inputGroup}>
          <label htmlFor="user-email" className={S.label}>
            이메일 주소
          </label>
          <input
            id="user-email"
            type="email"
            {...emailProps}
            placeholder="이메일을 입력하세요"
            className={S.input}
          />
        </div>

        <div className={S.resultBox}>
          <p className={S.resultText}>
            입력된 이름: <span>{nameProps.value ?? '없음'}</span>
          </p>
          <p className={S.resultText}>
            입력된 이메일: <span>{emailProps.value ?? '없음'}</span>
          </p>
        </div>

        {/* 버튼 그룹 */}
        <div role="group" className={S.actionGroup}>
          <button
            type="button"
            onClick={setIsVisible}
            className={S.buttonOutline}
          >
            상세 정보 {isVisible ? '숨기기' : '보기'}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsDarkMode()
              emailFocus()
            }}
            className={S.buttonOutline}
          >
            {isDarkMode ? '라이트 모드' : '다크 모드'}
          </button>
          <button
            type="button"
            onClick={handleResetAll}
            className={S.buttonGhost}
          >
            전체 초기화
          </button>
        </div>

        {isVisible && (
          <div aria-live="polite" className={S.infoBox}>
            <p>
              커스텀 훅(Custom Hook)을 사용하면 <code>useState</code> 훅과
              핸들러를 매번 만들 필요가 없습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
