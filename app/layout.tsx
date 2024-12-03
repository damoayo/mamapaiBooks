import { BookData } from "@/types";
import "./globals.css";
import Link from "next/link";

async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    return <footer className="py-[100px] text-gray-500">제작 @mamapai</footer>;
  }
  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer className="py-[100px] text-gray-500">
      <div>제작 @mamapai</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다</div>
    </footer>
  );
}

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
          <Footer />
        </div>
      </body>
    </html>
  );
}
