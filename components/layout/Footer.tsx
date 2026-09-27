export function Footer() {
  return (
    <footer className="-mt-8 flex min-h-[145px] flex-col justify-end bg-ink pb-6 pt-8 text-canvas sm:min-h-[160px] sm:pb-7 sm:pt-8">
      <div className="page-shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.88] tracking-[-0.065em]">
            Baktash Wahidy
            <span className="text-signal">.</span>
          </p>

          <p className="eyebrow text-canvas/45 sm:pb-1">
            © {new Date().getFullYear()} Baktash Wahidy · Brand identity & social media designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}