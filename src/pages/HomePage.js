import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="pt-8">
      <div className="flex gap-6">
        <div>
          <Link
            to="/series"
            className="bg-zinc-900 text-white flex flex-col items-center justify-center h-48 w-36 hover:opacity-90 border-2 border-transparent hover:border-white p-4"
            style={{
              backgroundImage: "url('/assets/placeholder.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-3xl font-bold">SERIES</p>
          </Link>
          <span>Popular Series</span>
        </div>
        <div>
          <Link
            to="/movies"
            className="bg-zinc-900 text-white flex flex-col items-center justify-center h-48 w-36 hover:opacity-90 border-2 border-transparent hover:border-white p-4"
            style={{
              backgroundImage: "url('/assets/placeholder.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-3xl font-bold">MOVIES</p>
          </Link>
          <span>Popular Movies</span>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
