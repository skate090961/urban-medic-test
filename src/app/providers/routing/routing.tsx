import { useSelector } from 'react-redux'
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { selectSeed } from '@/features/users/model/reducer'
import { Auth } from '@/pages/auth/Auth'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/notFound'

const publicRoutes: RouteObject[] = [
  { element: <Auth />, path: '/auth' },
  {
    element: <NotFound />,
    path: '/*',
  },
]
const privateRoutes: RouteObject[] = [{ element: <Home />, path: '/' }]

function PrivateRoutes() {
  const seed = useSelector(selectSeed)

  return seed ? <Home /> : <Navigate to={'auth'} />
}

const router = createBrowserRouter([
  ...publicRoutes,
  { children: privateRoutes, element: <PrivateRoutes /> },
])

export function Router() {
  return <RouterProvider router={router} />
}
