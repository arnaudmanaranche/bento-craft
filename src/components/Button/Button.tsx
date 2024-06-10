import clsx from 'clsx'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
} from 'react'
import { forwardRef } from 'react'

export type ButtonProps = {
  as?: 'a' | 'button'
  children: ReactNode
  className?: string
  stretch?: boolean
  href?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      as = 'button',
      href,
      stretch = false,

      className = clsx(
        'flex items-center rounded-full bg-black/80 p-4 font-bold text-white hover:bg-black/90 transition-colors',
        stretch ? 'w-full justify-center' : null
      ),
      icon,
      iconPosition = 'right',
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    )

    if (as === 'a') {
      return (
        <a
          href={href}
          className={className}
          ref={ref as Ref<HTMLAnchorElement>}
          {...props}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        className={className}
        ref={ref as Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
