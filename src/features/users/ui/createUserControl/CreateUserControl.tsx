import { Button } from '@/common/components/ui'
import { useCreateUserControl } from '@/features/users/model/hooks/useCreateUserControl'
import { UserModal } from '@/features/users/ui'

export function CreateUserControl() {
  const { emptyUser, onSubmit, open, setOpen } = useCreateUserControl()

  return (
    <>
      <UserModal
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        title={'Добавить пользователя'}
        user={emptyUser}
      />
      <Button onClick={() => setOpen(true)}>Добавить пользователя</Button>
    </>
  )
}
