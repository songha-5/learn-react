import { LucideDatabase } from "lucide-react";

import { prisma } from '@/lib/prisma'

export default async function OrmAndDBPage() {
  const allUsers = await prisma.user.findMany()

 return (
  <section className="m-6 space-y-6 md:mx-0">
      <header className="border-b border-b-slate-200 pb-4">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-800">
          <span className="h-8 w-1 rounded-full bg-blue-500" />
          <abbr
            className="cursor-help no-underline"
            title="Object-Relational Mapping"
          >
            ORM
          </abbr>{' '}
          데이터베이스
        </h1>
        <p className="mt-2 flex items-center gap-3 text-sm text-slate-500">
          <LucideDatabase className="size-4" />
          ORM에서 데이터를 직접 조회
          <br className="md:hidden" />
    
        </p>
     </header>
     <p>
        {JSON.stringify(allUsers, null, 2)}
     </p>
    </section>
 )
}