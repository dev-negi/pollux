import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import AdminLayout from '../../components/admin/AdminLayout'
import AdminPage from '../../components/admin/AdminPage'

export default function Admin() {
  return (
    <AdminLayout>
      <AdminPage />
    </AdminLayout>
  )
}
