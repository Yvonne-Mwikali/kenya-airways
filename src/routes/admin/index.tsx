import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  return (
    <div>
      <h3>Admin Dashboard</h3>
      <p>Welcome to the admin area.</p>
    </div>
  )
}
