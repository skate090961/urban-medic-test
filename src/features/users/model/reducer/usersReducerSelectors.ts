import { AppRootState } from '@/app/providers/store/store'

export const selectUsers = (state: AppRootState) => state.users.users
export const selectSeed = (state: AppRootState) => state.users.seed
