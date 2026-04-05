import Link from "next/link"

interface Navi {
  name: string
  href: string
}

export default function NavigationMenu({ name, href }: Navi) {
  return (
    <li>
      <Link href={href}>{name}</Link>
    </li>
  )
}
