import { Immutability, ImmutabilityCRUD, Reconciliation, RenderPipeline, VirtualDOM } from '@/learns'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <Reconciliation />
      <ImmutabilityCRUD />
      <Immutability />
      <VirtualDOM />
      <RenderPipeline />
    </div>
  )
}
