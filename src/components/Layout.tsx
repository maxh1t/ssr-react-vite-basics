import { Link, Outlet } from 'react-router'
import { ROUTES } from '../constants'

export function Layout() {
  return (
    <>
      <nav>
        <Link to={ROUTES.home}>Home</Link>
        <Link to={ROUTES.dashboard}>Dashboard</Link>
        <Link to={ROUTES.profile}>Profile</Link>
        <Link to={ROUTES.news}>News</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
