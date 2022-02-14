import { Outlet, Link } from 'react-router-dom'

export function FeatureLayout() {
  return (
    <>
      <h6>Feature Layout</h6>
      <nav>
        <ul>
          <li><Link to="/master">Master</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}
