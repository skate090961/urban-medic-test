import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/tableHeader'
import { UserDomain } from '@/features/users/model/reducer'
import { UserRow } from '@/features/users/ui/'
import { USERS_TABLE_COLUMNS } from '@/features/users/ui/usersTable/usersTable.constants'

type UsersTableProps = {
  className?: string
  users: UserDomain[]
}

export function UsersTable({ className, users }: UsersTableProps) {
  return (
    <Table.Root className={className}>
      <TableHeader columns={USERS_TABLE_COLUMNS} />
      <Table.Body>
        {users.map((user, index) => (
          <UserRow index={index} key={user.id} user={user} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
