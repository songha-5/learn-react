import S from './style.module.css'
import { DataFetching, EffectBasic, EffectCleanup, EffectDependencies } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <DataFetching />
      <EffectCleanup />
      <EffectDependencies />
      <EffectBasic />
    </div>
  )
}
