import { Pokemon } from "@/types/pokemon"
import { cache } from "react"


export const getCachedPokemons = cache(async (): Promise<Pokemon[]> => {
  // Next.js 15부터 fetch의 기본값은 'no-store'이므로, 명시하지 않아도 동적으로 작동합니다.
  const response = await fetch(`${process.env.MOCK_API_URL}/pokemon`) // 매번 요청할때마다 데이터 패칭
  if (!response.ok) throw new Error('데이터를 불러오는데 실패했습니다.')
  const pokemons = (await response.json()) as Pokemon[]
  
  return pokemons
})