import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { Button } from '@/common/components/ui'
import { removeUser, updateUser } from '@/features/users/model/reducer'
import { EditUserModalProps, UserModal } from '@/features/users/ui/userModal/UserModal'

type EditUserControlProps = Omit<EditUserModalProps, 'onSubmit' | 'open' | 'setOpen' | 'title'> & {
  isEditMode?: boolean
}

export function EditUserControl({ isEditMode, user }: EditUserControlProps) {
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

  return (
    <>
      <UserModal
        onRemove={handleRemoveUser}
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        title={'Редактировать пользователя'}
        user={user}
      />
      <Button disabled={!isEditMode} onClick={() => setOpen(true)}>
        Редактировать
      </Button>
    </>
  )
}
