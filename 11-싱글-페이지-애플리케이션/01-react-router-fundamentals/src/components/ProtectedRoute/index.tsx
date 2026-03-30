import { NAVIGATION_PATH } from "@/configs/navigationPaths"
import { useAuth } from "@/contexts"
import { Navigate, useNavigate } from "react-router-dom"


export default function ProtectedRoute({ children }: React.PropsWithChildren) {
  const { user, initalizing } = useAuth()
  const navigate = useNavigate()

  console.log({ user, initalizing })

  if (initalizing) {
    return <div>인증 정보 확인 중... ⏳</div>
  }

  if (!user) {
    return <Navigate to={NAVIGATION_PATH.login} replace />
  }
  // X화면이 전화면이 보이고 이동하게 됨
  // useEffect(() => {
  //   if (!user) {
  //     navigate(NAVIGATION_PATH.login)
  //   }
  // }, [user, navigate])


  // return <p role="status">인증 상태 확인 중...</p>
  return <>{children}</>
}
