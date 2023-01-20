import {createClient, groq} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_DATASET !;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION !;

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
})

export default client
