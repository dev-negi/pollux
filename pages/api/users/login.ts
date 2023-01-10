import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import axios from 'axios'

import { client, config, signToken } from '../../../utils'

const handler = nc()

handler.post(async (req, res) => {
  const user = await client.fetch(`*[_type == "user" && email == $email][0]`, {
    email: req.body.email,
  })
  console.log('post requset done')
  console.log('user:-', user.password, req.body.password)
  if (!user) {
    return res.status(400).json({ message: 'User not exist' })
  }
  bcrypt.compare(req.body.password, user.password, (err, data) => {
    if (err) throw err

    if (data) {
      console.log('data:-', data)
      const token = signToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        type: user.type,
      })
      const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        type: user.type,
        token,
      }
      return res.status(200).json(userData)
    } else {
      return res.status(401).json({ msg: 'Invalid credencial' })
    }
  })
})

export default handler
