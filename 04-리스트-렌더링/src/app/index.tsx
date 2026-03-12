import FruitList from '@/components/SimpleList'
import S from './style.module.css'
import StaffList from '@/components/StaffListWithFilter'
import { ProductList, ScheduleTable, ShiftManager } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <StaffList />
      <ProductList />
      <ScheduleTable />
      <ShiftManager />
      <FruitList />
    </div>
  )
}
