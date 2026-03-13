import S from './style.module.css'
import { EffectBasic, EffectCleanup, EffectDependencies } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <EffectCleanup />
      <EffectDependencies />
      <EffectBasic />
    </div>
  )
}
