import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  let pathname = usePathname()

  return (
    <nav className={clsx('text-base lg:text-base', className)}>
      <ul role="list" className="space-y-5">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium tracking-wide text-slate-900 dark:text-slate-100">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-3 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-2 lg:space-y-2 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-2.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === pathname
                        ? 'font-semibold tracking-wide text-sky-500 before:bg-sky-500'
                        : 'tracking-wide text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-300 dark:before:bg-slate-500 dark:hover:text-slate-200',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
