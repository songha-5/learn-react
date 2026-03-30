import { useState } from "react";
import { MoviesContext } from "./context";
import { DUMMY_MOVIES, type Movie } from "@/db/movies";

export function MoviesProvider(props: React.PropsWithChildren) {
  // 영화목록 상태 선언
  const [movies] = useState<Movie[]>(DUMMY_MOVIES)

  const moviesContextValue = { movies }

  return <MoviesContext value={moviesContextValue} {...props} />
}