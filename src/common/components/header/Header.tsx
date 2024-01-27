import { Button } from '@/common/components/ui'
import { CreateUserControl } from '@/features/users/ui'

import s from './Header.module.scss'

export function Header() {
  return (
    <div className={s.root}>
      <div className={s.controls}>
        <CreateUserControl />
        <Button variant={'tertiary'}>Выйти</Button>
      </div>
    </div>
  )
}
