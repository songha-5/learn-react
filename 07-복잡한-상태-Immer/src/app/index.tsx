import { DerivedState, ReferenceCheck, TodosCRUD } from '@/components'
import S from './style.module.css'
import { ShoppingCart } from '@/practices'

export default function App() {
  return (
    <div className={S.container}>
      <ShoppingCart />
      <DerivedState />
      <TodosCRUD />
      <ReferenceCheck />
    </div>
  )
}
