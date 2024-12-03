


export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`);
  if (!response.ok) {
    throw new Error("서버 오류가 발생했습니다.");
  }
  const book = await response.json();


  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

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
