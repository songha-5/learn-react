import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import CommonLayout from "./layouts/CommonLayout";
import { MoviesProvider } from "./contexts/movies/provider";

export default function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        {/* 라우츠(routes) 스위치 => 라우트 path, element*/}
        <Routes>
          {/* 
            '/'
            '/login'
            '/movie:movieId'
            '/my'
            '*' <NotFound />
          */}
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Home />}/>
            {/* 프로텍티드 라우트 */}
            <Route path="/my" element={<MyPage />}/>
              <Route path="/movies/:movieId" element={<MovieDetail />}/>
            <Route path="/login" element={<Login />}/>
          </Route>


          <Route path="*" element={<NotFound />}/>
          {/* <Home /> */}
          {/* <Login /> */}
          {/* <MovieDetail /> */}
          {/* <NotFound /> */}
          {/* <MyPage /> */}
        </Routes>
      </BrowserRouter>
    </MoviesProvider>

  )
}
