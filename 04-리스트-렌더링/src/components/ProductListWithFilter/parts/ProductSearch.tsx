import type { ChangeEvent, Dispatch } from 'react'
import S from './ProductSearch.module.css'

interface Props {
  searchQuery?: string
  setSearchQuery: Dispatch<React.SetStateAction<string>>
   // ? > 필수로 바꿈
}
export default function ProductSearch({ searchQuery, setSearchQuery }: Props) {
  // 선택을 했을 시 setSearchQuery로 값 입력으로 바뀜
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  return (
    <search role="search" className={S.searchWrapper}>
      <label htmlFor="product-search" className={S.label}>
        상품 검색
      </label>
      <input
        id="product-search"
        type="search"
        className={S.input}
        placeholder="찾는 상품명을 입력하세요"
        value={searchQuery}
        onChange={handleSearch}
      />
    </search>
  )
}
