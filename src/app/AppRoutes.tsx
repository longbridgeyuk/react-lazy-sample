import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '@/features/home'
import { MasterRoutes } from '@/features/master'
import { AdminRoutes } from '@/features/admin'

export function AppRoutes() {
  const auth = true
  const admin = true
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      { auth && <Route path="master/*" element={<MasterRoutes />} /> }
      { admin && <Route path="admin/*" element={<AdminRoutes />} /> }
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
