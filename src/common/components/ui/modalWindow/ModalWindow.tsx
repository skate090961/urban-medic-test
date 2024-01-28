import { PropsWithChildren } from 'react'

import { SharedSvgSelector } from '@/common/assets/icons/shared/SharedSvgSelector'
import { Typography } from '@/common/components/ui'
import { IconButton } from '@/common/components/ui/iconButton/IconButton'

import s from './ModalWindow.module.scss'

type ModalWindowProps = {
  open: boolean
  setOpen: (value: boolean) => void
  title: string
} & PropsWithChildren

//TODO: add animation
export function ModalWindow({ children, open, setOpen, title }: ModalWindowProps) {
  const handleCloseClick = () => {
    setOpen(false)
  }

  return (
    <>
      {open && (
        <>
          <div className={`${s.blur} ${open ? s.blurOpen : s.blurClosed}`}></div>
          <div className={s.root}>
            <div className={`${s.modal} ${open ? '' : s.closed}`}>
              <Typography as={'h2'} variant={'h2'}>
                {title}
              </Typography>
              <div className={s.children}>{children}</div>
              <IconButton className={s.button} onClick={handleCloseClick}>
                <SharedSvgSelector icon={'close'} />
              </IconButton>
            </div>
          </div>
        </>
      )}
    </>
  )
}
