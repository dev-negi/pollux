import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    console.log('errors:-', errors)
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
      setValues({})
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (event, cl) => {
    console.log('event.target.name:-', event.target.name)
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
