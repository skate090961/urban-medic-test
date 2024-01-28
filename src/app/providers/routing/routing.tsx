import { useSelector } from 'react-redux'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { selectIsAuth } from '@/features/users/model/reducer'
import { Auth } from '@/pages/auth/Auth'
import { Home } from '@/pages/home'

const publicRoutes = [{ element: <Auth />, path: '/auth' }]
const privateRoutes = [{ element: <Home />, path: '/' }]

function PrivateRoutes() {
  const isAuth = useSelector(selectIsAuth)

  return isAuth ? <Home /> : <Navigate to={'auth'} />
}

const router = createBrowserRouter([
  ...publicRoutes,
  { children: privateRoutes, element: <PrivateRoutes /> },
])

export function Router() {
  return <RouterProvider router={router} />
}
