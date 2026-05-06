import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: UserLayout,
})

function UserLayout() {
  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">User Section</h2>
      <Outlet />
    </div>
  )
}
