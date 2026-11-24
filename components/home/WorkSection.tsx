"use client";

import { useMemo, useState } from "react";

import { ProjectThumbnailCarousel } from "@/components/home/ProjectThumbnailCarousel";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";

const categories = ["All", ...projectCategories] as const;

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
      className="scroll-mt-20 bg-canvas py-[clamp(4.5rem,8vw,8rem)] text-ink"
    >
      <div className="page-shell">
        {/* Section heading + filters */}
        <div className="mt-0 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Section title */}
          <h2 className="order-1 max-w-none whitespace-nowrap text-left text-[clamp(2.6rem,5vw,5.2rem)] font-bold leading-[0.92] tracking-[-0.065em] sm:text-[clamp(3.2rem,4.6vw,5.2rem)] lg:order-1">
            Selected <em>work.</em>
          </h2>

          {/* Category filters */}
          <div className="order-2 overflow-x-auto pb-1 lg:order-2">
            <div className="flex w-max gap-2">
              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    aria-pressed={isActive}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`shrink-0 rounded-[6px] border px-5 py-2.5 font-medium uppercase tracking-[0.02em] transition-all duration-300 ${
                      isActive
                        ? "border-signal bg-signal text-canvas text-[10px]"
                        : "border-ink/20 text-ink/65 text-[10px] hover:border-ink/45 hover:text-ink"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
          {filteredProjects.map((project) => (
            <article key={project.slug} className="group min-w-0">
                {/* Project card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[var(--media)]">
                  {/* Project image */}
                  <div className="absolute inset-0 h-full w-full">
                    <div className="h-full w-full transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.025]">
                      <ProjectThumbnailCarousel
                        project={project}
                      />
                    </div>
                  </div>

                  {/* Hover gradient */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 rounded-[14px] bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  />

                  {/* Hover content */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 px-7 pb-7 pt-5 opacity-0 translate-y-2 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    {/* Project information */}
                    <div className="min-w-0">
                      <p className="mb-1.5 text-[11px] font-normal uppercase leading-[1.4] tracking-normal text-white/80">
                        {project.category}
                      </p>

                      <h3 className="max-w-[20rem] text-[13.3px] font-medium leading-[1.2] tracking-normal text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* View project */}
                    <div className="pointer-events-auto flex shrink-0">
                      <a
                        href={`/work/${project.slug}`}
                        aria-label={`View ${project.title} project`}
                        className="grid h-10 w-10 place-items-center rounded-[6px] border border-white/55 bg-black/10 text-white backdrop-blur-[2px] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                      >
                        <span
                          aria-hidden
                          className="text-[18px] font-normal leading-none"
                        >
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[14px] font-normal text-ink/50">
              No projects found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}