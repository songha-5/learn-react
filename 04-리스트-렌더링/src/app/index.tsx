import FruitList from '@/components/SimpleList'
import S from './style.module.css'
import StaffList from '@/components/StaffListWithFilter'
import { ScheduleTable, ShiftManager } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <ScheduleTable />
      <ShiftManager />
      <StaffList />
      <FruitList />
    </div>
  )
}
