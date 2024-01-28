import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { Router } from '@/app/providers/routing/routing'
import { store } from '@/app/providers/store/store'

export function AppProvider() {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </StrictMode>
  )
}
