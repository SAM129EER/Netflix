import React from "react"

const LandingLayout = ({
  children,
  
}: {
  children: React.ReactNode

}) => {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default LandingLayout
