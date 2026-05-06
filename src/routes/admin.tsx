import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <div className="p-4 bg-red-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Admin Section</h2>
      <Outlet />
    </div>
  )
}
