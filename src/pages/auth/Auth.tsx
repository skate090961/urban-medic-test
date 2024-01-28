import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LoginForm } from '@/common/components/forms'
import { Typography } from '@/common/components/ui'
import { selectSeed } from '@/features/users/model/reducer'

import s from './Auth.module.scss'

export function Auth() {
  const seed = useSelector(selectSeed)

  if (seed) {
    return <Navigate to={'/'} />
  }

  return (
    <div className={s.root}>
      <section className={s.section}>
        <div className={s.content}>
          <Typography as={'h1'} className={s.title} variant={'h1'}>
            Добро пожаловать
          </Typography>
          <LoginForm className={s.form} />
        </div>
      </section>
    </div>
  )
}
