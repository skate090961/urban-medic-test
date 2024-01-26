import { FC, memo } from 'react'

import { Button } from '@/common/components/ui'
import { Table } from '@/common/components/ui/table'
import { User } from '@/features/users/api'

import s from './UserRow.module.scss'

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
        <Button className={s.edit}>Редактировать</Button>
      </Table.Cell>
    </Table.Row>
  )
})
