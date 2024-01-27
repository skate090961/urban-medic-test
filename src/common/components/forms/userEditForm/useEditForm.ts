import { useController, useForm } from 'react-hook-form'

import { nameSchema } from '@/common/utils/zod-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const userEditFormSchema = z.object({
  email: z.string().trim().email(),
  firstName: nameSchema,
  gender: z.string().optional(),
  lastName: nameSchema,
})

export type UserEditFormValues = z.infer<typeof userEditFormSchema>
type UseEditFormPropsType = {
  values: UserEditFormValues
}

export function useEditForm({ values }: UseEditFormPropsType) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<UserEditFormValues>({
    defaultValues: { ...values },
    resolver: zodResolver(userEditFormSchema),
  })
  const {
    field: { onChange, value },
  } = useController({ control, name: 'gender' })

  return {
    errors,
    handleSubmit,
    onChange,
    register,
    value,
  }
}
