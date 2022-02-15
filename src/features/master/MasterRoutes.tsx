import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { FeatureLayout } from '@/features/FeatureLayout'
import { MasterLayout } from './MasterLayout'

// 通常のimport
import { Top } from './top'
import { Masterpage1Routes } from './masterpage1'

// 遅延import
// --named export使用の場合はコッチ
// const Top = React.lazy(async () => ({ 
//   default: (await import('./top')).Top 
// }))
// const Masterpage1Routes = React.lazy(async () => ({ 
//   default: (await import('./masterpage1')).Masterpage1Routes 
// }))

// --default export使用の場合はコッチ （※index.tsやエイリアスパスは使えない）
// const TopRoutes = React.lazy(() => import('./top/Top'))
// const Masterpage1Routes = React.lazy(() => import('./masterpage1/Masterpage1Routes'))

export function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FeatureLayout />} >
        <Route index element={<Top />} />
        <Route path="/*" element={<MasterLayout />}>
          <Route path="masterpage1/*" element={<Masterpage1Routes />} />
          <Route path="*" element={<Navigate to="." />}  />
        </Route>
      </Route>
    </Routes>
  )
}

