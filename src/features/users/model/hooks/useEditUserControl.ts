import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { User, removeUser, updateUser } from '@/features/users/model/reducer'

export function useEditUserControl(user: User) {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const onSubmit = (data: UserEditFormValues) => {
    dispatch(updateUser(user.id, data))
    setOpen(false)
  }
  const handleRemoveUser = () => {
    dispatch(removeUser(user.id))
    setOpen(false)
  }

  return { handleRemoveUser, onSubmit, open, setOpen }
}
