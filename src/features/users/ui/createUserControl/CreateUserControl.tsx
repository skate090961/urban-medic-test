import { useState } from 'react'

import { Button } from '@/common/components/ui'
import { User } from '@/features/users/api'
import { UserModal } from '@/features/users/ui'

export function CreateUserControl() {
  const [open, setOpen] = useState<boolean>(false)
  const emptyUser: User = { count: 0, email: '', firstName: '', gender: 'male', lastName: '' }

  return (
    <>
      <UserModal open={open} setOpen={setOpen} title={'Добавить пользователя'} user={emptyUser} />
      <Button onClick={() => setOpen(true)}>Добавить пользователя</Button>
    </>
  )
}
