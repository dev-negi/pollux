import React, { useState } from 'react'

function ToggleSwitch(props) {
  const { label, isDiscount, handleToggle } = props
  const tCls =
    'flex w-20 h-10 bg-gray-600 rounded-full transition-all duration-500'
  const cCls = 'h-10 w-10 bg-white rounded-full  transition-all duration-500'

  const toggleClass = isDiscount ? `${tCls} bg-green-600` : tCls
  const cls = isDiscount ? `${cCls} ml-10` : cCls

  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="block mb-2 font-bold text-gray-600">
          {label}
        </label>
      )}
      <div className={toggleClass} onClick={handleToggle}>
        <span className={cls}></span>
      </div>
    </div>
  )
}

export default ToggleSwitch
