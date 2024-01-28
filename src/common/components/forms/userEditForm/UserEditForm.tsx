import { SharedSvgSelector } from '@/common/assets/icons/shared/SharedSvgSelector'
import { UserEditFormValues, useEditForm } from '@/common/components/forms/userEditForm/useEditForm'
import { GENDER_OPTIONS } from '@/common/components/forms/userEditForm/userEditForm.constants'
import { Button, Switch, TextField } from '@/common/components/ui'
import { IconButton } from '@/common/components/ui/iconButton/IconButton'
import { User } from '@/features/users/model/reducer'

import s from './UserEditForm.module.scss'

type UserEditFormProps = {
  className?: string
  defaultValues: User
  onRemove?: () => void
  onSubmit: (data: UserEditFormValues) => void
}

export function UserEditForm({ className, defaultValues, onRemove, onSubmit }: UserEditFormProps) {
  const values: UserEditFormValues = {
    email: defaultValues?.email,
    firstName: defaultValues?.firstName,
    gender: defaultValues?.gender,
    lastName: defaultValues?.lastName,
  }

  const { errors, handleSubmit, onChange, register, value } = useEditForm({ values })
  const errorMessage = '*Поле заполнено некорректно'

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
          errorMessage={errors.lastName?.message && errorMessage}
        />
        <TextField
          label={'Имя*'}
          {...register('firstName')}
          errorMessage={errors.firstName?.message && errorMessage}
        />
        <TextField
          label={'Email*'}
          {...register('email')}
          errorMessage={errors.email?.message && errorMessage}
        />
      </div>
      <div className={s.controls}>
        {onRemove && (
          <IconButton className={s.trashButton} onClick={onRemove} type={'button'}>
            <SharedSvgSelector icon={'trash'} />
          </IconButton>
        )}
        <Button fullWidth type={'submit'}>
          Сохранить
        </Button>
      </div>
    </form>
  )
}
