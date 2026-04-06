'use client'

import Link, { LinkProps } from "next/link"
import { useState } from "react"

export default function HoverPrefetchLink(props: LinkProps) {
  // 사용자가 링크 위로 마우스를 올렸나 상태 선언
  const [hovered, setHoverd] = useState(false)

  // prefetch 활성 상태로 전환 기능
  const handleActivePrefetch = () => {
    setHoverd(true)
  }

  return (
    <Link {...props} onPointerEnter={handleActivePrefetch} prefetch={hovered} />
 )
}