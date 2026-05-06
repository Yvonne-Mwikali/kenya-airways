import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plane } from "lucide-react"

export function PromoSection() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Asante Rewards Banner */}
        <Card className="relative overflow-hidden bg-[#1a1a1a] text-white p-8 border-0 min-h-[250px] flex flex-col justify-center rounded-xl">
          {/* Fake window background */}
          <div className="absolute right-0 top-0 bottom-0 w-[50%] bg-gradient-to-l from-orange-500/20 to-transparent">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-64 border-[10px] border-[#2a2a2a] rounded-[60px] bg-gradient-to-b from-orange-200 to-orange-400 opacity-60 overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-white/20 blur-sm" />
            </div>
          </div>
          
          <div className="relative z-10 max-w-[60%]">
            <div className="text-yellow-500 text-sm font-semibold mb-2">Asante Rewards</div>
            <h3 className="text-3xl font-bold mb-3">Fly more. Earn more.</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Join Asante Rewards and enjoy exclusive benefits every time you fly.
            </p>
            <Button variant="outline" className="border-gray-500 text-black hover:bg-white hover:text-black transition-colors rounded-none px-6">
              Join Now
            </Button>
          </div>
        </Card>

        {/* Explore Destinations Banner */}
        <Card className="relative overflow-hidden bg-orange-50 p-8 border-0 min-h-[250px] flex flex-col justify-center rounded-xl">
          
          <div className="absolute right-[-20%] top-[10%] w-[80%] opacity-20 pointer-events-none">
            {/* Simple Map Placeholder SVG */}
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-red-900">
              <path d="M50,100 Q100,50 150,100 T250,100 T350,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="50" cy="100" r="4" />
              <circle cx="150" cy="100" r="4" />
              <circle cx="250" cy="100" r="4" />
              <circle cx="350" cy="100" r="4" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[60%]">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Explore our destinations</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              From Africa to the world and beyond. Where will we take you?
            </p>
            <Button variant="outline" className="border-red-200 text-red-700 bg-white hover:bg-red-50 hover:text-red-800 transition-colors rounded-none px-6 shadow-sm">
              View Destinations
            </Button>
          </div>

          <div className="absolute bottom-8 right-1/3 text-gray-400 rotate-[-15deg]">
            <Plane className="w-6 h-6" />
          </div>
        </Card>

      </div>
    </div>
  )
}
