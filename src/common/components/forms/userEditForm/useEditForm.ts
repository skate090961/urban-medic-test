import { useController, useForm } from 'react-hook-form'

import { nameSchema } from '@/common/utils/zod-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const userEditFormSchema = z.object({
  email: z.string().trim().email(),
  firstName: nameSchema,
  gender: z.string().optional(),
  lastName: nameSchema,
})

export type UserEditFormValues = z.infer<typeof userEditFormSchema>

export function useEditForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<UserEditFormValues>({
    defaultValues: { gender: 'male' },
    resolver: zodResolver(userEditFormSchema),
  })
  const {
    field: { onChange, value },
  } = useController({ control, name: 'gender' })
  const onSubmit = (data: UserEditFormValues) => {
    console.log(data)
  }

  return {
    errors,
    handleSubmit: handleSubmit(onSubmit),
    onChange,
    register,
    value,
  }
}
