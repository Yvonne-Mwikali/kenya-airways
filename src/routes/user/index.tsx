import { createFileRoute } from '@tanstack/react-router'
import { Search, Filter, Calendar, Plus, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export const Route = createFileRoute('/user/')({
  component: UserDashboard,
})

const bookings = [
  { ref: 'KQ2G7H', route: 'NBO → LHR', date: '24 May 2025', passenger: 'John Doe', status: 'Confirmed', amount: 'KES 55,000' },
  { ref: 'KQ8M3P', route: 'NBO → DXB', date: '20 May 2025', passenger: 'Mary Wanjiku', status: 'Ticketed', amount: 'KES 42,500' },
  { ref: 'KQ1X9Z', route: 'NBO → JNB', date: '15 May 2025', passenger: 'Peter Mwangi', status: 'Cancelled', amount: 'KES 30,200' },
  { ref: 'KQ5L2D', route: 'NBO → HRE', date: '10 May 2025', passenger: 'Grace Alkinyi', status: 'Completed', amount: 'KES 28,750' },
  { ref: 'KQ7F4J', route: 'NBO → AMS', date: '05 May 2025', passenger: 'James Otieno', status: 'Confirmed', amount: 'KES 60,000' },
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'Confirmed':
      return <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 font-semibold border-0">Confirmed</Badge>
    case 'Ticketed':
      return <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 font-semibold border-0">Ticketed</Badge>
    case 'Cancelled':
      return <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-100 font-semibold border-0">Cancelled</Badge>
    case 'Completed':
      return <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-semibold border-0">Completed</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

function UserDashboard() {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 min-h-[800px]">
      
      {/* Title block */}
      <div className="inline-block bg-red-700 text-white px-6 py-2.5 rounded-md rounded-tl-xl font-bold text-lg mb-8 shadow-sm relative -top-8 -left-8 rounded-tr-none rounded-bl-none">
        My Bookings
      </div>

      {/* Action Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 mt-[-16px]">
        <div className="relative w-full md:w-[400px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search by booking ref, name or route" className="pl-10 h-10 border-gray-200" />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="h-10 text-gray-600 border-gray-200">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" className="h-10 text-gray-600 border-gray-200">
            01 May - 31 May 2025 <Calendar className="h-4 w-4 ml-2" />
          </Button>
          <Button className="h-10 bg-red-700 hover:bg-red-800 text-white px-6 font-semibold">
            <Plus className="h-4 w-4 mr-2" /> New Booking
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-100 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">Booking Reference</TableHead>
              <TableHead className="font-semibold text-gray-900">Route</TableHead>
              <TableHead className="font-semibold text-gray-900">Departure</TableHead>
              <TableHead className="font-semibold text-gray-900">Passenger</TableHead>
              <TableHead className="font-semibold text-gray-900">Status</TableHead>
              <TableHead className="font-semibold text-gray-900">Amount</TableHead>
              <TableHead className="font-semibold text-gray-900 text-right px-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='border-t-gray-100'>
            {bookings.map((booking, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-gray-900 px-6 py-4">{booking.ref}</TableCell>
                <TableCell className="text-gray-600">{booking.route}</TableCell>
                <TableCell className="text-gray-600">{booking.date}</TableCell>
                <TableCell className="text-gray-600">{booking.passenger}</TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell className="text-gray-600 font-medium">{booking.amount}</TableCell>
                <TableCell className="text-right px-6">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between pb-4">
        <div className="text-sm text-gray-500 font-medium">
          Showing 1 to 5 of 25 bookings
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="border border-gray-200 text-gray-500" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-red-700 text-white hover:bg-red-800 hover:text-white border-none font-bold">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-gray-200 text-gray-600">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-gray-200 text-gray-600">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-gray-200 text-gray-600">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-gray-200 text-gray-600">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="border border-gray-200 text-gray-500" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </div>
  )
}
