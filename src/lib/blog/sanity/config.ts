'use client'

import { schemaTypes } from '../../../schemas'

import { apiVersion, basePath, dataset, projectId } from './api'
import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Club 306'

export default defineConfig({
  basePath,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    types: schemaTypes,
  },

  plugins: [
    codeInput(),
    structureTool(),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve: {
        mainDocuments: [
          {
            route: '/:slug',
            filter: `_type == "blog" && slug.current == $slug`,
          },
        ],
      },
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ].filter(Boolean),
})
