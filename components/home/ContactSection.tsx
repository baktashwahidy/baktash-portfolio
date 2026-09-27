import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-ink pb-8 pt-[clamp(5rem,9vw,7rem)] text-canvas"
    >
      <div className="page-shell">
        <Reveal>
          <h2 className="display-lg max-w-5xl">
            Let&apos;s build a brand people remember
            <span className="text-signal">.</span>
          </h2>
        </Reveal>

        {/* Top links */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 sm:mt-16">
          <Reveal className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label text-canvas/65 transition-colors hover:text-signal"
              >
                {social.label}

                <ArrowUpRight
                  aria-hidden
                  size={12}
                  strokeWidth={1.8}
                />
              </a>
            ))}
          </Reveal>

          <Reveal>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label text-canvas/65 transition-colors hover:text-signal"
            >
              Send Email

              <ArrowUpRight
                aria-hidden
                size={12}
                strokeWidth={1.8}
              />
            </a>
          </Reveal>
        </div>

        {/* Divider + bottom links */}
        <div className="mt-3 border-t border-canvas/20 py-3 sm:mt-3 sm:py-3">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="/"
              className="text-[10px] font-bold uppercase tracking-label text-canvas/75 transition-colors hover:text-signal"
            >
              Baktash Wahidy
            </Link>

            <Link
              href="/imkon"
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label text-canvas/75 transition-colors hover:text-signal"
            >
              IMKON

              <ArrowUpRight
                aria-hidden
                size={12}
                strokeWidth={1.8}
              />
            </Link>

            <Link
              href="/imkon/shop"
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label text-canvas/75 transition-colors hover:text-signal"
            >
              IMKON SHOP

              <ArrowUpRight
                aria-hidden
                size={12}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}