"use client";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Project } from "@/data/projects";

type ProjectThumbnailCarouselProps = {
  project: Project;
};

export function ProjectThumbnailCarousel({
  project,
}: ProjectThumbnailCarouselProps) {
  const [currentImage, setCurrentImage] =
    useState(0);

  const images =
    project.images.length > 0
      ? project.images
      : [project.coverImage];

  const handlePrevious = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  };

  const handleNext = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentImage(
      (current) =>
        (current + 1) % images.length,
    );
  };

  const image = images[currentImage];

  return (
    <div className="project-image-wrap group relative aspect-[16/10] overflow-hidden">
      {/* Image link */}
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="absolute inset-0 z-0 block"
      >
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.025]"
          priority={false}
        />
      </Link>

      {/* Image overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5" />

      {/* Previous */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handlePrevious}
          aria-label={`Previous image for ${project.title}`}
          className="absolute left-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center bg-canvas text-ink opacity-100 transition-all duration-300 hover:bg-signal hover:text-ink lg:-translate-x-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.6}
          />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label={`Next image for ${project.title}`}
          className="absolute right-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center bg-canvas text-ink opacity-100 transition-all duration-300 hover:bg-signal hover:text-ink lg:translate-x-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
        >
          <ArrowRight
            size={16}
            strokeWidth={1.6}
          />
        </button>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-4 z-20 bg-ink/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-label text-canvas">
          {currentImage + 1} / {images.length}
        </div>
      )}
    </div>
  );
}