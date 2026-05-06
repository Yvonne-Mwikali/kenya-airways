import { Link } from "@tanstack/react-router"
import { User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <span className="text-red-700 font-extrabold text-2xl tracking-tighter italic">Kenya Airways</span>
        <span className="text-gray-500 text-xs mt-2 italic hidden md:block">The Pride of Africa</span>
      </div>

      <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-800">
        <Link to="/" className="text-red-700 border-b-2 border-red-700 pb-1">Book</Link>
        <Link to="/" className="hover:text-red-700 pb-1 border-b-2 border-transparent hover:border-red-700 transition-colors">Manage</Link>
        <Link to="/" className="hover:text-red-700 pb-1 border-b-2 border-transparent hover:border-red-700 transition-colors">Check-in</Link>
        <Link to="/" className="hover:text-red-700 pb-1 border-b-2 border-transparent hover:border-red-700 transition-colors">Flight Status</Link>
        <Link to="/" className="hover:text-red-700 pb-1 border-b-2 border-transparent hover:border-red-700 transition-colors">Travel Info</Link>
        <Link to="/" className="hover:text-red-700 pb-1 border-b-2 border-transparent hover:border-red-700 transition-colors">Asante Rewards</Link>
        <Link to="/" className="hover:text-red-700 pb-1 border-b-2 border-transparent hover:border-red-700 transition-colors">Help</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-sm font-semibold">
          EN <ChevronDown className="h-4 w-4" />
        </button>
        <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <User className="h-4 w-4 text-gray-600" />
        </div>
        <Button className="bg-red-700 hover:bg-red-800 text-white font-bold rounded-md px-6">
          Log in / Sign up
        </Button>
      </div>
    </header>
  )
}
