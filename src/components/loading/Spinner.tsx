import { Loader2 } from 'lucide-react'
import { cn } from '../core'

export function Spinner({ className }: { className?: string }) {
  return (
    <main className={cn('flex justify-center items-center h-full', className)}>
      <Loader2 className="h-14 w-14 animate-spin text-black" />
    </main>
  )
}
