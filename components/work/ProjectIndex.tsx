import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <div className="archive-grid">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.025}>
          <article className="group archive-card">
            <p className="eyebrow text-quiet">0{index + 1}</p>
            <Link href={`/work/${project.slug}`} className="block">
              <div className="archive-cover">
                <Image src={project.coverImage.src} alt="" fill sizes="(min-width: 701px) 45vw, 92vw" className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-110" />
              </div>
              <div>
                <h2 className="text-[clamp(1.85rem,3vw,3.3rem)] font-bold leading-none tracking-display transition-colors group-hover:text-cobalt">{project.title}</h2>
                <p className="mt-2 text-[12px] leading-relaxed text-quiet sm:hidden">{project.shortDescription}</p>
              </div>
            </Link>
            <p className="hidden text-[12px] leading-relaxed text-quiet lg:block">{project.category}</p>
            <p className="hidden text-[12px] text-quiet sm:block">{project.year}</p>
            <Link href={`/work/${project.slug}`} aria-label={project.title} className="flex h-9 w-9 place-items-center border border-ink/30 transition-colors group-hover:bg-ink group-hover:text-canvas"><ArrowUpRight aria-hidden size={15} strokeWidth={1.7} /></Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
