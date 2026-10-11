import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Search as SearchIcon } from "lucide-react"

interface HeaderProps {
  variant?: "landing" | "app"
  onSearchClick?: () => void
}

const Header = ({ variant = "landing", onSearchClick }: HeaderProps) => {
  const [language, setLanguage] = useState("english")
  const navigate = useNavigate()

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <div className="flex items-center gap-8">
        <Link to="/" className="inline-block transition hover:opacity-90">
          <img src="/Netflix.svg" alt="Netflix" className="w-28 md:w-36" />
        </Link>

        {variant === "app" && (
          <nav className="hidden items-center gap-5 text-sm font-medium text-neutral-300 md:flex">
            <Link to="/browse" className="text-white hover:text-neutral-200">
              Home
            </Link>
            <Link to="/browse" className="hover:text-neutral-200">
              TV Shows
            </Link>
            <Link to="/browse" className="hover:text-neutral-200">
              Movies
            </Link>
            <Link to="/browse" className="hover:text-neutral-200">
              New & Popular
            </Link>
            <Link to="/browse" className="hover:text-neutral-200">
              My List
            </Link>
          </nav>
        )}
      </div>

      <div className="flex items-center gap-4">
        {variant === "landing" ? (
          <>
            <select
              name="language"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-md border border-neutral-600 bg-black/60 px-3 py-1.5 text-sm text-white outline-none focus:border-neutral-400"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>

            <button
              type="button"
              onClick={() => navigate("/browse")}
              className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
            >
              Sign In
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            {onSearchClick && (
              <button
                type="button"
                onClick={onSearchClick}
                className="text-neutral-300 transition hover:text-white"
                title="Search"
              >
                <SearchIcon className="size-5" />
              </button>
            )}

            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-red-600 flex items-center justify-center font-bold text-sm text-white select-none">
                U
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
