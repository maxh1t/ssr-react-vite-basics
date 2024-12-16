import { Route, Routes } from 'react-router'
import { ROUTES } from '../constants'
import { Layout } from './Layout'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import News from './News'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.profile} element={<Profile />} />
        <Route path={ROUTES.news} element={<News />} />
      </Route>
    </Routes>
  )
}
