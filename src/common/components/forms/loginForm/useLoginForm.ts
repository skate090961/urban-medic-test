import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/providers/store/store'
import { fetchUsers } from '@/features/users/model/reducer/usersReducerThunk'
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
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    defaultValues: { seed: '' },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    await dispatch(fetchUsers(data.seed))
    navigate('/')
  }

  return {
    errors,
    handleSubmit: handleSubmit(onSubmit),
    register,
  }
}
