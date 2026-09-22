import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const searchQuery = query.trim();

    if (!searchQuery) return;

    console.log("Searching for:", searchQuery);
    setQuery("")
  };

  return (
    <section className="relative flex min-h-[40vh] items-center justify-center px-4 py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Search content */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Search Movies You Like
        </h1>

        <p className="mt-3 text-neutral-400">
          Find your next movie to watch
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-8 flex w-full max-w-2xl gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search for movies..."
            className="
              min-w-0
              flex-1
              rounded-lg
              border
              border-neutral-700
              bg-neutral-900/80
              px-4
              py-3.5
              text-white
              outline-none
              placeholder:text-neutral-500
              transition
              focus:border-red-600
              focus:ring-1
              focus:ring-red-600
            "
          />

          <button
            type="button"
            onClick={handleSearch}
            className="
              rounded-lg
              bg-red-600
              px-7
              py-3.5
              font-semibold
              text-white
              transition
              hover:bg-red-700
              active:scale-95
            "
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;