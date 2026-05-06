import { Armchair, Luggage, Utensils, PlaySquare, Award } from "lucide-react"

export function FeaturesBar() {
  const features = [
    {
      icon: <Armchair className="w-6 h-6 text-red-700" />,
      title: "Spacious Comfort",
      desc: "Enjoy more space in every class"
    },
    {
      icon: <Luggage className="w-6 h-6 text-red-700" />,
      title: "Generous Baggage",
      desc: "More baggage allowance for your journey"
    },
    {
      icon: <Utensils className="w-6 h-6 text-red-700" />,
      title: "Delicious Dining",
      desc: "Savor award-winning meals onboard"
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-red-700" />,
      title: "In-flight Entertainment",
      desc: "Enjoy hundreds of movies & more"
    },
    {
      icon: <Award className="w-6 h-6 text-red-700" />,
      title: "Asante Rewards",
      desc: "Earn miles and unlock exclusive benefits"
    }
  ]

  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-gray-100 pb-10">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="mt-1">{feature.icon}</div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">{feature.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
