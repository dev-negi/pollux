import sanityClient from '@sanity/client'
import config from './config'

const { projectId, dataset, token, apiVersion } = config
const client = sanityClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: true,
})

export default client
