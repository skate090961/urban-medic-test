import { Button } from '@/common/components/ui'

import s from './Header.module.scss'

export function Header() {
  return (
    <div className={s.root}>
      <div className={s.controls}>
        <Button>Добавить пользователя</Button>
        <Button variant={'tertiary'}>Выйти</Button>
      </div>
    </div>
  )
}
