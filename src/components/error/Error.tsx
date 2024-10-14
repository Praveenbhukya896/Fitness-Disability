import { AlertTriangle } from 'lucide-react'

export function ErrorElement({ message }: { message?: string }): JSX.Element {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <section className="flex flex-row justify-center items-center gap-x-4">
        <AlertTriangle className="h-10 w-10 text-red-600" />
        <h1 className="font-extrabold text-2xl">
          {message ?? 'Something went wrong!'}
        </h1>
      </section>
    </main>
  )
}
