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

const headingLines = [
  "A design practice for",
  "brands with something meaningful to say.",
];

function Counter({
  value,
  step = 1,
}: {
  value: number;
  step?: number;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const numberElement = numberRef.current;

    if (!numberElement) return;

    const animateCounter = () => {
      if (hasAnimatedRef.current) return;

      hasAnimatedRef.current = true;

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
      ) {
        numberElement.textContent =
          value.toLocaleString();

        return;
      }

      const counter = {
        value: 0,
      };

      gsap.to(counter, {
        value,
        duration: 3,
        delay: 0.05,
        ease: "power2.out",

        onUpdate: () => {
          const currentValue =
            Math.floor(counter.value / step) * step;

          numberElement.textContent =
            currentValue.toLocaleString();
        },

        onComplete: () => {
          numberElement.textContent =
            value.toLocaleString();
        },
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animateCounter();
        observer.disconnect();
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(numberElement);

    return () => {
      observer.disconnect();
    };
  }, [value, step]);

  return (
    <span ref={numberRef} aria-hidden="true">
      0
    </span>
  );
}

export function AboutSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const words =
      title.querySelectorAll<HTMLElement>("[data-word]");

    if (!words.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
    ) {
      gsap.set(words, {
        yPercent: 0,
        opacity: 1,
      });

      return;
    }

    gsap.set(words, {
      yPercent: 115,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.075,
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

  const renderWords = (text: string) => {
    const words = text.split(" ");

    return words.map((word, index) => (
      <span
        key={`${word}-${index}`}
        className="mr-[0.2em] inline-block overflow-hidden pb-[0.1em] align-baseline last:mr-0"
      >
        <span
          data-word
          className="inline-block leading-[1.02]"
        >
          {word}
        </span>
      </span>
    ));
  };

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
              className="heading-xl max-w-none pb-[0.08em] tracking-[-0.065em] leading-[0.96]"
            >
              {headingLines.map((line, lineIndex) => (
                <span
                  key={`${line}-${lineIndex}`}
                  className="block"
                >
                  {renderWords(line)}
                </span>
              ))}
            </h2>
          </Reveal>
        </SectionHeading>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Portrait */}
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

          {/* About content */}
          <div className="flex flex-col lg:col-span-5">
            <Reveal>
              <p className="max-w-xl text-[18px] leading-[1.6] text-quiet sm:text-[20px]">
                Baktash Wahidy is a Brand Identity Designer
                and Social Media Designer helping startups,
                growing businesses and personal brands become
                distinct, consistent and recognisable.
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              className="mt-6"
            >
              <p className="max-w-xl text-[17px] leading-[1.75] text-quiet sm:text-[18px]">
                The work combines brand identity, logo systems,
                visual identity, brand guidelines, social media
                branding and marketing design into visual worlds
                that hold together wherever people meet a brand.
              </p>
            </Reveal>

            {/* Tools */}
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

            {/* Animated Stats */}
            <Reveal
              delay={0.2}
              className="mt-10 border-t border-ink/20 pt-6 sm:mt-12"
            >
              <div className="grid grid-cols-3">
                {/* Years Experience */}
                <div className="border-r border-ink/15 px-5 text-left sm:px-6">
                  <p
                    className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-display"
                    aria-label="6 plus years experience"
                  >
                    <Counter value={6} />
                    <span aria-hidden="true">+</span>
                  </p>

                  <p className="mt-2 text-[12px] leading-tight text-quiet sm:text-sm">
                    Years Experience
                  </p>
                </div>

                {/* Projects Completed */}
                <div className="border-r border-ink/15 px-5 text-left sm:px-6">
                  <p
                    className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-display"
                    aria-label="1000 plus projects completed"
                  >
                    <Counter value={1000} />
                    <span aria-hidden="true">+</span>
                  </p>

                  <p className="mt-2 text-[12px] leading-tight text-quiet sm:text-sm">
                    Projects Completed
                  </p>
                </div>

                {/* Hours Worked */}
                <div className="px-5 text-left sm:px-6">
                  <p
                    className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-none tracking-display"
                    aria-label="10000 plus hours worked"
                  >
                    <Counter
                      value={10000}
                      step={10}
                    />
                    <span aria-hidden="true">+</span>
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