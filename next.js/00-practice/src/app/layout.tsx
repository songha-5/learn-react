import "@/styles/globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko-KR">
      <body className="overflow-y-scroll">{children}</body>
    </html>
  );
}
