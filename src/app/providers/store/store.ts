import { useDispatch } from 'react-redux'

import { rootReducer } from '@/app/providers/store/rootReducer'
import { AnyAction, applyMiddleware, legacy_createStore } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
//@ts-ignore
window.store = store
