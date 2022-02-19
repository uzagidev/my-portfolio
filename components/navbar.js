import React from "react";

export default function NavBar(props) {
  return (
    <nav className="navbar shadow-sm bg-purple-500 bg-opacity-50">
      <div className="container mx-auto h-full flex items-center justify-center font-bold">
        <div className="h-full w-1/4 flex items-center justify-center">
          <a href="/" className="navbar-brand">
            <span className="text-red-500 text-2xl">&lt;</span>
            <span className="text-gray-100 text-xl">baodanh</span>
            <span className="text-red-500 text-2xl">&frasl;&gt;</span>
          </a>
        </div>
        <div className="h-full w-1/4 ml-auto flex items-center justify-around">
          <a
            href="/"
            className="nav-link text-gray-300 hover:text-white hover:bg-purple-700 bg-opacity-10 rounded p-1"
          >
            About me
          </a>
          <a
            href="/"
            className="nav-link text-gray-300 hover:text-white hover:bg-purple-700 bg-opacity-10 rounded p-1"
          >
            Projects
          </a>
          <a
            href="/"
            className="nav-link text-gray-300 hover:text-white hover:bg-purple-700 bg-opacity-10 rounded p-1"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
