import { UserEditForm } from '@/common/components/forms'
import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { ModalWindow } from '@/common/components/ui/modalWindow'
import { User } from '@/features/users/api'

export type EditUserModalProps = {
  open: boolean
  setOpen: (value: boolean) => void
  user: User
}

export function EditUserModal({ open, setOpen, user }: EditUserModalProps) {
  const onSubmit = (data: UserEditFormValues) => {
    setOpen(false)
    console.log(data)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title={'Редактировать пользователя'}>
      <UserEditForm defaultValues={user} onSubmit={onSubmit} />
    </ModalWindow>
  )
}
