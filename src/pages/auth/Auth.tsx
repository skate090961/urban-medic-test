import { LoginForm } from '@/common/components/forms'
import { Typography } from '@/common/components/ui'

import s from './Auth.module.scss'

export function Auth() {
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
