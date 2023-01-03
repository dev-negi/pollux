import React from 'react'

import Icon from './Icon'

const Button = React.forwardRef((props, ref) => {
  const { label, children, icon, loading, disabled, type, ...other } = props
  return (
    <button
      className="pl-5 pr-5 bg-black text-white text-xs font-bold uppercase m-1"
      {...other}
      type={type || 'button'}
      disabled={loading || disabled}
      ref={ref}
    >
      {icon && <ICON src={icon} />}
      {children}
    </button>
  )
})

export default Button
