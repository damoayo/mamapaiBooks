import { notFound } from "next/navigation";

// false로 변경하면 1,2,3이외에는 모두 404 에러가 발생합니다.
export const dynamicParams = true; 

// getStaticPaths 함수의 앱라우트버전
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({bookId}: {bookId: string}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
      return <div>책 정보를 불러오는 중 오류가 발생했습니다.</div>;
    }
  }
  const book = await response.json();

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className="relative flex justify-center p-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <img src={coverImgUrl} className="z-10 max-h-[350px] h-full" />
      </div>
      <div className="text-lg font-bold">{title}</div>
      <div className="text-gray-500">{subTitle}</div>
      <div className="text-gray-500">
        {author} | {publisher}
      </div>
      <div className="bg-gray-100 p-3.5 leading-relaxed whitespace-pre-line rounded-md">
        {description}
      </div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const bookId = Array.isArray(params.id) ? params.id[0] : params.id;
  return <BookDetail bookId={bookId} />;
}
