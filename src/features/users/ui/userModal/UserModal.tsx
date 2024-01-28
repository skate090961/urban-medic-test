import { UserEditForm } from '@/common/components/forms'
import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'
import { ModalWindow } from '@/common/components/ui/modalWindow'
import { User } from '@/features/users/model/reducer'

export type EditUserModalProps = {
  onRemove?: () => void
  onSubmit: (data: UserEditFormValues) => void
  open: boolean
  setOpen: (value: boolean) => void
  title: string
  user: User
}

export function UserModal({ onRemove, onSubmit, open, setOpen, title, user }: EditUserModalProps) {
  return (
    <ModalWindow open={open} setOpen={setOpen} title={title}>
      <UserEditForm defaultValues={user} onRemove={onRemove} onSubmit={onSubmit} />
    </ModalWindow>
  )
}
