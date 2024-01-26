import { ComponentProps, KeyboardEvent, ReactNode, forwardRef } from 'react'

import { Typography } from '@/common/components/ui/typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  label?: ReactNode
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, errorMessage, id, label, onEnter, onKeyDown, ...rest }, ref) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }
    const classNames = {
      input: clsx(s.input, showError && s.error),
      inputContainer: s.inputContainer,
      root: clsx(s.box, className),
    }

    return (
      <div className={classNames.root}>
        <div className={classNames.inputContainer}>
          <input
            className={classNames.input}
            id={`id_${label}`}
            onKeyDown={handleKeyDown}
            ref={ref}
            required
            type={'text'}
            {...rest}
          />
          {label && (
            <Typography
              as={'label'}
              className={s.label}
              htmlFor={`id_${label}`}
              variant={'caption'}
            >
              {label}
            </Typography>
          )}
        </div>
        {showError && (
          <Typography className={s.errorMessage} variant={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
