import { SprinkleBackground } from "@/components/hero"
import clsx from "clsx"

export function Heading({ heading, children = null, className = "" }) {
  return (
    <div className="isolate bg-white">
      <SprinkleBackground />
      <div
        className={clsx(
          "mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-12 lg:px-8",
          className
        )}
      >
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-900">{heading}</h1>
          <div className="mx-auto mt-5 max-w-xl text-xl text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}