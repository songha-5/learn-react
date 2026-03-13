import S from './style.module.css'
import { EffectBasic, EffectDependencies } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <EffectDependencies />
      <EffectBasic />
    </div>
  )
}
