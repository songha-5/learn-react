import FruitList from '@/components/SimpleList'
import S from './style.module.css'
import StaffList from '@/components/StaffListWithFilter'
import { ProductList, ScheduleTable, ShiftManager, StaffListWithFilter, StatusList } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <StatusList />
      <StaffListWithFilter />
      <ProductList />
      <StaffList />
      <ScheduleTable />
      <ShiftManager />
      <FruitList />
    </div>
  )
}
