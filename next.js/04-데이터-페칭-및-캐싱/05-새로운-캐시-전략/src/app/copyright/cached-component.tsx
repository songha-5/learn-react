async function getCachedTime() {
  'use cache'

  return new Date().getFullYear()
}

export async function Copyright() {
  const currentYear = await getCachedTime()
  return <>© {currentYear} EUID. Copyright all reserved.</>
}