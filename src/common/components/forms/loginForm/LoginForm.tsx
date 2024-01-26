import { useLoginForm } from '@/common/components/forms/loginForm/useLoginForm'
import { Button, TextField } from '@/common/components/ui'

import s from './LoginForm.module.scss'

type LoginFormProps = {
  className: string
}

export function LoginForm({ className }: LoginFormProps) {
  const { errors, handleSubmit, register } = useLoginForm()

  return (
    <form className={`${s.form} ${className}`} noValidate onSubmit={handleSubmit}>
      <TextField {...register('seed')} errorMessage={errors.seed?.message} label={'Seed'} />
      <Button type={'submit'} variant={'secondary'}>
        Войти
      </Button>
    </form>
  )
}
