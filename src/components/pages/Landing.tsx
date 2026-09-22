import Header from "../Header"
import Hero from "../Hero"
import LandingLayout from "../Layout/LandingLayout"
import Search from "../Search";
import TrendingNow from "../TrendingNow"

const LandingPage = () => {
  return (
    <main className="bg-black text-white">
      <LandingLayout>
        <Header />
        <Hero />
      </LandingLayout>
      <section className="relative mt-4 max-w-7xl mx-auto min-h-[40vh] overflow-hidden px-4 py-8">
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-red-700/20 blur-3xl" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <TrendingNow />
          <Search/>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
