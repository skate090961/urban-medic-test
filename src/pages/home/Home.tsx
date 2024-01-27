import { Header } from '@/common/components/header'
import { UsersTable } from '@/features/users/ui'

import s from './Home.module.scss'

export function Home() {
  const items = [
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Валерий',
      gender: 'Мужской',
      lastName: 'Алексеев',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Артем',
      gender: 'Мужской',
      lastName: 'Артем',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Мавкс',
      gender: 'Мужской',
      lastName: 'Мавкс',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Антон',
      gender: 'Мужской',
      lastName: 'Антон',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Гена',
      gender: 'Мужской',
      lastName: 'Гена',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Фа',
      gender: 'Мужской',
      lastName: 'Фа',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Артур',
      gender: 'Мужской',
      lastName: 'Артур',
    },
    {
      count: 1,
      email: 'gorodgrosh@yandex.ru',
      firstName: 'Валерий',
      gender: 'Мужской',
      lastName: 'Алексеев',
    },
  ]

  return (
    <>
      <Header />
      <UsersTable className={s.table} users={items} />
    </>
  )
}
