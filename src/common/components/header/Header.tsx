import { useDispatch } from 'react-redux'

import { Button } from '@/common/components/ui'
import { setSeed, setUsers } from '@/features/users/model/reducer'
import { CreateUserControl } from '@/features/users/ui'

import s from './Header.module.scss'

export function Header() {
  const dispatch = useDispatch()
  const handleLogoutClick = () => {
    dispatch(setSeed(''))
    dispatch(setUsers([]))
  }

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
