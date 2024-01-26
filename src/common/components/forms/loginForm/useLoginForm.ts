import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  seed: z
    .string()
    .trim()
    .regex(/^[a-zA-Z]+$/, {
      message: '*Поле заполнено некорректно',
    }),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export function useLoginForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    defaultValues: { seed: '' },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }

  return {
    errors,
    handleSubmit: handleSubmit(onSubmit),
    register,
  }
}
