"use client";

import { useMemo, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { ProjectThumbnailCarousel } from "@/components/home/ProjectThumbnailCarousel";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";

const categories = [
  "All",
  ...projectCategories,
] as const;

type FilterCategory = (typeof categories)[number];

export function WorkSection() {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category ===
        (activeCategory as ProjectCategory),
    );
  }, [activeCategory]);

  return (
    <section
      id="work"
      className="scroll-mt-20 bg-ink py-[clamp(4.5rem,8vw,8rem)] text-canvas"
    >
      <div className="page-shell">
        {/* Section heading */}
        <div className="pt-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-none text-[clamp(2.6rem,5vw,5.2rem)] font-bold leading-[0.92] tracking-[-0.065em] whitespace-nowrap sm:text-[clamp(3.2rem,4.6vw,5.2rem)]">
              Selected work.
            </h2>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-8 overflow-x-auto pb-1 sm:mt-10">
          <div className="flex w-max gap-2">
            {categories.map((category) => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`shrink-0 border px-5 py-2.5 text-[10px] font-bold uppercase tracking-label transition-colors duration-300 ${
                    isActive
                      ? "border-canvas bg-canvas text-ink"
                      : "border-canvas/30 text-canvas/65 hover:border-canvas/70 hover:text-canvas"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 16 project grid */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-10 md:grid-cols-2 md:gap-y-16 lg:gap-x-7">
          {filteredProjects.map(
            (project, index) => (
              <Reveal
                key={project.slug}
                delay={Math.min(index * 0.035, 0.35)}
              >
                <article className="group min-w-0">
                  {/* Project image */}
                  <ProjectThumbnailCarousel
                    project={project}
                  />

                  {/* Project information */}
                  <div className="mt-4 flex items-end justify-between gap-5 border-b border-canvas/20 pb-5">
                    <div className="min-w-0">
                      <p className="eyebrow text-canvas/50">
                        {project.category}
                      </p>

                      <h3 className="mt-2 truncate text-[clamp(1.5rem,2.5vw,2.45rem)] font-bold leading-none tracking-display">
                        {project.title}
                      </h3>
                    </div>

                    <a
                      href={`/work/${project.slug}`}
                      aria-label={`View ${project.title} project`}
                      className="grid h-10 w-10 shrink-0 place-items-center border border-canvas/30 text-canvas transition-colors duration-300 hover:bg-signal hover:text-ink"
                    >
                      <span
                        aria-hidden
                        className="text-[17px] leading-none"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-canvas/50">
              No projects found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}