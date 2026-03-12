import { Immutability, ImmutabilityCRUD, Reconciliation, RenderPipeline, VirtualDOM } from '@/learns'
import S from './style.module.css'
import { Debugging, StateInitialization } from '@/practices'

export default function App() {
  return (
    <div className={S.container}>
      <Debugging />
      <StateInitialization />
      <Reconciliation />
      <ImmutabilityCRUD />
      <Immutability />
      <VirtualDOM />
      <RenderPipeline />
    </div>
  )
}
