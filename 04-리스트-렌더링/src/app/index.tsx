import FruitList from '@/components/SimpleList'
import S from './style.module.css'
import StaffList from '@/components/StaffListWithFilter'

export default function App() {
  return (
    <div className={S.container}>
      <StaffList />
      <FruitList />
    </div>
  )
}
