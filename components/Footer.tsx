import React from 'react'

function Footer({ brandName }) {
  return (
    <footer className="flex h-10 justify-center items-center shadow-inner">
      <p>Copyright © 2022 {brandName}</p>
    </footer>
  )
}

export default Footer
