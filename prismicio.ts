import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from './slicemachine.config.json';

// export const apiEndpoint = config.apiEndpoint;

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient('https://club306.cdn.prismic.io/api/v2', {
    // routes,
    fetchOptions: {
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
      next: { tags: ['prismic'] },
    },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
