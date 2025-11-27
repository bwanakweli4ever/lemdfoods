"use client";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "#products" },
    { name: "Countries", href: "#countries" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      {/* Top Bar - Contact Info */}
      <div
        className="text-white py-2"
        style={{
          background: "#085078",
          backgroundImage: "linear-gradient(to right, #085078, #85d8ce)",
        }}
      >
        <div className="container mx-auto px-1 sm:px-4 flex flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-sm">
          <div className="flex items-center gap-3 sm:gap-6 ">
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +1 (945) 284-5679
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              info@lemdfoods.com
            </span>
          </div>
          {/* Currency */}
          <div className="flex items-center gap-4">
            <span className="text-xs">Currency: </span>
            <div className="flex gap-2">
              {["USD", "EUR", "GBP"].map((curr) => (
                <span
                  key={curr}
                  className="px-2 py-1 bg-emerald-700 rounded text-xs"
                >
                  {curr}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md relative sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" aria-label="Lem-D Foods - Home">
                <Image
                  src="/images/lemd_logo.png"
                  alt="Lem-D Foods - Tropical Foods, Spices & Beverages"
                  width={170}
                  height={60}
                  className="rounded-lg"
                  priority
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className=" hidden md:flex items-center gap-6 overflow-x-auto whitespace-nowrap text-sm md:text-base">
              {navLinks.map((link: any) => {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#666]" />
              ) : (
                <Menu className="h-6 w-6 text-[#666]" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="bg-white z-20 h-fit  fixed top-45 shadow-md w-full left-0 ">
          {mobileMenuOpen && (
            <div className=" md:hidden border-t">
              <nav className="flex flex-col space-y-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#666] hover:text-[#02721e] transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
