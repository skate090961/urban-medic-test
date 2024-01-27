import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/tableHeader'
import { User } from '@/features/users/api'
import { UserRow } from '@/features/users/ui/'
import { USERS_TABLE_COLUMNS } from '@/features/users/ui/usersTable/usersTable.constants'

type UsersTableProps = {
  className?: string
  users: User[]
}

export function UsersTable({ className, users }: UsersTableProps) {
  return (
    <Table.Root className={className}>
      <TableHeader columns={USERS_TABLE_COLUMNS} />
      <Table.Body>
        {users.map(user => (
          <UserRow key={user.count} user={user} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
