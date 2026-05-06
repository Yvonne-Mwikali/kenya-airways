import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/')({
  component: UserDashboard,
})

function UserDashboard() {
  return (
    <div>
      <h3>User Dashboard</h3>
      <p>Welcome to the user area.</p>
    </div>
  )
}
