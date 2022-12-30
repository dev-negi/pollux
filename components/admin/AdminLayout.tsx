import Head from 'next/head'
import { useState } from 'react'
import AdminLeftNav from './AdminLeftNav'

function AdminLayout({ children }) {
  return (
    <div>
      <div className="grid md:grid-cols-12 gap-1">
        <div className="md:col-span-12 p-4">Header</div>
        <aside className="md:col-span-2 md:pt-0 ">
          <AdminLeftNav />
        </aside>
        <main className="md:col-span-10">{children}</main>

        <div className="md:col-span-12 p-4 ">footer</div>
      </div>
    </div>
  )
}

export default AdminLayout
