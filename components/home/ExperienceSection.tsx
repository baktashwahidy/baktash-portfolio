import { tools } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

const toolAbbreviations: Record<string, string> = {
  "Adobe Illustrator": "Ai",
  Illustrator: "Ai",
  "Adobe Photoshop": "Ps",
  Photoshop: "Ps",
  "Adobe Premiere Pro": "Pr",
  "Premiere Pro": "Pr",
  "Adobe After Effects": "Ae",
  "After Effects": "Ae",
  Figma: "Fg",
  Canva: "Cv",
  "Adobe InDesign": "Id",
  InDesign: "Id",
};

const toolTone = [
  "from-[#2b160c] to-[#120b07]",
  "from-[#102b3a] to-[#07141d]",
  "from-[#17204d] to-[#0b1028]",
  "from-[#39224d] to-[#171020]",
  "from-[#1f241e] to-[#0f120e]",
  "from-[#202225] to-[#0e0f10]",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-canvas py-[clamp(5rem,8vw,7.5rem)]"
    >
      <div className="page-shell">
        <div className="border-t border-ink/20 pt-4">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr] lg:items-end">
            <Reveal>
              <h2 className="heading-xl max-w-2xl">Tools I Use</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:justify-end">
                {tools.map((tool, index) => {
                  const abbreviation = toolAbbreviations[tool] ?? tool.slice(0, 2);

                  return (
                    <div
                      key={tool}
                      className={`grid h-[68px] w-[68px] place-items-center rounded-[14px] bg-gradient-to-br ${toolTone[index % toolTone.length]} shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:h-[74px] sm:w-[74px]`}
                      title={tool}
                      aria-label={tool}
                    >
                      <span className="text-[1.35rem] font-semibold tracking-[-0.06em] text-white">
                        {abbreviation}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            className="mt-12 border-t border-ink/15 pt-8 sm:mt-14 sm:pt-10"
          >
            <div className="grid gap-0 sm:grid-cols-3">
              <div className="border-b border-ink/15 pb-7 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
                <p className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-none tracking-display">
                  3+
                </p>
                <p className="mt-2 text-sm text-quiet">Years Experience</p>
              </div>

              <div className="border-b border-ink/15 py-7 sm:border-b-0 sm:border-r sm:px-8 sm:py-0">
                <p className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-none tracking-display">
                  100+
                </p>
                <p className="mt-2 text-sm text-quiet">Projects Completed</p>
              </div>

              <div className="pt-7 sm:pl-8 sm:pt-0">
                <p className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-none tracking-display">
                  50+
                </p>
                <p className="mt-2 text-sm text-quiet">Happy Clients</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
