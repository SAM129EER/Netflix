import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const Hero = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // When backend auth is connected, pass email to registration state
    navigate("/browse")
  }

  return (
    <div className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          So much to watch,
          <br />
          matched to you
        </h1>

        <p className="mt-5 text-lg font-medium text-neutral-200 md:text-xl">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="mt-8 text-base text-neutral-300 md:text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="min-w-0 flex-1 rounded-md border border-neutral-600 bg-black/60 px-4 py-3.5 text-white placeholder:text-neutral-400 outline-none transition focus:border-white focus:ring-1 focus:ring-white"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-lg font-bold text-white transition hover:bg-red-700 active:scale-95"
          >
            <span>Get Started</span>
            <ChevronRight className="size-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero