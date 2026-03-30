import { BrowserRouter, Route, Routes } from 'react-router-dom'
// 네비게이션 상수
import { NAVIGATION_PATH } from './configs/navigationPaths'

// 컨텍스트 프로바이더
import { AuthProvider, MoviesProvider } from '@/contexts'
// 공용 레이아웃
import CommonLayout from './layouts/CommonLayout'

// 페이지
import Home from './pages/Home'
import Login from './pages/Login'
import MovieDetail from './pages/MovieDetail'
import MyPage from './pages/MyPage'
import NotFound from './pages/NotFound'

// 페이지 전환 시, 스크롤 위치를 페이지 상단으로 이동
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            {/* 레이아웃 라우트 */}
            <Route path={NAVIGATION_PATH.base} element={<CommonLayout />}>
              {/* 중첩된, 인덱스 라우트 */}
              <Route index element={<Home />} />
              {/* 경로(path)를 가지는 라우트 */}
              <Route path={NAVIGATION_PATH.login} element={<Login />} />
              {/* 다이내믹 세그먼트 라우트 */}
              <Route path={`${NAVIGATION_PATH.movies}/:movieId`} element={<MovieDetail />} />
              {/* 프로텍티드 라우트 */}
              <Route path={NAVIGATION_PATH.mypage} element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              }/>
              {/* 와일드 카드 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </MoviesProvider>
    </AuthProvider>
  )
}