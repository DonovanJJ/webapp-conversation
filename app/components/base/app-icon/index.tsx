import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'
import logo from '../icons/shrek.png'
import Image from 'next/image'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      <Image src={logo} alt='image not found' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </span>
  )
}

export default AppIcon
