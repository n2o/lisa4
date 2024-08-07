import clsx from "clsx"
import Link from "next/link"

export function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-md inline-block rounded-lg py-1 px-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 duration-200",
        className,
      )}
    >
      {children}
    </Link>
  )
}
