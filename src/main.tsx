import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { rootRoutes } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { createSafeRoot } from './utils'
import { queryClient } from './queryClient'
import { Provider } from 'jotai'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import { GlobalError } from './components/error/GlobalError'
import { GlobalLoader } from './components/loading/GlobalLoader'
import { ToastContainer } from 'react-toastify'

const root = createSafeRoot('root')

const router = createBrowserRouter(rootRoutes)

root.render(
  <ErrorBoundary fallback={<GlobalError />}>
    <Suspense fallback={<GlobalLoader />}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <ToastContainer autoClose={2000} />
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </Suspense>
  </ErrorBoundary>,
)
