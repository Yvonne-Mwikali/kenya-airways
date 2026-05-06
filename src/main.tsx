import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// ✅ Create the actual instance
const queryClient = new QueryClient()



// Create router
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
})

// Register router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)