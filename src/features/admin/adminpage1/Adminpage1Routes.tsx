import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout, List, Create, Detail } from './components'

export function Adminpage1Routes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="create" element={<Create />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="*" element={<Navigate to="." />} />
      </Route>
    </Routes>
  )
}

