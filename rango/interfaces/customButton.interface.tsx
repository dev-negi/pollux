import React, { MouseEvent, ReactNode } from 'react'

interface Element extends React.HTMLProps<any> {
  disabled?: boolean
  className?: string
  id?: string
  onClick?(e: MouseEvent<HTMLElement>): void
}

export default interface CButton extends Element {
  children: ReactNode
  label?: string
  icon?: string
  loading?: boolean
  type?: 'button' | 'submit'
  primary?: boolean
  secondary?: boolean
}
