import { useState } from 'react'

import { Button } from '@/common/components/ui'
import { EditUserModalProps, UserModal } from '@/features/users/ui/userModal/UserModal'

type EditUserControlProps = Omit<EditUserModalProps, 'open' | 'setOpen'>

export function EditUserControl({ user }: EditUserControlProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <UserModal open={open} setOpen={setOpen} title={'Редактировать пользователя'} user={user} />
      <Button onClick={() => setOpen(true)}>Редактировать</Button>
    </>
  )
}
