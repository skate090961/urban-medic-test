import { FC, memo } from 'react'

import { Table } from '@/common/components/ui/table'
import { User } from '@/features/users/api'
import { EditUserControl } from '@/features/users/ui'

type Props = {
  user: User
}

export const UserRow: FC<Props> = memo(({ user }) => {
  const { count, email, firstName, gender, lastName } = user

  return (
    <Table.Row>
      <Table.Cell>{count}</Table.Cell>
      <Table.Cell>{lastName}</Table.Cell>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{gender}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>
        <EditUserControl user={user} />
      </Table.Cell>
    </Table.Row>
  )
})
