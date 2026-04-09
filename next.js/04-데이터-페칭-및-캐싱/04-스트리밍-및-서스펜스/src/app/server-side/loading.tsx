import { Spinner } from "@/components/ui/spinner";
import { PokemonSkeleton } from "./_resources/pokemon-skeleton";

export default function Loading() {
  return (
   <PokemonSkeleton />
  // <Spinner>포켓몬 데이터를 로딩 중입니다...  </Spinner>
 )
}