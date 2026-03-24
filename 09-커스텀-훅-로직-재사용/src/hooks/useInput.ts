import { useCallback, useState } from "react"

export function useInput(init = '') {
  // - 인풋 로직
  const [value, setValue] = useState(init)
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const reset = useCallback(() => setValue(init), [init])

  return { value, handleChange, reset}
}