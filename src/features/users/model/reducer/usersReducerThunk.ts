import { usersApi } from '@/features/users/api/usersApi'
import { setSeed, setUsers } from '@/features/users/model/reducer/usersReducer'
import { User } from '@/features/users/model/reducer/usersReducer.types'
import { Dispatch } from 'redux'
import { v1 } from 'uuid'

export const fetchUsers = (seed: string) => async (dispatch: Dispatch) => {
  try {
    const res = await usersApi.fetchUsers(seed)
    const usersModel: User[] = res.data.results.map(user => ({
      email: user.email,
      firstName: user.name.first,
      gender: user.gender,
      id: user.id?.value || v1(),
      lastName: user.name.last,
    }))

    dispatch(setUsers(usersModel))
    dispatch(setSeed(seed))
  } catch (e) {
    console.error(e)
  }
}
