import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/common/components/ui/typography'

import s from './Switch.module.scss'

export type OptionProps = {
  name: string
  value: string
}
export type SwitchProps = {
  className?: string
  name: string
  onOptionChange: (value: string) => void
  options: OptionProps[]
  value: string
} & ComponentPropsWithoutRef<'div'>

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, name, onOptionChange, options, value, ...rest }, ref) => {
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
                onChange={e => onOptionChange(e.currentTarget.value)}
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
