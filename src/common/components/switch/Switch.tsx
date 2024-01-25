import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/common/components/typography'

import s from './Switch.module.scss'

type OptionProps = {
  name: string
  value: string
}
export type SwitchProps = {
  className?: string
  name: string
  onChangeOption: (value: string) => void
  options: OptionProps[]
  value: string
} & ComponentPropsWithoutRef<'div'>

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, name, onChangeOption, options, value, ...rest }, ref) => {
    return (
      <div className={`${s.root} ${className}`}>
        {options.map(option => {
          const isCurrentValue = value === option.value

          return (
            <label className={`${s.label} ${isCurrentValue ? s.active : ''}`} key={option.value}>
              <input
                checked={isCurrentValue}
                className={s.input}
                name={name}
                onChange={e => onChangeOption(e.currentTarget.value)}
                type={'radio'}
                value={option.value}
                {...rest}
                ref={ref}
              />
              <Typography variant={'subtitle2'}>{option.name}</Typography>
            </label>
          )
        })}
      </div>
    )
  }
)
