import BatchCounter from './BatchCounter'
import S from './style.module.css'

function EventHandling() {
  return (
    <div className={S.container}>
      <h2 className='sr-only'>상태 업데이트</h2>
      <BatchCounter />
    </div>
  )
}

export default EventHandling
