import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const titles = {
    "/": "Popular Titles",
    "/series": "Popular Series",
    "/movies": "Popular Movies",
  };
  const title = titles[location.pathname] || "Page";

  return (
    <div>
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center px-4 md:px-8 lg:px-16">
        <Link to="/">
          <h1 className="text-2xl font-bold">DEMO Streaming</h1>
        </Link>
        <div>
          <button className="mr-4">Log in</button>
          <button className="bg-black text-white px-4 py-2">
            Start your free trial
          </button>
        </div>
      </header>
      <h2 className="text-2xl font-semibold text-white bg-slate-700 py-4 px-4 md:px-8 lg:px-16">
        {title}
      </h2>
    </div>
  );
}

export default Header;
