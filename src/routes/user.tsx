import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import { Home, Briefcase, CheckSquare, Award, User, Wallet, HelpCircle, LogOut, ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/user')({
  component: UserLayout,
})

function UserLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] text-white flex flex-col shadow-xl z-20">
        {/* Logo */}
        <div className="h-20 flex items-center px-6 pt-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center font-bold text-xl italic tracking-tighter shadow-lg shadow-red-900/50">
              K
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-medium text-sm">Overview</span>
          </Link>
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-700 text-white shadow-md shadow-red-900/20 transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium text-sm">My Bookings</span>
          </Link>
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
            <CheckSquare className="w-5 h-5" />
            <span className="font-medium text-sm">Check-in</span>
          </Link>
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
            <Award className="w-5 h-5" />
            <span className="font-medium text-sm">Asante Rewards</span>
          </Link>
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
            <User className="w-5 h-5" />
            <span className="font-medium text-sm">Profile</span>
          </Link>
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
            <Wallet className="w-5 h-5" />
            <span className="font-medium text-sm">Wallet</span>
          </Link>
        </nav>

        {/* Bottom Nav */}
        <div className="p-4 border-t border-gray-800 space-y-1">
          <Link to="/user" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium text-sm">Support</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors text-left">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white flex items-center justify-between px-8 z-10 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)]">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo.jpeg" alt="Kenya Airways" className="h-10 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-red-700 transition-colors">
              EN <ChevronDown className="h-4 w-4" />
            </button>
            <div className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 cursor-pointer hover:border-gray-300 hover:bg-gray-100 transition-colors">
              <User className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
