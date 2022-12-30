import React, { useEffect, useState } from 'react'

import { InputTypes } from '../types/input.types'
import './input.css'

const Input = React.forwardRef((props: InputTypes, ref: any) => {
  const [type, setType] = useState('text')
  const { label, value, onChange, onFocus, error, disabled, name, ...rest } =
    props

  useEffect(() => setType(rest.type || 'text'), [])
  const _onChange = (event: any) => {
    if (onChange) {
      onChange(event)
    }
  }

  const _onFocus = (event: any) => {
    if (onFocus) {
      onFocus(event)
    }
  }

  return (
    <label className="md:flex-1 mt-2 mb:mt-0 md:px-3">
      {label && (
        <span className="block uppercase tracking-wide text-xs font-bold">
          {label}
        </span>
      )}
      <div className="mb-4">
        <input
          className="w-full shadow-inner p-4 border-0"
          type={type}
          value={value}
          onChange={_onChange}
          onFocus={_onFocus}
          disabled={disabled}
          name={name}
        />
      </div>
      {error && <p className="input-error">{error}</p>}
    </label>
  )
})

export default Input
