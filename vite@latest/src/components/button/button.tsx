import style from './button.module.css'

export default function Button() {
  return(
    <>
      {/* 클릭 이벤트 리스너 추가 onClick = {함수} */}
      {/* button은 button으로! div X */}
      <div onClick={() => alert('no div')}>no div</div>
      <button className={style.button} onClick={() => alert('yes button')}>사용자 고려버튼</button>
    </>
  )
}