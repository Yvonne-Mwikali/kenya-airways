export function Hero() {
  return (
    <div 
      className="relative w-full h-[450px] bg-cover bg-center overflow-hidden flex items-center"
      style={{ backgroundImage: 'url(/Hero.jpeg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent pointer-events-none" />

      <div className="relative z-10 px-8 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Fly the Pride <br /> of Africa
        </h1>
        <p className="text-xl text-gray-800 mb-6 font-medium">
          Seamless journeys. Inspired by Africa.
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 bpx-3 py-1.5  inline-flex ">
          <span className="text-yellow-500 text-lg">🏆</span>
          Africa's Leading Airline 2024
        </div>
      </div>
    </div>
  )
}
