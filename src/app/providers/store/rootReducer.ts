import { usersReducer } from '@/features/users/model/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  users: usersReducer,
})
