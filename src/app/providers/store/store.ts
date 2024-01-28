import { useDispatch } from 'react-redux'

import { loadState, saveState } from '@/app/localStorage'
import { rootReducer } from '@/app/providers/store/rootReducer'
import { AnyAction, applyMiddleware, legacy_createStore } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

export const store = legacy_createStore(
  rootReducer,
  { users: loadState() },
  applyMiddleware(thunkMiddleware)
)

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

store.subscribe(() => {
  saveState({
    users: store.getState().users,
  })
})

//@ts-ignore
window.store = store
