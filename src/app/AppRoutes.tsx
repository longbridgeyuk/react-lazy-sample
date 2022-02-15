import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '@/features/home'

// 通常import
// import { MasterRoutes } from '@/features/master'
// import { AdminRoutes } from '@/features/admin'

// 遅延import
// --named export使用の場合はコッチ
const MasterRoutes = React.lazy(async () => ({ 
  default: (await import('@/features/master')).MasterRoutes 
}))
const AdminRoutes = React.lazy(async () => ({ 
  default: (await import('@/features/admin')).AdminRoutes 
}))

// --default export使用の場合はコッチ （※index.tsやエイリアスパスは使えない）
// const MasterRoutes = React.lazy(() => import('../features/master/MasterRoutes'))
// const AdminRoutes = React.lazy(() => import('../features/master/AdminRoutes'))

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
