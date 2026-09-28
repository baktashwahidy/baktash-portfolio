export const projectCategories = [
  "Branding",
  "Social Media",
  "Pitch Deck",
  "Print",
] as const;

export type ProjectCategory =
  (typeof projectCategories)[number];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  shortDescription: string;
  coverImage: ProjectImage;
  images: ProjectImage[];
  services: string[];
  tools: string[];
  details: {
    sector: string;
    scope: string;
    languages: string;
  };
  caseStudy: {
    overview: string;
    challenge: string;
    approach: string;
    outcome: string;
  };
};

type ProjectInput = {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  shortDescription: string;
  sector: string;
  scope: string;
  languages: string;
  images: string[];
  services: string[];
  tools: string[];
};

function createProject(
  input: ProjectInput,
): Project {
  const imageObjects = input.images.map(
    (src, index) => ({
      src,
      alt: `${input.title} ${
        index === 0
          ? "project cover"
          : `project image ${index + 1}`
      }`,
    }),
  );

  return {
    slug: input.slug,
    title: input.title,
    category: input.category,
    client: input.client,
    year: input.year,
    shortDescription:
      input.shortDescription,

    coverImage:
      imageObjects[0],

    images: imageObjects,

    services: input.services,

    tools: input.tools,

    details: {
      sector: input.sector,
      scope: input.scope,
      languages: input.languages,
    },

    caseStudy: {
      overview:
        input.shortDescription,

      challenge:
        `Create a clear and recognisable visual system for ${input.client}.`,

      approach:
        `The project combines ${input.services
          .slice(0, 3)
          .join(", ")} into one consistent visual direction.`,

      outcome:
        `A flexible ${input.category.toLowerCase()} system designed to work consistently across the brand's key touchpoints.`,
    },
  };
}

