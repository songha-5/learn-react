import { useNavigate, useParams } from 'react-router-dom'
import S from './style.module.css'
import { useMovies } from '@/contexts'
import { useEffect } from 'react'
import AppTitle from '@/components/AppTitle'


export default function MovieDetail() {

  const navigate = useNavigate()
  const handleGoBack = () => navigate(-1)

  // URL주소에서 영화 ID 정보 가져오기
  const { movieId } = useParams()
  // 공급된 영화 정보 가져오기
  const { movies } = useMovies()
  // 영화 정보 찾기
  const movie = movies.find((movie) => movie.id === movieId)

  //만약 영화가 없다면? 
  // notFound로
  useEffect(() => {
    if (!movie) navigate('/not-found-movie')
  }, [movie, navigate])

  return (
    <div className={S.container}>
      <AppTitle subTitle={movie?.title} />

      <button type="button" aria-label="뒤로 가기" onClick={handleGoBack}>
        ← Back
      </button>

      <h1>영화 정보</h1>
      {!movie ? (
        <p>영화 정보 없음</p>
      ) : (
        <>
          <ul>
            <li>ID: {movie?.id}</li>
            <li>
              {movie?.title} ({movie?.year})
            </li>
          </ul>
          <p>상세 정보를 불러오는 중...</p>
        </>
      )}
    </div>
  )
}
