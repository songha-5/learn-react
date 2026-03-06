import style from './footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <small>
        COPYRIGHT RESERVE &copy; <abbr>카피라이터!</abbr>
      </small>
    </footer>
  )
}