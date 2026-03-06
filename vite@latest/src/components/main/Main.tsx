import FormField from "../form-field/Form-field";
import Image from "../image/Image";
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