import Header from "../Header"
import Hero from "../Hero"
import LandingLayout from "../Layout/LandingLayout"
import TrendingNow from "../TrendingNow";

const LandingPage = () => {
  return (
    <main className="bg-black text-white">
      <LandingLayout>
        <Header />
        <Hero />
      </LandingLayout>
      <section className="mt-4 p-4 min-h-[40vh]">
        <TrendingNow/>
      </section>
    </main>
  )
}

export default LandingPage
