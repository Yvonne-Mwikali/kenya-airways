import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BookingWidget } from '@/components/BookingWidget'
import { FeaturesBar } from '@/components/FeaturesBar'
import { PromoSection } from '@/components/PromoSection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <FeaturesBar />
        <PromoSection />
      </main>
    </div>
  )
}
