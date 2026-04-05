import NavigationMenu from "./navigation-menu";

export default function Navigation() {
  return (
    <nav>
      <img src="" alt="로고" />
      <NavigationMenu name={"Home"} href={"/"}/>
      <NavigationMenu name={"about"} href={"about"} />
    </nav>
  )
}
