import { ReferenceCheck, TodosCRUD } from '@/components'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <TodosCRUD />
      <ReferenceCheck />
    </div>
  )
}
