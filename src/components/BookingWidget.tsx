import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { MapPin, ArrowRightLeft, CalendarIcon, User, ChevronDown, Plane, Waypoints } from "lucide-react"

export function BookingWidget() {

  return (
    <div className="relative -mt-20 z-20 px-8 w-full">
      <Card className="bg-white rounded-xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100 border-b-2 border-b-gray-200 p-6">
        <Tabs defaultValue="round" className="w-full flex flex-col gap-0">
          <TabsList className="bg-transparent border-b border-gray-200 rounded-none w-full justify-start h-12 p-0 mb-8 space-x-8 flex flex-row">
            <TabsTrigger 
              value="round" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-red-700 data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none px-0 font-semibold text-gray-500 data-[state=active]:text-red-700 pb-3 -mb-[1px]"
            >
              <ArrowRightLeft className="w-4 h-4 mr-2" />
              Round Trip
            </TabsTrigger>
            <TabsTrigger 
              value="one"
              className="data-[state=active]:border-b-2 data-[state=active]:border-red-700 data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none px-0 font-semibold text-gray-500 data-[state=active]:text-red-700 pb-3 -mb-[1px]"
            >
              <Plane className="w-4 h-4 mr-2" />
              One Way
            </TabsTrigger>
            <TabsTrigger 
              value="multi"
              className="data-[state=active]:border-b-2 data-[state=active]:border-red-700 data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none px-0 font-semibold text-gray-500 data-[state=active]:text-red-700 pb-3 -mb-[1px]"
            >
              <Waypoints className="w-4 h-4 mr-2" />
              Multi-city
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col lg:flex-row gap-4 items-end mb-6 w-full">
            
            <div className="flex w-full lg:w-[35%] gap-2 relative items-end">
              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-1 block">From</label>
                <div className="relative border border-gray-200 rounded-md px-3 py-2 flex items-center gap-3 h-[60px] bg-white">
                  <MapPin className="w-5 h-5 text-red-700" />
                  <div>
                    <div className="font-bold text-sm text-gray-900">Nairobi (NBO)</div>
                    <div className="text-xs text-gray-500">Jomo Kenyatta Intl</div>
                  </div>
                </div>
              </div>

              <button className="absolute left-1/2 -translate-x-1/2 top-[55%] bg-white border border-gray-200 rounded-full p-1.5 shadow-sm z-10 hover:bg-gray-50 transition-colors">
                <ArrowRightLeft className="w-3.5 h-3.5 text-gray-500" />
              </button>

              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-1 block">To</label>
                <div className="relative border border-gray-200 rounded-md px-3 py-2 flex items-center gap-3 h-[60px] bg-white">
                  <MapPin className="w-5 h-5 text-red-700" />
                  <div>
                    <div className="font-bold text-sm text-gray-900">London (LHR)</div>
                    <div className="text-xs text-gray-500">Heathrow Airport</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dates (30%) */}
            <div className="flex w-full lg:w-[30%] gap-2 items-end">
              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-1 block">Departure</label>
                <div className="relative border border-gray-200 rounded-md px-3 py-2 flex items-center gap-3 h-[60px] bg-white">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <input type="date" className="outline-none w-full font-bold text-sm bg-transparent text-gray-900" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
              </div>

              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-1 block">Return</label>
                <div className="relative border border-gray-200 rounded-md px-3 py-2 flex items-center gap-3 h-[60px] bg-white">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <input type="date" className="outline-none w-full font-bold text-sm bg-transparent text-gray-900" defaultValue="2025-05-31" />
                </div>
              </div>
            </div>

            {/* Passengers & Button (35%) */}
            <div className="flex w-full lg:w-[35%] gap-4 items-end">
              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-1 block">Passengers</label>
                <div className="border border-gray-200 rounded-md px-3 py-2 flex items-center justify-between h-[60px] bg-white cursor-pointer">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-bold text-sm text-gray-900">1 Passenger</div>
                      <div className="text-xs text-gray-500">Economy</div>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <Button className="bg-red-700 hover:bg-red-800 text-white font-bold h-[60px] px-8 whitespace-nowrap text-lg rounded-md flex-none">
                Search Flights →
              </Button>
            </div>

          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-semibold text-gray-600">Recent searches:</span>
              <div className="flex gap-4 text-gray-500">
                <span className="hover:text-red-700 cursor-pointer">NBO ↔ DXB</span>
                <span className="hover:text-red-700 cursor-pointer">NBO ↔ JNB</span>
                <span className="hover:text-red-700 cursor-pointer">NBO ↔ AMS</span>
                <span className="hover:text-red-700 cursor-pointer">MBA ↔ NBO</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="miles" />
                <label htmlFor="miles" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Use miles
                </label>
              </div>
              <button className="text-sm font-semibold flex items-center gap-1 hover:text-red-700 transition-colors">
                Advanced Search <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

        </Tabs>
      </Card>
    </div>
  )
}
