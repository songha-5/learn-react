// 고차함수를 이용해 코드정리
export function createValidator(requiredMessage: string, customValidator: (value: string) => string) {

  return function validate(value:string, isTouched: boolean) {
    if (!isTouched) return ['', false] as const // tuple [string, boolean]
    if (!value) return [requiredMessage, true] as const // (as const 상수, 문자 불리언 순으로 나감) // tuple [string, boolean]
    const error = customValidator(value)
    const showError = error !== '' // true, false
    return [error, showError] as const
  }
}

