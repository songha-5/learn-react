import VercelLogo from "@/components/ui/vercel-logo";

export default function Page() {
 
  return (
    <header className="flex flex-col justify-center items-center min-h-screen bg-slate-50">
      <h1 className="text-4xl text-slate-950 text-forground font-extralight">안녕 Next.js</h1>
      <VercelLogo  className="size-8 text-rose-500 dark:text-yellow-400"/>
      {/* <img src="/vercel.svg" alt="vercel 로고" className="size-8 mt-2"/> */}
    </header>
  );
}
