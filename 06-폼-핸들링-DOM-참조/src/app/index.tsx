import { FileUpload, FormSubmission, MultiInputForm, RefStudy, SmartForm } from '@/components'
import S from './style.module.css'
import { SignUpForm } from '@/practices'
import TodosCrudWithImmer from '@/components/TodosCrudWithImmer/TodosCrudWithImmer'

export default function App() {
  return (
    <div className={S.container}>
      <TodosCrudWithImmer />
      <SignUpForm />
      {/* <FileUpload />
      <RefStudy />
      <FormSubmission />
      <MultiInputForm />
      <SmartForm /> */}
    </div>
  )
}
