import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { FeatureLayout } from '@/features/FeatureLayout'
import { AdminLayout } from './AdminLayout'

// 通常のimport
import { Top } from './top'
import { Adminpage1Routes } from './adminpage1'

// 遅延import
// --named export使用の場合はコッチ
// const Top = React.lazy(async () => ({ 
//   default: (await import('./top')).Top 
// }))
// const Adminpage1Routes = React.lazy(async () => ({ 
//   default: (await import('./adminpage1')).Adminpage1Routes 
// }))

// --default export使用の場合はコッチ （※index.tsやエイリアスパスは使えない）
// const Top = React.lazy(() => import('./top/Top'))
// const Adminpage1Routes = React.lazy(() => import('./adminpage1/Adminpage1Routes'))

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FeatureLayout />} >
        <Route index element={<Top />} />
        <Route path="/*" element={<AdminLayout />}>
          <Route path="adminpage1/*" element={<Adminpage1Routes />} />
          <Route path="*" element={<Navigate to="." />}  />
        </Route>
      </Route>
    </Routes>
  )
}

