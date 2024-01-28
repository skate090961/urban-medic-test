import {
  UpdateUserModel,
  User,
  UserDomain,
} from '@/features/users/model/reducer/usersReducer.types'

const initialState = {
  seed: '',
  users: [] as UserDomain[],
}

type AppStateType = typeof initialState

export const usersReducer = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'USERS/SET-USERS':
      return {
        ...state,
        users: action.users.map(user => ({ ...user, isSavedUser: false })),
      }
    case 'USERS/CREATE-USER':
      return {
        ...state,
        users: [{ ...action.user, isSavedUser: true }, ...state.users],
      }
    case 'USERS/UPDATE-USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, ...action.userModel } : user
        ),
      }
    case 'USERS/REMOVE-USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      }
    case 'USERS/SET-SEED':
      return {
        ...state,
        seed: action.seed,
      }
    default:
      return state
  }
}

type ActionsType =
  | ReturnType<typeof createUser>
  | ReturnType<typeof removeUser>
  | ReturnType<typeof setSeed>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof updateUser>

export const setUsers = (users: User[]) => ({ type: 'USERS/SET-USERS', users }) as const
export const createUser = (user: User) => ({ type: 'USERS/CREATE-USER', user }) as const
export const updateUser = (id: string, userModel: UpdateUserModel) =>
  ({ id, type: 'USERS/UPDATE-USER', userModel }) as const
export const removeUser = (id: string) => ({ id, type: 'USERS/REMOVE-USER' }) as const
export const setSeed = (seed: string) => ({ seed, type: 'USERS/SET-SEED' }) as const
