import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import { BookData } from "@/types";

async function Allbooks() {
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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next :{revalidate:3} }
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
        <RecoBooks />
      </section>
      <section>
        <h3 className="mb-0">등록된 모든 도서</h3>
        <Allbooks />
      </section>
    </div>
  );
}
