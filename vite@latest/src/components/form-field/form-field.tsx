import style from './form-field.module.css'

export default function FormField() {
  return (
    <>
      <label className={style.field} htmlFor='username'>이름</label>
      <input id='username' type='text' className={style.input} placeholder='이름을 입력하세요.'/>
    </>
  )
}