import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { getArticleBySlug } from '@/src/lib/blog/services';
import { portableTextComponents } from '@/src/components/PortableTextComponents';

type Params = Promise<{ uid: string }>;

export default async function Article({ params }: { params: Params }) {
  const { uid } = await params;
  const article = await getArticleBySlug(uid);

  if (!article) {
    notFound();
  }

  const content = article?.data.content || article?.data.paragraphes || [];

  return (
    <div className="w-2/3 mx-auto flex justify-center items-center flex-col space-y-10 mt-4 mb-4">
      <div className="text-3xl uppercase font-bold opacity-50">
        {article?.data.title}
      </div>
      <div className="flex justify-center">
        <Image
          className="shadow-xl mb-10"
          src={article?.data.featureImageUrl.url}
          alt={article?.data.featureImageUrl.alt}
          width="1000"
          height="1000"
        />
      </div>
      <div className="text-lg opacity-75">
        <PortableText value={content} components={portableTextComponents} />
      </div>
      <Link href="/blog" className="btn-custom inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Retour &nbsp; 👈
      </Link>
    </div>
  );
}
