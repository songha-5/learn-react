'use client'

import { Pokemon } from '@/types/pokemon'
import { PokemonList } from '../pokemon-list'
import { use } from 'react'

interface Props {
  pokemonsProps: Promise<Pokemon[]>
}

export function PokemonDisplayClient({ pokemonsProps }: Props) {
  // React.use 함수를 사용해 데이터 페칭 후 렌더링
  const pokemons = use(pokemonsProps)

  return <PokemonList data={pokemons} />
}
