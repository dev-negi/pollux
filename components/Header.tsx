import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { brandName } from '../constant'
import { selectBasketItems } from '../redux/basketSlice'
import DesktopHeader from './desktop/DesktopHeader'
import MobileHeader from './mobile/MobileHeader'

function Header() {
  const items = useSelector(selectBasketItems)

  return (
    <>
      <div className="md:hidden">
        <MobileHeader itemInCart={items.length} brandName={brandName} />
      </div>
      <div className="hidden md:block">
        <DesktopHeader itemInCart={items.length} brandName={brandName} />
      </div>
    </>
  )
}

export default Header
