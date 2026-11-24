"use client";

import { useEffect, useRef, useState } from "react";
import { HeroPattern } from "./HeroPattern";
import { TrustedBySection } from "./TrustedBySection";

const stops = [
  ["top", "Home"], ["trusted-by", "Trusted by clients"], ["about", "About"],
  ["experience", "Experience"], ["work", "Work"], ["client-feedback", "Testimonials"], ["contact", "Contact"],
] as const;


function SectionTimeline() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const sections = stops.map(([id]) => document.getElementById(id));
    let frame = 0;
    const measure = () => {
      frame = 0;
      let current = 0;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.38) current = index;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = stops.length - 1;
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return <nav className="edit-track" aria-label="Homepage sections">
    <span aria-hidden="true" className="playhead" style={{left: `calc((${active} + .5) * 100% / ${stops.length})`}} />
    {stops.map(([id, label], index) => <a key={id} href={`#${id}`} aria-current={index === active ? "location" : undefined}>{label}</a>)}
  </nav>;
}

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  return <section id="top" className="studio-hero page-shell">
    <div className="studio-stage" ref={stageRef}>
      <HeroPattern containerRef={stageRef} />
      <div className="hero-copy">
        <p className="hero-credit">Baktash Wahidy<br/>Independent designer<br/>Dubai &amp; worldwide Working</p>
        <h1 aria-label="Baktash"><span>BAK</span><em>TASH<span aria-hidden="true" className="type-stop" /></em></h1>
        <p className="hero-role hidden lg:block">Brand identity &amp; Social media designer<br/>Arabic &amp; English brands</p>
        <p className="hero-role lg:hidden">Brand identity · Social media designer<br/>Arabic × English brands</p>
      </div>
      <img className="portrait" src="/images/_Cover.png" alt="Baktash, Brand Identity Designer" width={2000} height={2000} fetchPriority="high" />
    </div>
    <SectionTimeline />
    <TrustedBySection />
  </section>;
}
