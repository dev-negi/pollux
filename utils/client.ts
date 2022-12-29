import sanityClient from '@sanity/client'
import config from './config'

const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  token: config.token,
  useCdn: true,
})

export default client
