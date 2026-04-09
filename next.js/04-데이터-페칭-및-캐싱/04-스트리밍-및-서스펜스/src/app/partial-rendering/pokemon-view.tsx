'use client'

import { PokemonSkeleton } from "./_resources/pokemon-skeleton"
import { PrintError } from "./_resources/print-error"
import { PokemonList } from "./_resources/pokemon-list"
import { usePokemons } from "./_resources/use-pokemons"

export function PokemonView() {
  const { isLoading, pokemons, error } = usePokemons()

  // 로딩 UI
  if (isLoading) {
    return <PokemonSkeleton count={6} />
  }

  // 에러 핸들링 UI
  if (!isLoading && error) {
    return <PrintError message={error.message} />
  }

  // 포켓몬 리스트 UI
  return (
    <div className="min-h-100">
      <PokemonList data={pokemons ?? []} />
    </div>
  )
}