import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from '../slicemachine.config.json';

export const createClient = (config = {}) => {
  const client = prismic.createClient('https://club306.cdn.prismic.io/api/v2', {
    fetchOptions: {
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
      next: { tags: ['prismic'] },
    },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
