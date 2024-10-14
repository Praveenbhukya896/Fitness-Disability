import { Loader } from 'lucide-react'
import { cn } from '../core'

export function GlobalLoader({
  message,
  className,
}: {
  message?: string
  className?: string
}) {
  return (
    <main
      className={cn(
        'bg-white flex flex-col justify-center items-center gap-y-2 h-screen',
        className,
      )}
    >
      <Loader className="h-10 w-14 animate-spin text-blue-950" />
      <p>{message ?? 'Loading...'}</p>
    </main>
  )
}
