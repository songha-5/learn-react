import { useState } from 'react'
import GrandFather from './parts/GrandFather'
import S from './style.module.css'
import { FamilyContext, type FamilyContextValue } from '@/_/contexts/familyContext/context'


export default function ContextBasic() {
  const [name, setName] = useState('박하루')
  const [email, setEmail] = useState('haru@child.family')
  const [checked, setChecked] = useState(false)

  const familyContextValue: FamilyContextValue = {
    name, email, checked,
    setName, setEmail, setChecked
  }

  return (
    <section className={`${S.box} ${S.container}`}>
      <h1 className={S.title}>깊숙히 컴포넌트 Props 전달</h1>
      {/* 컨텍스트 공급자(Context.Provider) : 데이터(값) 공급 */}
      <FamilyContext.Provider value={familyContextValue}>
        <GrandFather />
      </FamilyContext.Provider>
    </section>
  )
}