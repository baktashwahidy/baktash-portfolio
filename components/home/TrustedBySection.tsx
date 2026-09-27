"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

const trustedCompanies = [
  {
    name: "Company One",
    logo: "/logos/companies/company-01.svg",
  },
  {
    name: "Company Two",
    logo: "/logos/companies/company-02.svg",
  },
  {
    name: "Company Three",
    logo: "/logos/companies/company-03.svg",
  },
  {
    name: "Company Four",
    logo: "/logos/companies/company-04.svg",
  },
  {
    name: "Company Five",
    logo: "/logos/companies/company-05.svg",
  },
  {
    name: "Company Six",
    logo: "/logos/companies/company-06.svg",
  },
  {
    name: "Company Seven",
    logo: "/logos/companies/company-07.svg",
  },
  {
    name: "Company Eight",
    logo: "/logos/companies/company-08.svg",
  },
  {
    name: "Company Nine",
    logo: "/logos/companies/company-09.svg",
  },
  {
    name: "Company Ten",
    logo: "/logos/companies/company-10.svg",
  },
];

const AUTO_SPEED = 0.22;
const DRAG_FACTOR = 0.42;

export function TrustedBySection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);

  const positionRef = useRef(0);
  const dragStartRef = useRef(0);
  const dragPositionRef = useRef(0);

  const isDraggingRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);

  const marqueeItems = [
    ...trustedCompanies,
    ...trustedCompanies,
    ...trustedCompanies,
  ];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const animate = () => {
      if (!isDraggingRef.current) {
        positionRef.current -= AUTO_SPEED;

        const resetWidth = track.scrollWidth / 3;

        if (
          resetWidth > 0 &&
          Math.abs(positionRef.current) >= resetWidth
        ) {
          positionRef.current += resetWidth;
        }

        track.style.transform =
          `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    setIsDragging(true);
    isDraggingRef.current = true;

    dragStartRef.current = event.clientX;
    dragPositionRef.current = positionRef.current;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (!isDraggingRef.current) return;

    const track = trackRef.current;

    if (!track) return;

    const movement =
      (event.clientX - dragStartRef.current) *
      DRAG_FACTOR;

    positionRef.current =
      dragPositionRef.current + movement;

    const loopWidth = track.scrollWidth / 3;

    if (loopWidth > 0) {
      while (positionRef.current > 0) {
        positionRef.current -= loopWidth;
      }

      while (
        Math.abs(positionRef.current) >= loopWidth
      ) {
        positionRef.current += loopWidth;
      }
    }

    track.style.transform =
      `translate3d(${positionRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    isDraggingRef.current = false;
    setIsDragging(false);

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId,
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }
  };

  return (
    <section
      id="trusted-by"
      aria-label="Trusted by clients"
      className="w-full overflow-hidden"
    >
      <div
        className={`w-full overflow-hidden select-none ${
          isDragging
            ? "cursor-grabbing"
            : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center"
          style={{
            willChange: "transform",
            touchAction: "pan-y",
          }}
        >
          {marqueeItems.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex shrink-0 items-center px-8 sm:px-10 lg:px-14"
              aria-hidden={
                index >= trustedCompanies.length
              }
            >
              <img
                src={company.logo}
                alt={company.name}
                width={180}
                height={44}
                draggable={false}
                className="h-7 w-auto max-w-[180px] object-contain opacity-65 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}