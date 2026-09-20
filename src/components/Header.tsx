
const Header = () => {
  return (
   <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <img
        src="/Netflix.svg"
        alt="Netflix"
        className="w-36"
      />

      <div className="flex items-center gap-4">
        <button className="rounded-md border border-neutral-500 bg-black/40 px-4 py-2">
          English
        </button>

        <button className="rounded-md bg-red-600 px-5 py-2 font-semibold">
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Header
