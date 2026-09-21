import Header from "../Header"
import Hero from "../Hero"
import LandingLayout from "../Layout/LandingLayout"

const LandingPage = () => {
  return (
    <main className="bg-black text-white">
      <LandingLayout>
        <Header />
        <Hero />
      </LandingLayout>
      <section>
        <h1>hellwo how are you</h1>
      </section>
    </main>
  )
}

export default LandingPage
