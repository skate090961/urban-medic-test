import { AppRootState } from '@/app/providers/store/store'

export function saveState(state: AppRootState) {
  try {
    const { seed, users } = state.users

    localStorage.setItem('seed', JSON.stringify(seed))
    localStorage.setItem('users', JSON.stringify(users))
  } catch (err) {
    console.error(err)
  }
}
