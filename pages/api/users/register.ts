import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import axios from 'axios'

import { client, config, signToken } from '../../../utils'

const handler = nc()

handler.post(async (req, res) => {
  const { projectId, dataset } = config
  const tokenWithWriteAccess = process.env.SANITY_API_TOKEN
  const createMutations = [
    {
      create: {
        _type: 'user',
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        type: 'user',
      },
    },
  ]

  const existUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    {
      email: req.body.email,
    }
  )
  if (existUser) {
    console.log('in user exist')
    return res.status(401).send({ message: 'Email already exists' })
  }
  const apiUrl = `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`
  const { data } = await axios.post(
    apiUrl,
    { mutations: createMutations },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  )
  const userId = data.results[0].id
  const user = {
    _id: userId,
    name: req.body.name,
    email: req.body.email,
    isAdmin: 'user',
  }

  const token = signToken(user)
  res.send({ ...user, token })
})

export default handler
