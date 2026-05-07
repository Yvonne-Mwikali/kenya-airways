import { Link } from "@tanstack/react-router"
import { User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Book", to: "/" },
  { label: "Manage", to: "/manage" },
  { label: "Check-in", to: "/check-in" },
  { label: "Flight Status", to: "/flight-status" },
  { label: "Travel Info", to: "/travel-info" },
  { label: "Asante Rewards", to: "/rewards" },
  { label: "Help", to: "/help" },
]

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img
          src="/logo.png"
          alt="Kenya Airways"
          className="h-12 md:h-14 w-auto object-contain"
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            activeProps={{
              className: "text-red-700 border-b-2 border-red-700 pb-1",
            }}
            inactiveProps={{
              className:
                "text-gray-800 border-b-2 border-transparent pb-1 hover:text-red-700 hover:border-red-700 transition-all duration-200",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
        {/* Language */}
        <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-red-700 transition-colors">
          EN <ChevronDown className="h-4 w-4" />
        </button>

        {/* User Icon */}
        <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <User className="h-4 w-4 text-gray-600" />
        </div>

        {/* Login Button */}
        <Button className="bg-red-700 hover:bg-red-800 text-white font-bold rounded-md px-6">
          Log in / Sign up
        </Button>
      </div>
    </header>
  )
}
