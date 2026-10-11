import type { ReactNode } from "react"

interface LandingLayoutProps {
  children: ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default LandingLayout
