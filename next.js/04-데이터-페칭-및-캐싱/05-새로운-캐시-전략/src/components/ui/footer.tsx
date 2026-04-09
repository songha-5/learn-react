// async function getCachedTime() {
//   return new Date().getFullYear()
// }

import { Copyright } from "@/app/Copyright";
import { Suspense } from "react";

export default async function Footer() {
  // const currentYear = await getCachedTime()

  return (
    <footer
      lang="en"
      className="border-t border-slate-100 py-8 text-center text-xs text-slate-400"
    >
      <Suspense fallback={<div>로딩중 ...</div>}>
        <Copyright />
      </Suspense>
      {/* © {currentYear} EUID. Copyright all reserved. */}
    </footer>
  )
}