import { MemoizationCallback, MemoizationValue } from '@/learns'
import S from './style.module.css'
// import { SmartHomePanel } from '@/practices'
import { SmartHomePanel2 } from '@/practices'
import { DeviceItem } from '@/practices/PerformanceCheck/parts/DeviceItem'

export default function App() {
  return (
    <div className={S.container}>
      <SmartHomePanel2 />
    </div>
  )
}
