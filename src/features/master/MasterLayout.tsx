import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export function MasterLayout() {
  return (
    <div>
      <h6>Master Layout</h6>
      <nav>
        <Link to="/master">Master Top</Link>
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
