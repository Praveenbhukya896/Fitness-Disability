import {
    Outlet,
    useNavigate,
  } from 'react-router-dom'
  import { clsx } from 'clsx'
  import { CircleChevronLeft } from 'lucide-react'
  
  export function OutletContainer(): JSX.Element {

    return (
      <div className="flex w-full h-screen ">
        <div className="flex flex-col font-Golos bg-[#F5F5F5] w-full sm:hidden">
          <Header />
            <Outlet />
        </div>
      </div>
    )
  }
  
  const Header = () => {
    const navigate = useNavigate()

    return (
      <div className={clsx('flex justify-between pt-2 px-1 sm:-mr-1  gap-2')}>
            <div className="relative flex items-center">
              <button
                className="border outline-none rounded-lg px-2 bg-white hidden sm:block"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button
                className="outline-none rounded-lg px-2  sm:hidden"
                title="back"
                onClick={() => navigate(-1)}
              >
                <CircleChevronLeft />
              </button>
            </div>
      </div>
    )
  }
  