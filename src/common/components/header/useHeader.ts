import { useDispatch } from 'react-redux'

import { setSeed, setUsers } from '@/features/users/model/reducer'

export function useHeader() {
  const dispatch = useDispatch()
  const handleLogoutClick = () => {
    dispatch(setSeed(''))
    dispatch(setUsers([]))
  }

  return { handleLogoutClick }
}
