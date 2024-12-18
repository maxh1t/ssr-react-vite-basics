import { Route, Routes } from 'react-router'
import { ROUTES } from '../constants'
import { Layout } from './Layout'
import { Home } from './Home'
import { Posts } from './Posts'
import { Todos } from './Todos'
import { Albums } from './Albums'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.posts} element={<Posts />} />
        <Route path={ROUTES.albums} element={<Albums />} />
        <Route path={ROUTES.todos} element={<Todos />} />
      </Route>
    </Routes>
  )
}
