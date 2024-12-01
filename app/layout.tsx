import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-sm min-h-screen mx-auto bg-white px-3.5 shadow-lg shadow-[#64646f33]">
          <header className="h-[60px] font-bold text-[18px] leading-[60px]">
            <Link href={"/"}>📚 MAMAPAI BOOKS</Link>
          </header>
          <main className="pt-[10px]">{children}</main>
          <footer className="py-[100px] text-gray-500">제작 @mamapai</footer>
        </div>
      </body>
    </html>
  );
}
