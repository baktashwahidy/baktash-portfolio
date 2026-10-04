"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectThumbnailCarouselProps = {
  project: Project;
};

export function ProjectThumbnailCarousel({
  project,
}: ProjectThumbnailCarouselProps) {
  const image =
    project.images.length > 0
      ? project.images[0]
      : project.coverImage;

  return (
    <div className="project-image-wrap relative h-full w-full overflow-hidden">
      {/* Image link */}
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="absolute inset-0 z-0 block h-full w-full"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial"
          priority={false}
        />
      </Link>
    </div>
  );
}