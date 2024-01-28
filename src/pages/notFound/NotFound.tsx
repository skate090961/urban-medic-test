import { Link } from 'react-router-dom'

import { PageNotFound } from '@/common/assets/illustrations/PageNotFound'
import { Button } from '@/common/components/ui'

import s from './NotFound.module.scss'
export const NotFound = () => {
  return (
    <div className={s.root}>
      <PageNotFound />
      <Button as={Link} to={'/'}>
        Вернуться назад
      </Button>
    </div>
  )
}
