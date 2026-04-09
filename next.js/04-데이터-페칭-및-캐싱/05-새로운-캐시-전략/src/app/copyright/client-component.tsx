'use client'

export function CopyrightClient() {
  const currentYear = new Date().getFullYear()
  return <>© {currentYear} EUID. Copyright all reserved.</>
}