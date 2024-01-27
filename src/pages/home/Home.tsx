import { Header } from '@/common/components/header'
import { UsersTable } from '@/features/users/ui'

import s from './Home.module.scss'

export function Home() {
  return (
    <>
      <Header />
      <UsersTable className={s.table} />
    </>
  )
}
