import { CompositionRender, DeepRender, MemoizationCallback, MemoizationRender } from '@/learns'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <MemoizationCallback />
    </div>
  )
}
