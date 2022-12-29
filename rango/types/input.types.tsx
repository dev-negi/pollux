import React from 'react'

interface Element extends React.HTMLProps<any> {
  disabled?: boolean
  id?: string
  className?: string
}
export interface InputTypes extends Element {
  label?: string
  value?: string | number
  onChange?: (event: any) => void
  error?: boolean
}
