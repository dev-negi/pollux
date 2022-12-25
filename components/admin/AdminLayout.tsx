import Head from 'next/head'
import { useState } from 'react'
import AdminLeftNav from './AdminLeftNav'

function AdminLayout({ children }) {
  return (
    <div>
      <div class="grid md:grid-cols-12 gap-1">
        <div class="md:col-span-12 p-4">Header</div>
        <aside class="md:col-span-2 md:pt-0 ">
          <AdminLeftNav />
        </aside>
        <main class="md:col-span-10">{children}</main>

        <div class="md:col-span-12 p-4 ">footer</div>
      </div>
    </div>
  )
}

export default AdminLayout
