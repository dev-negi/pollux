import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import useForm from '../hooks/useForm'
import { loginValidation, getRegisterError } from '../utils'

function RegisterPage() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    registerUser,
    loginValidation
  )
  const { name, email, password } = values
  async function registerUser() {
    console.log('registerUser:-', values)
    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
      })
    } catch (error) {
      // TODO: handle errors
      console.log(getRegisterError(error))
    }
  }

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Layout title="Register">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="mb-4 text-xl">Register</h1>
        <div className="mb-4">
          <label htmlFor="email">Name</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            className="w-full"
            id="name"
            onChange={handleChange}
            required
            autoFocus
          ></input>
          {errors.name && <p className="red">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            className="w-full"
            id="email"
            onChange={handleChange}
            required
            autoFocus
          ></input>
          {errors.email && <p className="red">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full"
            id="password"
            onChange={handleChange}
            required
            autoFocus
          ></input>
          {errors.password && <p className="red">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full"
            id="confirmPassword"
            onChange={handleChange}
            required
            autoFocus
          ></input>
          {errors.confirmPassword && (
            <p className="red">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="mb-4">
          <button type="submit">Register</button>
        </div>
        <div className="mb-4">
          Already have an account? &nbsp;
          <Link href="/login">Login</Link>
        </div>
      </form>
    </Layout>
  )
}

export default RegisterPage
