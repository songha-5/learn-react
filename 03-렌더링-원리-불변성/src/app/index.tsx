import { RenderPipeline, VirtualDOM } from '@/learns'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <VirtualDOM />
      <RenderPipeline />
    </div>
  )
}
