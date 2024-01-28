import { useHeader } from '@/common/components/header/useHeader'
import { Button } from '@/common/components/ui'
import { CreateUserControl } from '@/features/users/ui'

import s from './Header.module.scss'

export function Header() {
  const { handleLogoutClick } = useHeader()

  return (
    <header className={s.root}>
      <div className={s.controls}>
        <CreateUserControl />
        <Button onClick={handleLogoutClick} variant={'tertiary'}>
          Выйти
        </Button>
      </div>
    </header>
  )
}
