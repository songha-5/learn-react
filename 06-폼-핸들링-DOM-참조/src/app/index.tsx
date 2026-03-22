import { FileUpload, FormSubmission, MultiInputForm, RefStudy, SmartForm } from '@/components'
import S from './style.module.css'
import { SignUpForm } from '@/practices'

export default function App() {
  return (
    <div className={S.container}>
      <SignUpForm />
      {/* <FileUpload />
      <RefStudy />
      <FormSubmission />
      <MultiInputForm />
      <SmartForm /> */}
    </div>
  )
}
