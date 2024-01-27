import { SharedSvgSelector } from '@/common/assets/icons/shared/SharedSvgSelector'
import { UserEditFormValues, useEditForm } from '@/common/components/forms/userEditForm/useEditForm'
import { GENDER_OPTIONS } from '@/common/components/forms/userEditForm/userEditForm.constants'
import { Button, Switch, TextField } from '@/common/components/ui'
import { IconButton } from '@/common/components/ui/iconButton/IconButton'

import s from './UserEditForm.module.scss'

type UserEditFormProps = {
  className?: string
  onSubmit: (data: UserEditFormValues) => void
}

//TODO: add validate, styles
export function UserEditForm({ className, onSubmit }: UserEditFormProps) {
  const { errors, handleSubmit, onChange, register, value } = useEditForm()

  return (
    <form className={`${s.form} ${className}`} noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className={s.gender}>
        <Switch
          name={'gender'}
          onOptionChange={onChange}
          options={GENDER_OPTIONS}
          value={value as string}
        />
      </div>
      <div className={s.fields}>
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
      </div>
      <div className={s.controls}>
        <IconButton className={s.trashButton} type={'button'}>
          <SharedSvgSelector icon={'trash'} />
        </IconButton>
        <Button fullWidth type={'submit'}>
          Сохранить
        </Button>
      </div>
    </form>
  )
}
