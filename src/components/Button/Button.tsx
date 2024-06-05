import React from 'react'

export type ButtonProps = {
  as?: 'a' | 'button'
  href?: string
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Button: React.FC<ButtonProps> = ({
  as = 'button',
  href,
  icon,
  iconPosition = 'right',
  className = 'flex items-center rounded-full bg-black/80 p-4 font-bold text-white hover:bg-black/90',
  children,
  ...props
}) => {
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  )

  if (as === 'a') {
    return (
      <a href={href} className={className} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={className} {...props}>
      {content}
    </button>
  )
}

export default Button
