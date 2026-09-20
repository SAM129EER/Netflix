const Hero = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          So much to watch,
          <br />
          matched to you
        </h1>

        <p className="mt-6 text-xl font-semibold">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="mt-10 text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mx-auto mt-5 flex  max-w-2xl gap-2 ">
          <input
            type="email"
            placeholder="Email address"
            className="min-w-0 flex-1 rounded-md border border-neutral-500 bg-black/50 px-4 py-4 text-white placeholder:text-neutral-300"
          />

          <button className="rounded-md bg-red-600 px-7 py-4 text-xl font-bold hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;