import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { User, createUser } from '@/features/users/model/reducer'
import { v1 } from 'uuid'

export function useCreateUserControl() {
  const [open, setOpen] = useState<boolean>(false)
  const emptyUser: User = { email: '', firstName: '', gender: 'male', id: '', lastName: '' }
  const dispatch = useDispatch()
  const onSubmit = (data: UserEditFormValues) => {
    dispatch(createUser({ ...data, gender: data.gender || 'male', id: v1() }))
    setOpen(false)
  }

  return { emptyUser, onSubmit, open, setOpen }
}
