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

  const handleSubmit = (event, type, index) => {
    if (event) {
      event.preventDefault()
    }
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (event, type, index) => {
    // console.log('event.target.name:-', type, index)
    console.log(
      'variant:-',
      event.target.name,
      'event.target.value:-',
      event.target.value
    )
    console.log(values)
    event.persist()

    if (type === 'variant') {
      if (values.variants === undefined) {
        values.variants = []
      }
      const variantList = values.variants
      if (variantList[index] === undefined) {
        variantList[index] = {}
      }
      const curentVariant = variantList[index]

      curentVariant[event.target.name] = event.target.value

      setValues((values) => ({
        ...values,
        variants: variantList,
      }))
    } else {
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }))
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
