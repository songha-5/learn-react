import { Pokemon } from '@/types/pokemon'
import { PokemonList } from '../pokemon-list'

interface Props {
  pokemonsProps: Promise<Pokemon[]>
}

export async function PokemonDisplayServer({ pokemonsProps }: Props) {
  // await 하여 데이터 페칭
  const pokemon = await pokemonsProps
  
  return <PokemonList data={pokemon} />
}
