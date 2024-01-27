import { UserEditForm } from '@/common/components/forms'
import { ModalWindow } from '@/common/components/ui/modalWindow'
import { useEditUser } from '@/features/users/model/hooks'

export function EditUser() {
  const { onSubmit, open, setOpen } = useEditUser()

  return (
    <ModalWindow open={open} setOpen={setOpen} title={'Новый пользователь'}>
      <UserEditForm onSubmit={onSubmit} />
    </ModalWindow>
  )
}
