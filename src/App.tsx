import { TextField } from '@/common/components/textField'

export function App() {
  return (
    <div>
      <TextField disabled label={'Фамилия*'} />
      <TextField errorMessage={'*Некоторые поля заполнены не корректно'} label={'Имя*'} />
    </div>
  )
}
