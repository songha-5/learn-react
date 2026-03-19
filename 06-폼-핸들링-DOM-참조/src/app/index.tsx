import { FileUpload, FormSubmission, MultiInputForm, RefStudy, SmartForm } from '@/components'
import S from './style.module.css'

export default function App() {
  return (
    <div className={S.container}>
      <FileUpload />
      <RefStudy />
      <FormSubmission />
      <MultiInputForm />
      <SmartForm />
    </div>
  )
}
