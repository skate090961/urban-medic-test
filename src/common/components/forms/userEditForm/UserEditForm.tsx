import { useEditForm } from '@/common/components/forms/userEditForm/useEditForm'
import { GENDER_OPTIONS } from '@/common/components/forms/userEditForm/userEditForm.constants'
import { Button, Switch, TextField } from '@/common/components/ui'

import s from '@/common/components/forms/loginForm/LoginForm.module.scss'

type UserEditFormProps = {
  className?: string
}

export function UserEditForm({ className }: UserEditFormProps) {
  const { errors, handleSubmit, onChange, register, value } = useEditForm()

  return (
    <form className={`${s.form} ${className}`} noValidate onSubmit={handleSubmit}>
      <Switch
        name={'gender'}
        onOptionChange={onChange}
        options={GENDER_OPTIONS}
        value={value as string}
      />
      <TextField
        label={'Фамилия*'}
        {...register('lastName')}
        errorMessage={errors.lastName?.message}
      />
      <TextField
        label={'Имя*'}
        {...register('firstName')}
        errorMessage={errors.firstName?.message}
      />
      <TextField label={'Email*'} {...register('email')} errorMessage={errors.email?.message} />
      <Button type={'submit'}>Сохранить</Button>
    </form>
  )
}
