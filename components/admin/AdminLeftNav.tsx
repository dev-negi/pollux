import React from 'react'
import Link from 'next/link'

function AdminLeftNav() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/admin">Home</Link>
        </li>
        <li>
          <Link href="/admin/products">Products</Link>
        </li>
        <li>
          <Link href="/admin/customers">Customers</Link>
        </li>
        <li>
          <Link href="/admin/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/admin/discounts">Discounts</Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminLeftNav
