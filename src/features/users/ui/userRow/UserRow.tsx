import { FC, memo } from 'react'

import { Table } from '@/common/components/ui/table'
import { UserDomain } from '@/features/users/model/reducer'
import { EditUserControl } from '@/features/users/ui'
import { GENDER } from '@/features/users/ui/userRow/userRow.constans'

type UserRowProps = {
  index: number
  user: UserDomain
}

export const UserRow: FC<UserRowProps> = memo(({ index, user }) => {
  const { email, firstName, gender, lastName } = user

  const genderLabel = GENDER[gender as keyof typeof GENDER] ?? 'Неизвестный'

  return (
    <Table.Row>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>{lastName}</Table.Cell>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{genderLabel}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>
        <EditUserControl isEditMode={user.isSavedUser} user={user} />
      </Table.Cell>
    </Table.Row>
  )
})
