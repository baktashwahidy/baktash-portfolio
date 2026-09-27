"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { HeroPattern } from "@/components/home/HeroPattern";
import { TrustedBySection } from "@/components/home/TrustedBySection";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (
      !hero ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        yPercent: 115,
        duration: 1.08,
        stagger: 0.1,
        delay: 0.16,
        ease: "power4.out",
      });

      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 15,
        duration: 0.75,
        delay: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      });

      const parallaxItems =
        gsap.utils.toArray<HTMLElement>("[data-parallax]");

      const onMove = (event: MouseEvent) => {
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const bounds = hero.getBoundingClientRect();

        const x =
          (event.clientX - bounds.left) / bounds.width - 0.5;

        const y =
          (event.clientY - bounds.top) / bounds.height - 0.5;

        parallaxItems.forEach((item) => {
          const depth = Number(item.dataset.parallax ?? 1);

          gsap.to(item, {
            x: x * depth * 30,
            y: y * depth * 30,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      hero.addEventListener("mousemove", onMove);

      return () => {
        hero.removeEventListener("mousemove", onMove);
      };
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative isolate flex min-h-[760px] overflow-hidden pb-8 pt-28 sm:min-h-[840px] sm:pb-10 sm:pt-32 lg:min-h-screen lg:pt-35"
    >
      <HeroPattern containerRef={heroRef} />

      {/* Orange square */}
      <div
        aria-hidden
        data-parallax="1.35"
        className="absolute right-[8%] top-[30%] z-[1] hidden h-4 w-4 bg-ember sm:block"
      />

      {/* Blue plus */}
      <div
        aria-hidden
        data-parallax="1.4"
        className="absolute bottom-[34%] right-[20%] z-[1] hidden text-[17px] font-bold leading-none tracking-[0.2em] text-cobalt lg:block"
      >
        +
      </div>

      {/* Blue diamond */}
      <div
        aria-hidden
        data-parallax="0.85"
        className="absolute bottom-[16%] left-[7%] z-[1] hidden h-16 w-16 rotate-45 border border-cobalt sm:block"
      />

      <div className="page-shell relative z-10 flex w-full flex-col">
        {/* Top information */}
        <div className="grid grid-cols-1">
          <p
            data-hero-fade
            className="eyebrow max-w-48 leading-[1.55]"
          >
            Baktash Wahidy
            <br />
            Independent designer
            <br />
            Dubai · Working worldwide
          </p>
        </div>

        {/* Main heading */}
        <div className="relative z-10 mt-8 pt-0 sm:mt-10 lg:mt-12">
          <h1
            aria-label="Baktash"
            className="display-xl relative z-10"
          >
            {/* BAK */}
            <span className="block overflow-hidden pb-[0.13em]">
              <span
                data-hero-reveal
                className="block"
              >
                BAK
              </span>
            </span>

            {/* TASH + description */}
            <div className="relative block pb-[0.13em]">
              <span className="relative inline-block pl-[0.23em]">
                {/* TASH */}
                <span className="block overflow-hidden pb-[0.12em]">
                  <span
                    data-hero-reveal
                    className="block"
                  >
                    TASH
                    <span className="text-cobalt">.</span>
                  </span>
                </span>

                {/* Description beside blue square */}
                <span
                  data-hero-fade
                  className="absolute bottom-[0.8em] left-[calc(100%+2rem)] hidden whitespace-nowrap text-left text-[16px] font-bold uppercase leading-[1.35] tracking-[0.07em] text-ink/70 lg:block"
                >
                  Brand identity & Social media designer
                  <br />
                  Arabic & English brands
                </span>
              </span>
            </div>
          </h1>
        </div>

        {/* Trusted companies */}
        <div className="mt-10 border-t border-ink/25 pt-8 sm:mt-14 sm:pt-10">
          <TrustedBySection />
        </div>
      </div>
    </section>
  );
}