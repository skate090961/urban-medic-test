import { ComponentPropsWithoutRef, FC } from 'react'

import { Table } from '@/common/components/ui/table'

import s from './TableHeader.module.scss'
export type Column = {
  key: string
  title: string
}

export type TableHeaderProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
  },
  'children'
>

export const TableHeader: FC<TableHeaderProps> = ({ columns, ...restProps }) => {
  return (
    <Table.Head {...restProps}>
      <Table.Row>
        {columns.map(({ key, title }) => {
          return (
            <Table.HeadCell className={s.cell} key={key}>
              {title}
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
