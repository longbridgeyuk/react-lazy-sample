import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export function AdminLayout() {
  return (
    <div>
      <h6>Admin Layout</h6>
      <nav>
        <Link to="/admin">Admin Top</Link>
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
