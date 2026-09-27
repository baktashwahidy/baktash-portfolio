"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 20);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const sectionLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#client-feedback" },
    { label: "Contact", href: "#contact" },
  ];

  const ecosystemLinks = siteConfig.nav.filter(
    (item) => item.ecosystem || item.label === "Hire me",
  );

  const menuItems = [...sectionLinks, ...ecosystemLinks];

  const getArrowColor = (label: string) => {
    if (label === "Academy") {
      return "text-cobalt";
    }

    if (label === "Shop") {
      return "text-[#FF5833]";
    }

    if (label === "Hire me") {
      return "text-[#14A800]";
    }

    return "text-quiet";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled || isOpen ? "bg-canvas" : "bg-transparent"
      }`}
    >
      {/* Header */}
      <div className="page-shell relative z-[70] flex h-[72px] items-center justify-between border-b border-ink/15 bg-canvas sm:h-[80px] lg:h-[84px]">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-[80] text-[15px] font-bold uppercase tracking-[-0.06em]"
        >
          Baktash<span className="text-cobalt">.</span>
        </Link>

        {/* Menu Button */}
        <button
          type="button"
          className="relative z-[80] grid h-10 w-10 place-items-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X
              size={21}
              strokeWidth={1.5}
              aria-hidden
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={1.5}
              aria-hidden
            />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-50 flex overflow-y-auto overscroll-contain bg-canvas px-5 pb-8 pt-2 sm:top-[80px] sm:px-8 sm:pt-2 lg:top-[84px] lg:pt-2"
          >
            <div className="flex min-h-full w-full flex-col">
              <nav
                aria-label="Main navigation"
                className="flex flex-col"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -15,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: reduceMotion
                        ? 0
                        : 0.08 + index * 0.045,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {item.label === "Hire me" ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="flex items-center justify-between border-b border-ink/20 py-3 text-[clamp(1.6rem,5vw,2.8rem)] font-bold tracking-display"
                      >
                        {item.label}

                        <ArrowUpRight
                          aria-hidden
                          className={getArrowColor(item.label)}
                          size={24}
                          strokeWidth={1.3}
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between border-b border-ink/20 py-3 text-[clamp(1.6rem,5vw,2.8rem)] font-bold tracking-display"
                      >
                        {item.label}

                        {item.ecosystem ? (
                          <ArrowUpRight
                            aria-hidden
                            className={getArrowColor(item.label)}
                            size={24}
                            strokeWidth={1.3}
                          />
                        ) : (
                          <span className="h-6 w-6" />
                        )}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex items-end justify-between gap-6 pt-8">
                <p className="eyebrow max-w-36 leading-relaxed">
                  Independent design practice
                  <br />
                  Dubai · Worldwide
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-link"
                >
                  Email me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}