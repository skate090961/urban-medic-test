import { Button } from '@/common/components/ui'
import { CreateUserControl } from '@/features/users/ui'

import s from './Header.module.scss'

export function Header() {
  return (
    <header className={s.root}>
      <div className={s.controls}>
        <CreateUserControl />
        <Button variant={'tertiary'}>Выйти</Button>
      </div>
    </header>
  )
}
