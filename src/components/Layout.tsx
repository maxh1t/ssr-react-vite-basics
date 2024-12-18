import { Link, Outlet } from 'react-router'
import { ROUTES } from '../constants'

export function Layout() {
  return (
    <div className='layout'>
      <nav>
        <div>
          <Link to={ROUTES.home}>Home</Link>
          <Link to={ROUTES.posts}>Posts</Link>
          <Link to={ROUTES.albums}>Albums</Link>
          <Link to={ROUTES.todos}>Todos</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
