export const getApiKey = (key: string) => {
  console.log('클라이언트에게 노출되면 큰일나는 시크릿 키')

  return process.env.SECRET_API_KEY
}
