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
  isDisabled?: boolean
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
      isDisabled = false,
      stretch = false,

      className = clsx(
        'flex items-center rounded-full p-4 font-bold text-white transition-colors',
        isDisabled
          ? 'cursor-not-allowed bg-black/10 dark:bg-black/20 dark:text-white/40 hover:dark:bg-black/20 text-black/40 hover:bg-black/10'
          : 'hover:bg-black/90 bg-black/80',
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
        disabled={isDisabled}
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