export const projects: Project[] = [
  // =========================================================
  // BRANDING — 01
  // =========================================================

  createProject({
    slug: "zeva",
    title: "ZEVA",
    category: "Branding",
    client: "ZEVA",
    year: "2026",
    shortDescription:
      "A distinctive brand identity system built around a refined visual language, premium packaging and consistent brand applications.",
    sector: "Lifestyle",
    scope: "Complete brand identity",
    languages: "English",
    images: [
      "/images/projects/zeva/01-cover.jpg",
      "/images/projects/zeva/02-logo.jpg",
      "/images/projects/zeva/03-brand-system.jpg",
      "/images/projects/zeva/04-stationery.jpg",
      "/images/projects/zeva/05-packaging.jpg",
      "/images/projects/zeva/06-social.jpg",
      "/images/projects/zeva/07-detail.jpg",
    ],
    services: [
      "Brand Identity",
      "Logo Design",
      "Visual Identity",
      "Packaging Design",
      "Social Media Branding",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
    ],
  }),

  // BRANDING — 02

  createProject({
    slug: "noura",
    title: "Noura",
    category: "Branding",
    client: "Noura",
    year: "2026",
    shortDescription:
      "A bilingual Arabic and English identity designed for a modern brand with a refined and approachable character.",
    sector: "Beauty & Lifestyle",
    scope: "Bilingual identity",
    languages: "Arabic · English",
    images: [
      "/images/projects/noura/01-cover.jpg",
      "/images/projects/noura/02-logo.jpg",
      "/images/projects/noura/03-arabic-english.jpg",
      "/images/projects/noura/04-colour.jpg",
      "/images/projects/noura/05-stationery.jpg",
      "/images/projects/noura/06-packaging.jpg",
    ],
    services: [
      "Arabic Branding",
      "English Branding",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
    ],
  }),

  // BRANDING — 03

  createProject({
    slug: "growza",
    title: "Growza",
    category: "Branding",
    client: "Growza",
    year: "2026",
    shortDescription:
      "A modern identity system created to give a growing business a clear, energetic and recognisable visual presence.",
    sector: "Business",
    scope: "Brand identity system",
    languages: "English",
    images: [
      "/images/projects/growza/01-cover.jpg",
      "/images/projects/growza/02-logo.jpg",
      "/images/projects/growza/03-brand-system.jpg",
      "/images/projects/growza/04-colour.jpg",
      "/images/projects/growza/05-stationery.jpg",
      "/images/projects/growza/06-applications.jpg",
    ],
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Logo Design",
      "Visual Identity",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
    ],
  }),

  // BRANDING — 04

  createProject({
    slug: "caliburn",
    title: "Caliburn",
    category: "Branding",
    client: "Caliburn",
    year: "2025",
    shortDescription:
      "A sophisticated identity system combining strong typography, distinctive graphics and a controlled premium aesthetic.",
    sector: "Professional Services",
    scope: "Visual identity",
    languages: "English",
    images: [
      "/images/projects/caliburn/01-cover.jpg",
      "/images/projects/caliburn/02-logo.jpg",
      "/images/projects/caliburn/03-typography.jpg",
      "/images/projects/caliburn/04-colour.jpg",
      "/images/projects/caliburn/05-stationery.jpg",
      "/images/projects/caliburn/06-applications.jpg",
      "/images/projects/caliburn/07-detail.jpg",
    ],
    services: [
      "Brand Identity",
      "Logo System",
      "Visual Identity",
      "Brand Guidelines",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Figma",
    ],
  }),

  // BRANDING — 05

  createProject({
    slug: "overhaul-branding",
    title: "Overhaul",
    category: "Branding",
    client: "Overhaul",
    year: "2025",
    shortDescription:
      "A confident visual identity built around strong typography, adaptable graphics and a clear brand system.",
    sector: "Technology",
    scope: "Brand identity",
    languages: "English",
    images: [
      "/images/projects/overhaul-branding/01-cover.jpg",
      "/images/projects/overhaul-branding/02-logo.jpg",
      "/images/projects/overhaul-branding/03-typography.jpg",
      "/images/projects/overhaul-branding/04-colour.jpg",
      "/images/projects/overhaul-branding/05-stationery.jpg",
      "/images/projects/overhaul-branding/06-applications.jpg",
    ],
    services: [
      "Brand Identity",
      "Logo Design",
      "Typography",
      "Visual Identity",
    ],
    tools: [
      "Adobe Illustrator",
      "Figma",
      "Adobe InDesign",
    ],
  }),

  // BRANDING — 06

  createProject({
    slug: "gulf-business-forum",
    title: "Gulf Business Forum",
    category: "Branding",
    client: "Gulf Business Forum",
    year: "2025",
    shortDescription:
      "A structured visual identity bringing formal communication, typography and branded applications into one system.",
    sector: "Business",
    scope: "Corporate identity",
    languages: "Arabic · English",
    images: [
      "/images/projects/gulf-business-forum/01-cover.jpg",
      "/images/projects/gulf-business-forum/02-logo.jpg",
      "/images/projects/gulf-business-forum/03-typography.jpg",
      "/images/projects/gulf-business-forum/04-colour.jpg",
      "/images/projects/gulf-business-forum/05-stationery.jpg",
      "/images/projects/gulf-business-forum/06-applications.jpg",
      "/images/projects/gulf-business-forum/07-detail.jpg",
    ],
    services: [
      "Brand Identity",
      "Logo Design",
      "Corporate Branding",
      "Stationery",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Figma",
    ],
  }),

  // =========================================================
  // SOCIAL MEDIA — 07
  // =========================================================

  createProject({
    slug: "almskn",
    title: "Almskn",
    category: "Social Media",
    client: "Almskn",
    year: "2026",
    shortDescription:
      "A social media design system built to present property, lifestyle and campaign content with consistency.",
    sector: "Real Estate",
    scope: "Social media system",
    languages: "Arabic · English",
    images: [
      "/images/projects/almskn/01-cover.jpg",
      "/images/projects/almskn/02-grid.jpg",
      "/images/projects/almskn/03-post.jpg",
      "/images/projects/almskn/04-carousel.jpg",
      "/images/projects/almskn/05-story.jpg",
      "/images/projects/almskn/06-campaign.jpg",
    ],
    services: [
      "Social Media Branding",
      "Instagram Design",
      "Carousel Design",
      "Story Design",
      "Campaign Design",
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
    ],
  }),

  // SOCIAL MEDIA — 08

  createProject({
    slug: "overhaul-social",
    title: "Overhaul",
    category: "Social Media",
    client: "Overhaul",
    year: "2025",
    shortDescription:
      "A bold social media campaign system designed around strong typography, concise messaging and visual consistency.",
    sector: "Technology",
    scope: "Social campaign",
    languages: "English",
    images: [
      "/images/projects/overhaul-social/01-cover.jpg",
      "/images/projects/overhaul-social/02-grid.jpg",
      "/images/projects/overhaul-social/03-post.jpg",
      "/images/projects/overhaul-social/04-carousel.jpg",
      "/images/projects/overhaul-social/05-story.jpg",
      "/images/projects/overhaul-social/06-ad.jpg",
    ],
    services: [
      "Social Media Design",
      "Campaign Design",
      "Content Templates",
      "Marketing Design",
    ],
    tools: [
      "Adobe Photoshop",
      "Figma",
      "Canva",
    ],
  }),

  // SOCIAL MEDIA — 09

  createProject({
    slug: "maraq",
    title: "Maraq",
    category: "Social Media",
    client: "Maraq",
    year: "2025",
    shortDescription:
      "A social-first visual system combining editorial layouts, campaign graphics and engaging content templates.",
    sector: "Food & Lifestyle",
    scope: "Social media identity",
    languages: "Arabic · English",
    images: [
      "/images/projects/maraq/01-cover.jpg",
      "/images/projects/maraq/02-grid.jpg",
      "/images/projects/maraq/03-post.jpg",
      "/images/projects/maraq/04-carousel.jpg",
      "/images/projects/maraq/05-story.jpg",
      "/images/projects/maraq/06-campaign.jpg",
      "/images/projects/maraq/07-detail.jpg",
    ],
    services: [
      "Social Media Branding",
      "Content Design",
      "Campaign Design",
      "Marketing Design",
    ],
    tools: [
      "Adobe Photoshop",
      "Figma",
      "Canva",
    ],
  }),

  // SOCIAL MEDIA — 10

  createProject({
    slug: "luxe",
    title: "LUXE",
    category: "Social Media",
    client: "LUXE",
    year: "2025",
    shortDescription:
      "A premium social media campaign designed around refined imagery, typography and product storytelling.",
    sector: "Luxury",
    scope: "Social campaign",
    languages: "English",
    images: [
      "/images/projects/luxe/01-cover.jpg",
      "/images/projects/luxe/02-grid.jpg",
      "/images/projects/luxe/03-post.jpg",
      "/images/projects/luxe/04-carousel.jpg",
      "/images/projects/luxe/05-story.jpg",
      "/images/projects/luxe/06-campaign.jpg",
    ],
    services: [
      "Social Media Design",
      "Campaign Design",
      "Art Direction",
      "Content Templates",
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
    ],
  }),

  // =========================================================
  // PITCH DECK — 11 ENGLISH
  // =========================================================

  createProject({
    slug: "finora",
    title: "Finora",
    category: "Pitch Deck",
    client: "Finora",
    year: "2026",
    shortDescription:
      "An investor pitch deck designed to communicate a financial technology concept with clarity and confidence.",
    sector: "FinTech",
    scope: "Investor pitch deck",
    languages: "English",
    images: [
      "/images/projects/finora/01-cover.jpg",
      "/images/projects/finora/02-title.jpg",
      "/images/projects/finora/03-problem.jpg",
      "/images/projects/finora/04-solution.jpg",
      "/images/projects/finora/05-market.jpg",
      "/images/projects/finora/06-business-model.jpg",
      "/images/projects/finora/07-financials.jpg",
      "/images/projects/finora/08-closing.jpg",
    ],
    services: [
      "Pitch Deck Design",
      "Presentation Design",
      "Data Visualization",
      "Information Design",
    ],
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Adobe InDesign",
    ],
  }),

  // PITCH DECK — 12 ENGLISH

  createProject({
    slug: "nexa-capital",
    title: "Nexa Capital",
    category: "Pitch Deck",
    client: "Nexa Capital",
    year: "2025",
    shortDescription:
      "A clean English investor presentation created to communicate a business opportunity through a structured visual narrative.",
    sector: "Investment",
    scope: "Investor presentation",
    languages: "English",
    images: [
      "/images/projects/nexa-capital/01-cover.jpg",
      "/images/projects/nexa-capital/02-title.jpg",
      "/images/projects/nexa-capital/03-problem.jpg",
      "/images/projects/nexa-capital/04-solution.jpg",
      "/images/projects/nexa-capital/05-market.jpg",
      "/images/projects/nexa-capital/06-model.jpg",
      "/images/projects/nexa-capital/07-growth.jpg",
    ],
    services: [
      "Pitch Deck Design",
      "Information Design",
      "Data Visualization",
      "Visual Storytelling",
    ],
    tools: [
      "Figma",
      "Adobe Illustrator",
    ],
  }),

  // PITCH DECK — 13 ARABIC

  createProject({
    slug: "arabia-ventures",
    title: "Arabia Ventures",
    category: "Pitch Deck",
    client: "Arabia Ventures",
    year: "2026",
    shortDescription:
      "An Arabic investor pitch deck designed with clear hierarchy, RTL structure and strong visual storytelling.",
    sector: "Investment",
    scope: "Arabic investor deck",
    languages: "Arabic",
    images: [
      "/images/projects/arabia-ventures/01-cover.jpg",
      "/images/projects/arabia-ventures/02-title.jpg",
      "/images/projects/arabia-ventures/03-problem.jpg",
      "/images/projects/arabia-ventures/04-solution.jpg",
      "/images/projects/arabia-ventures/05-market.jpg",
      "/images/projects/arabia-ventures/06-business.jpg",
      "/images/projects/arabia-ventures/07-financials.jpg",
      "/images/projects/arabia-ventures/08-closing.jpg",
    ],
    services: [
      "Arabic Pitch Deck",
      "Presentation Design",
      "Data Visualization",
      "Information Design",
    ],
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Adobe InDesign",
    ],
  }),

  // PITCH DECK — 14 ARABIC

  createProject({
    slug: "masar-tech",
    title: "Masar Tech",
    category: "Pitch Deck",
    client: "Masar Tech",
    year: "2025",
    shortDescription:
      "An Arabic technology pitch deck translating complex product information into a concise visual story.",
    sector: "Technology",
    scope: "Arabic pitch deck",
    languages: "Arabic",
    images: [
      "/images/projects/masar-tech/01-cover.jpg",
      "/images/projects/masar-tech/02-title.jpg",
      "/images/projects/masar-tech/03-problem.jpg",
      "/images/projects/masar-tech/04-solution.jpg",
      "/images/projects/masar-tech/05-product.jpg",
      "/images/projects/masar-tech/06-market.jpg",
      "/images/projects/masar-tech/07-growth.jpg",
    ],
    services: [
      "Arabic Pitch Deck",
      "Presentation Design",
      "Visual Storytelling",
      "Data Visualization",
    ],
    tools: [
      "Figma",
      "Adobe Illustrator",
    ],
  }),

  // =========================================================
  // PRINT — 15
  // =========================================================

  createProject({
    slug: "al-diyarb-al-arabiya",
    title: "Al Diyarb Al Arabiya",
    category: "Print",
    client: "Al Diyarb Al Arabiya",
    year: "2026",
    shortDescription:
      "A print-focused visual system bringing Arabic typography, formal layouts and premium physical applications together.",
    sector: "Corporate",
    scope: "Print identity",
    languages: "Arabic",
    images: [
      "/images/projects/al-diyarb-al-arabiya/01-cover.jpg",
      "/images/projects/al-diyarb-al-arabiya/02-invitation.jpg",
      "/images/projects/al-diyarb-al-arabiya/03-business-card.jpg",
      "/images/projects/al-diyarb-al-arabiya/04-brochure.jpg",
      "/images/projects/al-diyarb-al-arabiya/05-stationery.jpg",
      "/images/projects/al-diyarb-al-arabiya/06-detail.jpg",
    ],
    services: [
      "Print Design",
      "Arabic Typography",
      "Stationery Design",
      "Invitation Design",
      "Brochure Design",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
  }),

  // PRINT — 16

  createProject({
    slug: "galleria-print",
    title: "Galleria",
    category: "Print",
    client: "Galleria",
    year: "2025",
    shortDescription:
      "A premium print collection combining invitations, stationery and promotional materials into one visual system.",
    sector: "Lifestyle",
    scope: "Print collection",
    languages: "English",
    images: [
      "/images/projects/galleria-print/01-cover.jpg",
      "/images/projects/galleria-print/02-invitation.jpg",
      "/images/projects/galleria-print/03-business-card.jpg",
      "/images/projects/galleria-print/04-brochure.jpg",
      "/images/projects/galleria-print/05-stationery.jpg",
      "/images/projects/galleria-print/06-packaging.jpg",
    ],
    services: [
      "Print Design",
      "Invitation Design",
      "Stationery",
      "Brochure Design",
      "Packaging",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
  }),
];

export function getProjectBySlug(
  slug: string,
) {
  return projects.find(
    (project) => project.slug === slug,
  );
}