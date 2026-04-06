import { LucideTrophy } from 'lucide-react'

import LinkCard from '@/components/ui/link-card'
import PageSectionTitle from '@/components/ui/page-section-title'
import { books } from './_resources/data'
import Link from 'next/link'
import { cn } from '@/utils'

export default async function BooksPage() {
  return (
      <nav
        aria-label="도서 목록"
        className="flex flex-col gap-2 rounded-xl border p-5"
      >
      {books.map((book) => {
        return (
          // Soft Navigation
          <Link
            key={book.isbn}
            href={`/books/${book.isbn}/${book.title}`}
            className={cn(
              'px-2 pt-1 pb-1.5',
              'text-foreground/80 hover:text-foreground font-medium',
            )}
          >
            {book.title}
          </Link>
        )
      })}
    </nav>
  )
}
