import { Immutability, RenderPipeline, VirtualDOM } from '@/learns'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <Immutability />
      <VirtualDOM />
      <RenderPipeline />
    </div>
  )
}
