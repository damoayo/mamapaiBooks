import BookItem from "@/components/book-item";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
// import books from "@/mock/books.json";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
// 특정 페이지의 유형을 Static, Dynamic페이지로 설정합니다.
// 1.auto: 페이지의 유형을 자동으로 설정합니다. (기본값)
// 2.force-dynamic: 페이지의 유형을 강제로 Dynamic으로 설정합니다.
// 3.force-static: 페이지의 유형을 강제로 Static으로 설정합니다.
// 4.error: 페이지를 강제로 Static 페이지 설정(설정하면 안되는이유=>빌드오류)

async function Allbooks() {
  await delay(2000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    throw new Error("서버 오류가 발생했습니다.");
  }
  const allBooks: BookData[] = await response.json();

  return allBooks.map((book) => <BookItem key={book.id} {...book} />);
}

async function RecoBooks() {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  if (!response.ok) {
    throw new Error("서버 오류가 발생했습니다.");
  }
  const recoBooks: BookData[] = await response.json();

  return recoBooks.map((book) => <BookItem key={book.id} {...book} />);
}
export default function Home() {
  return (
    <div className="flex flex-col gap-[20px]">
      <section>
        <h3 className="mb-0">지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3 className="mb-0">등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={10} />}>
          <Allbooks />
        </Suspense>
      </section>
    </div>
  );
}
