import type { ReactNode } from "react";

type SectionHeadingProps = {
  index?: string;
  label?: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-5 border-t border-[#d5d2c9] pt-4 ${className}`}
    >
      {children}
    </div>
  );
}
