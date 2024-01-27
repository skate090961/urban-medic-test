import { useState } from 'react'

import { Button } from '@/common/components/ui'
import { EditUserModal, EditUserModalProps } from '@/features/users/ui/editUserModal/EditUserModal'

type EditUserControlProps = Omit<EditUserModalProps, 'open' | 'setOpen'>

export function EditUserControl({ user }: EditUserControlProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <EditUserModal open={open} setOpen={setOpen} user={user} />
      <Button onClick={() => setOpen(true)}>Редактировать</Button>
    </>
  )
}
