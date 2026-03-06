import FormField from "../form-field/form-field";
import Image from "../image/image";
import style from './main.module.css'

export default function Main() {
  return (
    <>
      <main className={style.main}>
        {/* image */}
        <Image />

        <h2><abbr>HTML</abbr>이 아닙니다</h2>

        {/* formField */}
        <FormField />
      </main>
    </>
  )
}