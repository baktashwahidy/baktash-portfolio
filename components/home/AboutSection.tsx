"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tools = [
  {
    name: "Adobe Illustrator",
    logo: "/icons/tools/adobe-illustrator.svg",
  },
  {
    name: "Figma",
    logo: "/icons/tools/figma.svg",
  },
  {
    name: "Adobe Photoshop",
    logo: "/icons/tools/adobe-photoshop.svg",
  },
  {
    name: "Adobe InDesign",
    logo: "/icons/tools/adobe-indesign.svg",
  },
  {
    name: "Affinity Designer",
    logo: "/icons/tools/affinity-designer.svg",
  },
  {
    name: "Canva Pro",
    logo: "/icons/tools/canva-pro.svg",
  },
];

export function AboutSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const characters =
      title.querySelectorAll<HTMLElement>("[data-char]");

    if (!characters.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      gsap.set(characters, {
        yPercent: 0,
        opacity: 1,
      });

      return;
    }

    gsap.set(characters, {
      yPercent: 115,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(characters, {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.025,
          ease: "power4.out",
        });

        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, []);

  const renderCharacters = (text: string) =>
    Array.from(text).map((character, index) => (
      <span
        key={`${character}-${index}`}
        data-char
        className="inline-block"
      >
        {character === " " ? "\u00A0" : character}
      </span>
    ));

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#dedbd2] py-[clamp(5rem,9vw,8.5rem)]"
    >
      <div className="page-shell">
        <SectionHeading
          label=""
          className="border-t-0 pt-0"
        >
          <Reveal>
            <h2
              ref={titleRef}
              className="heading-xl max-w-none tracking-[-0.065em] leading-[0.92]"
            >
              <span className="block">
                {renderCharacters("A design practice for")}
              </span>

              <span className="block">
                {renderCharacters(
                  "brands with something meaningful to say.",
                )}
              </span>
            </h2>
          </Reveal>
        </SectionHeading>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[6/5] overflow-hidden bg-ink/5">
              <Image
                src="/images/projects/Baktash.jpg"
                alt="Baktash, Brand Identity Designer"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-5">
            <Reveal>
              <p className="max-w-xl text-[18px] leading-[1.6] text-quiet sm:text-[20px]">
                Baktash Wahidy is a Brand Identity Designer and Social Media
                Designer helping startups, growing businesses and personal
                brands become distinct, consistent and recognisable.
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              className="mt-6"
            >
              <p className="max-w-xl text-[17px] leading-[1.75] text-quiet sm:text-[18px]">
                The work combines brand identity, logo systems, visual
                identity, brand guidelines, social media branding and marketing
                design into visual worlds that hold together wherever people
                meet a brand.
              </p>
            </Reveal>

            <Reveal
              delay={0.14}
              className="mt-10 border-t border-ink/20 pt-6 sm:mt-12"
            >
              <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#d6d3ca] transition-transform duration-300 hover:-translate-y-1 sm:h-16 sm:w-16"
                    title={tool.name}
                    aria-label={tool.name}
                  >
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-10 border-t border-ink/20 pt-6 sm:mt-12"
            >
              <div className="grid grid-cols-3">
                <div className="border-r border-ink/15 px-5 text-left sm:px-6">
                  <p className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-display">
                    6+
                  </p>

                  <p className="mt-2 text-[12px] leading-tight text-quiet sm:text-sm">
                    Years Experience
                  </p>
                </div>

                <div className="border-r border-ink/15 px-5 text-left sm:px-6">
                  <p className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-display">
                    1000+
                  </p>

                  <p className="mt-2 text-[12px] leading-tight text-quiet sm:text-sm">
                    Projects Completed
                  </p>
                </div>

                <div className="px-5 text-left sm:px-6">
                  <p className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-display">
                    10,000+
                  </p>

                  <p className="mt-2 text-[12px] leading-tight text-quiet sm:text-sm">
                    Hours Worked
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}