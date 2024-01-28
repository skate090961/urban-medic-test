import { useSelector } from 'react-redux'

import { Header } from '@/common/components/header'
import { selectUsers } from '@/features/users/model/reducer'
import { UsersTable } from '@/features/users/ui'

import s from './Home.module.scss'

export function Home() {
  const users = useSelector(selectUsers)

  return (
    <>
      <Header />
      <main className={s.main}>
        <UsersTable className={s.table} users={users} />
      </main>
    </>
  )
}
