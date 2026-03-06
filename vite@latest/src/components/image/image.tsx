import styles from './Image.module.css'

export default function Image() {
  return (
    <img
      className={styles.image}
      src="/react.svg"
      alt="리액트 로고"
    />
  )
}