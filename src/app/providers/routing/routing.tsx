import { useSelector } from 'react-redux'
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/common/consts'
import { selectSeed } from '@/features/users/model/reducer'
import { Auth } from '@/pages/auth/Auth'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/notFound'

const publicRoutes: RouteObject[] = [
  { element: <Auth />, path: ROUTES.auth },
  {
    element: <NotFound />,
    path: ROUTES.rest,
  },
]
const privateRoutes: RouteObject[] = [{ element: <Home />, path: ROUTES.base }]

function PrivateRoutes() {
  const seed = useSelector(selectSeed)

  return seed ? <Home /> : <Navigate to={ROUTES.auth} />
}

const router = createBrowserRouter([
  ...publicRoutes,
  { children: privateRoutes, element: <PrivateRoutes /> },
])

export function Router() {
  return <RouterProvider router={router} />
}
