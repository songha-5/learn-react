import { ContextAdvanced, ContextBasic, PropsDrilling } from '@/_/learns'
import S from './style.module.css'
import { FamilyProvider } from '@/_/contexts/familyContext/provider'

export default function App() {
  return (
    <FamilyProvider>
      <div className={S.container}>
        <ContextAdvanced />
        {/* <ContextBasic /> */}
        {/* <PropsDrilling /> */}
        {/* <ContextAdvanced /> */}
      </div>
    </FamilyProvider>
  )
}
