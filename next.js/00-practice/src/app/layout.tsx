import "@/styles/globals.css";
import Navigation from "./components/navigation";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko-KR">
      <header>
        <Navigation />
      </header>
      <body className="overflow-y-scroll">{children}</body>
    </html>
  );
}
