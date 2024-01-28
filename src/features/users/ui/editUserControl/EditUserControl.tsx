import { Button } from '@/common/components/ui'
import { useEditUserControl } from '@/features/users/model/hooks/useEditUserControl'
import { EditUserModalProps, UserModal } from '@/features/users/ui/userModal/UserModal'

import s from './EditUserControl.module.scss'

type EditUserControlProps = Omit<EditUserModalProps, 'onSubmit' | 'open' | 'setOpen' | 'title'> & {
  isEditMode?: boolean
}

export function EditUserControl({ isEditMode, user }: EditUserControlProps) {
  const { handleRemoveUser, onSubmit, open, setOpen } = useEditUserControl(user)

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
      <Button className={s.editButton} disabled={!isEditMode} onClick={() => setOpen(true)}>
        Редактировать
      </Button>
    </>
  )
}
