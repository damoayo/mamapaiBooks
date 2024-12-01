import React from "react";

const Page = ({ params }: { id: string }) => {
  console.log(params);

  return <div>book/{params.id}</div>;
};

export default Page;
