import S from './style.module.css'

export default function Counter() {
  return (
    <section className={S.container}>
      <h2 className={S.title}>상태 관리 기초</h2>

      {/* 일반 로컬 변수 영역 */}
      <div className={S.displayGroup}>
        <div role='group' className={S.card}>
          <span className={S.label}>일반 로컬 변수</span>
          <strong className={S.value}>0</strong>
        </div>

        {/* State 변수 영역 */}
        <div className={`${S.card} ${S.highlight}`}>
          <span className={S.label}>리액트 상태 변수</span>
          <strong className={S.value}>0</strong>
        </div>
      </div>

      <div className={S.buttonGroup}>
        <button type='button' className={S.button}>일반 로컬 변수 증가</button>
        <button type='button' className={`${S.button} ${S.primary}`}>리액트 상태 변수 증가</button>
      </div>
    </section>    
  )
}