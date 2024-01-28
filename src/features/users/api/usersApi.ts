import { usersInstance } from '@/common/api'
import { UsersResponseType } from '@/features/users/api/responseUsers.types'

export const usersApi = {
  fetchUsers(seed: string) {
    return usersInstance.get<UsersResponseType>('', {
      params: {
        page: 1,
        results: 15,
        seed,
      },
    })
  },
}
