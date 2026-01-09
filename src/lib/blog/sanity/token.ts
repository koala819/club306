import 'server-only'

export const token = process.env.SANITY_API_READ_TOKEN

// Note: The token is optional - it's only required for draft mode/preview
// If not provided, draft mode features will be disabled
// Note: experimental_taintUniqueValue requires React 19 or Next.js 15+
// For now, we rely on 'server-only' to prevent client-side usage
