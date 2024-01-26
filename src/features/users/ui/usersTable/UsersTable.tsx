import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/tableHeader'
import { UsersTableColumns } from '@/common/consts'
import { UserRow } from '@/features/users/ui/'

export function UsersTable() {
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
      firstName: 'Валерий',
      gender: 'Мужской',
      lastName: 'Алексеев',
    },
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
      firstName: 'Валерий',
      gender: 'Мужской',
      lastName: 'Алексеев',
    },
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
      firstName: 'Валерий',
      gender: 'Мужской',
      lastName: 'Алексеев',
    },
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
      firstName: 'Валерий',
      gender: 'Мужской',
      lastName: 'Алексеев',
    },
  ]

  return (
    <Table.Root>
      <TableHeader columns={UsersTableColumns} />
      <Table.Body>
        {items.map((user, index) => (
          <UserRow key={index} user={user} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
