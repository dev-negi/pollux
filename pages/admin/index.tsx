import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import AdminLayout from '../../components/admin/AdminLayout'
import AdminPage from '../../components/admin/AdminPage'

function Admin() {
  return (
    <AdminLayout>
      <AdminPage />
    </AdminLayout>
  )
}

export default AdminLayout
