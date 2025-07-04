import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageAsset from "../assets/imageAsset";

const navItems = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Why Us", id: "whyus" },
  { name: "Testimonials", id: "testimonials" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% of the section must be visible
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm z-50 fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={imageAsset.logo_long} alt="Logo" className="w-28" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-gray-600 hover:text-secondary font-medium ${
                  active === item.id ? "text-secondary" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-secondary text-white font-medium py-2 px-4 rounded-md hover:bg-secondary/75 transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-secondary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-gray-600 hover:bg-white hover:text-secondary ${
                  active === item.id ? "text-secondary" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full text-left px-3 py-2 bg-secondary text-white rounded-md hover:bg-secondary/75 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
