import { ComponentPropsWithoutRef, ElementType } from 'react'
import { ClipLoader } from 'react-spinners'

import s from './Button.module.scss'

import { Typography } from '../typography'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    isLoading,
    variant = 'primary',
    ...rest
  } = props
  const finalClassName = `${s.button} ${isLoading ? s.loading : ''} ${s[variant]} ${
    fullWidth ? s.fullWidth : ''
  }  ${className}`

  return (
    <Component className={finalClassName} {...rest}>
      {isLoading ? (
        <ClipLoader color={'#fff'} size={20} />
      ) : (
        <Typography className={s.typography} variant={'subtitle2'}>
          {children}
        </Typography>
      )}
    </Component>
  )
}
