import { TodoSearch } from '@/practices'
import S from './style.module.css'
import { DataFetching, EffectBasic, EffectCleanup, EffectDependencies, RaceCondition } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <TodoSearch />
      <RaceCondition />
      <DataFetching />
      <EffectCleanup />
      <EffectDependencies />
      <EffectBasic />
    </div>
  )
}
