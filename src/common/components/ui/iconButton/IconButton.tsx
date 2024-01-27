import { ComponentPropsWithoutRef, ComponentRef, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './IconButton.module.scss'

export type IconButtonProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

export const IconButton = forwardRef<ComponentRef<'button'>, IconButtonProps>(
  ({ children, className, ...props }, ref) => {
    const classes = clsx(s.button, className)

    return (
      <button ref={ref} {...props} className={classes}>
        {children}
      </button>
    )
  }
)
