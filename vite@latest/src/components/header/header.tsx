import style from './header.module.css'
import Button from '../button/button'

export default function Header (){ 
  return(
    <header className={style.header}>
      <h1>
        <dfn><abbr>JSX</abbr></dfn> 기초 배우기
      </h1>
      <Button />
    </header>
  )
}