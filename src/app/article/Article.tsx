'use client';
import Image from 'next/image';
import Link from 'next/link';

export const Article = ({ article }: any) => {
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
        {article.data.title}
      </h1>
      <div className="flex justify-center">
        <Image
          className="shadow-xl mb-10"
          src={article.data.featureImageUrl.url}
          alt=""
          width="1000"
          height="1000"
        />
      </div>
      <h1 className="text-lg opacity-75">{article.data.paragraphes}</h1>
      <div className="text-center mb-20">
        <Link
          href="/blog"
          className="inline-flex text-white bg-[#DB2323] border-0 py-2 px-6 focus:outline-none hover:bg-[#201C44] rounded text-lg"
        >
          Retour &nbsp; 👈
        </Link>
      </div>
    </div>
  );
};
