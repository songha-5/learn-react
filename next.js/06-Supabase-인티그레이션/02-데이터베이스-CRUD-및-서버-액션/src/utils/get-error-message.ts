import { isErrorObject } from "./isErrorObject"

export const getErrorMessage = (error: unknown) => {
  return isErrorObject(error) ? error.message : String(error)
}