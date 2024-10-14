import { AlertTriangle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export function GlobalError(): JSX.Element {
  const navigate = useNavigate()
  return (
    <main className="h-screen flex justify-center items-center">
      <Card className="w-[25%] border-0 shadow-lg flex flex-col justify-center items-center py-16 gap-y-6">
        <section className="flex flex-row items-center space-x-2">
          <AlertTriangle className="w-10 h-10 text-gray-500" />
          <p className="text-xl text-gray-700 tracking-widest">
            Something went wrong!
          </p>
        </section>
        <section>
          <Button
            onClick={() => navigate(-1)}
            className="text-lg bg-red-400 text-white py-1 px-4"
          >
            Back
          </Button>
        </section>
      </Card>
    </main>
  )
}
