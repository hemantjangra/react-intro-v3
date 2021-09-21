import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full text-center p-10 mb-10 bg-gradient-to-b from-red-900 to-red-300">
      <Link className="text-6xl text-white hover:text-gray-200" to="/">
        Adopt Me!
      </Link>
    </header>
  );
};
