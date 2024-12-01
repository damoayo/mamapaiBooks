import BookItem from "@/components/book-item";
import books from "@/mock/books.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-[20px]">
      <section>
        <h3 className="mb-0">지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3 className="mb-0">등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
