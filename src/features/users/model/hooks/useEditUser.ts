import { useState } from 'react'

import { UserEditFormValues } from '@/common/components/forms/userEditForm/useEditForm'

export function useEditUser() {
  const [open, setOpen] = useState(true)
  const onSubmit = (data: UserEditFormValues) => {
    setOpen(false)
    console.log(data)
  }

  return { onSubmit, open, setOpen }
}
