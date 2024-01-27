import { UserEditForm } from '@/common/components/forms'
import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { ModalWindow } from '@/common/components/ui/modalWindow'
import { User } from '@/features/users/api'

export type EditUserModalProps = {
  open: boolean
  setOpen: (value: boolean) => void
  title: string
  user: User
}

export function UserModal({ open, setOpen, title, user }: EditUserModalProps) {
  const onSubmit = (data: UserEditFormValues) => {
    setOpen(false)
    console.log(data)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title={title}>
      <UserEditForm defaultValues={user} onSubmit={onSubmit} />
    </ModalWindow>
  )
}
