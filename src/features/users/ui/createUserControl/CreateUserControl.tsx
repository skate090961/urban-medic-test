import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { Button } from '@/common/components/ui'
import { User, createUser } from '@/features/users/model/reducer'
import { UserModal } from '@/features/users/ui'
import { v1 } from 'uuid'

export function CreateUserControl() {
  const [open, setOpen] = useState<boolean>(false)
  const emptyUser: User = { email: '', firstName: '', gender: 'male', id: '', lastName: '' }
  const dispatch = useDispatch()
  const onSubmit = (data: UserEditFormValues) => {
    dispatch(createUser({ ...data, gender: data.gender || 'male', id: v1() }))
    setOpen(false)
  }

  return (
    <>
      <UserModal
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        title={'Добавить пользователя'}
        user={emptyUser}
      />
      <Button onClick={() => setOpen(true)}>Добавить пользователя</Button>
    </>
  )
}
