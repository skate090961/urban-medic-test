import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/tableHeader'
import { UserRow } from '@/features/users/ui/'
import { USERS_TABLE_COLUMNS } from '@/features/users/ui/usersTable/usersTable.constants'

type UsersTableProps = {
  className?: string
}

export function UsersTable({ className }: UsersTableProps) {
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
    <Table.Root className={className}>
      <TableHeader columns={USERS_TABLE_COLUMNS} />
      <Table.Body>
        {items.map((user, index) => (
          <UserRow key={index} user={user} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
