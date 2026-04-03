import SearchForm from './component/search-form'

export default function BooksLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto mt-6 max-w-5xl">
      <search>
        <label htmlFor="search" className="sr-only">
          도서 검색
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="도서 제목 및 저자로 검색해보세요"
        />
      </search>
      <SearchForm />
      {children}
    </div>
  )
}
