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
          <img src="/Netflix.svg" alt="Netflix" className="w-30 md:w-20" />
        </Link>

        {variant === "app" && (
          <nav className="hidden items-center gap-5 text-sm font-medium text-neutral-300  md:flex">
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
            <div className="relative w-26">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full appearance-none rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-3 text-left text-sm text-neutral-200 shadow-sm transition-colors focus:border-red-500 focus:outline-none"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="spanish">Spanish</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

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
              <div className="flex size-8 items-center justify-center rounded bg-red-600 text-sm font-bold text-white select-none">
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
