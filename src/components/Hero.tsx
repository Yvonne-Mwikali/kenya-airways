export function Hero() {
  return (
    <div className="relative w-full h-[450px] bg-sky-100 overflow-hidden flex items-center">
      {/* Background approximation */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white/50 opacity-80" />
      
      {/* Decorative Clouds/Plane Placeholder */}
      <div className="absolute right-0 top-10 w-[60%] h-full opacity-90 hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.8) 0%, transparent 60%)'
        }}>
        {/* Placeholder for the plane image */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-red-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-8 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Fly the Pride <br /> of Africa
        </h1>
        <p className="text-xl text-gray-800 mb-6 font-medium">
          Seamless journeys. Inspired by Africa.
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white/60 px-3 py-1.5 rounded-full inline-flex backdrop-blur-sm shadow-sm border border-white/40">
          <span className="text-yellow-500 text-lg">🏆</span>
          Africa's Leading Airline 2024
        </div>
      </div>
    </div>
  )
}
