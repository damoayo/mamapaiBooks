
import BookItem from "@/components/book-item";
import { BookData } from "@/types";


export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  }
}) {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`);
  if (!response.ok) {
    throw new Error("서버 오류가 발생했습니다.");
  }
  const books : BookData[] = await response.json();
  
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
