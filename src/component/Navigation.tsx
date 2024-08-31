import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <header className="relative bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div id="logo">
          <Link href="/portfolio">
            <span className="text-2xl font-bold hover:text-gray-400">
              Koh Hansaem
            </span>
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="#about">
            <span className="hover:text-gray-400">&lt; About /&gt;</span>
          </Link>
          <Link href="#skills">
            <span className="hover:text-gray-400">&lt; Skills /&gt;</span>
          </Link>
          <Link href="#projects">
            <span className="hover:text-gray-400">&lt; Projects /&gt;</span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-gray-400">&lt; Contact /&gt;</span>
          </Link>
        </nav>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10">
        <svg
          className="block w-full h-24 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
          />
        </svg>
      </div>
    </header>
  );
};

export default Navigation;
