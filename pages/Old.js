import Prismic from 'prismic-javascript';
import {RichText} from 'prismic-reactjs';
import Link from 'next/link';
import Head from 'next/head';
import { Client } from '../prismic-configuration';
import React from 'react';

export default function Home(articles) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
	  {articles.result.map( (article, index) => {
<h1>
	{RichText.render (article.data.title)}
</h1>
	  })}
    </div>
  );
}

export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at('document.type', 'Articles')
  );
  console.log(articles);

  return {
    props: {
      articles: articles,
    },
  };
}
