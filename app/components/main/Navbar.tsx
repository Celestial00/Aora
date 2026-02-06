"use client";

import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavDropDown from "./NavDropDown";
import { services } from "@/lib/servicesData.js";

export default function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      <nav
        className="relative w-full flex justify-between text-white items-center mt-3 px-10 py-5 md:px-30 md:py-5 z-[999]"
        onMouseLeave={() => setDesktopOpen(false)}
      >
        <Link href={"/"} className="text-2xl md:text-2xl font-bold uppercase">
          Aora
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div
            className="flex items-center cursor-pointer"
            onMouseEnter={() => setDesktopOpen(true)}
          >
            <ChevronLeft
              className={`transition-transform duration-300 ${
                desktopOpen ? "-rotate-90" : ""
              }`}
            />
            <Link href="/services">Services</Link>
          </div>

          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>

        <NavDropDown open={desktopOpen} />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[1000] bg-black text-white
          transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-between items-center p-6">
          <h1 className="text-4xl font-bold uppercase">Aora</h1>
          <button onClick={() => setMobileOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between items-center w-full text-xl font-medium text-white"
            >
              Services
              <ChevronDown
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="mt-4 space-y-4 pl-4 border-l border-white/20">
                {services.map((service) => (
                  <div key={service.id}>
                    <button
                      onClick={() =>
                        setActiveService(
                          activeService === service.id ? null : service.id,
                        )
                      }
                      className="flex justify-between items-center w-full text-lg text-white/90"
                    >
                      {service.title}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          activeService === service.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeService === service.id && (
                      <ul className="mt-2 ml-4 space-y-3 text-white/70">
                        {service.subServices.map((sub) => (
                          <li key={sub}>
                            <Link
                              href={`/services/${service.id}`}
                              onClick={() => setMobileOpen(false)}
                              className="block hover:text-white transition-colors"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-xl text-white"
          >
            Contact
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="block text-xl text-white"
          >
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}
