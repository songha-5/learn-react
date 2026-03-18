import { FormSubmission, MultiInputForm, RefStudy, SmartForm } from '@/components'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <RefStudy />
      <FormSubmission />
      <MultiInputForm />
      <SmartForm />
    </div>
  )
}
