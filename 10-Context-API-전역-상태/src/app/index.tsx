import { ContextAdvanced } from '@/_/learns'
import { AuthProvider, FamilyProvider } from '@/contexts'
import S from './style.module.css'
import { ThemeProvider } from '@/_/contexts/themeContext'

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FamilyProvider>
          <div className={S.container}>
            <ContextAdvanced />
          </div>
        </FamilyProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
