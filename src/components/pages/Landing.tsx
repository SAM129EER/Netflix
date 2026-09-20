import Header from "../Header";
import Hero from "../Hero";

const LandingPage = () => {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Foreground */}
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>

      </section>
    </main>
  );
};

export default LandingPage;