// Expert and Vendor data — edit this file to add/remove entries.
// Migrated from Anima database (Expert + Vendor tables).

export type Expert = {
  id: string;
  name: string;
  domain: string;
  shortBio: string;
  photoUrl: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  bookingUrl?: string;
  categoryTag?: string;
  isPublished: boolean;
};

export type Vendor = {
  id: string;
  name: string;
  domain: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  websiteUrl?: string;
};

// All experts — merged from Anima's Expert + Vendor tables.
// Booking URLs are the real Calendly/HubSpot/etc. meeting links per expert.
export const experts: Expert[] = [
  {
    id: "elad-hefetz",
    name: "Elad Hefetz (Airfleet)",
    domain: "AEO, AI Agents, Website Dev",
    shortBio: "AEO, AI Agents, and Website Development expert helping B2B companies grow their digital presence.",
    photoUrl: "",
    linkedinUrl: "https://linkedin.com",
    websiteUrl: "https://www.airfleet.co",
    bookingUrl: "https://meetings.hubspot.com/elad20",
    isPublished: true,
  },
  {
    id: "ben-jacobson",
    name: "Ben Jacobson (InboundJunction)",
    domain: "AEO, PR",
    shortBio: "AEO and PR expert helping B2B companies build brand presence and inbound growth.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/osbennn/",
    websiteUrl: "https://inboundjunction.com/",
    bookingUrl: "https://calendly.com/osbennn/",
    isPublished: true,
  },
  {
    id: "tzvi-vaknin",
    name: "Tzvi Vaknin",
    domain: "Reddit, Meta PPC, LinkedIn PPC",
    shortBio: "Reddit and PPC expert specializing in Reddit, Meta, and LinkedIn paid advertising for B2B.",
    photoUrl: "",
    linkedinUrl: "https://linkedin.com/in/tzvi-vaknin",
    isPublished: true,
  },
  {
    id: "tamir-alush",
    name: "Tamir Alush (Noetic)",
    domain: "Meta PPC, LinkedIn PPC, Google PPC, Bing PPC, LinkedIn Organic, CRM Management, Lifecycle Marketing, Social Media",
    shortBio: "Full-funnel B2B marketing expert covering paid ads across all major platforms, CRM, lifecycle, and social media.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/tamiralush/",
    websiteUrl: "https://www.noetic.io",
    bookingUrl: "https://meetings.hubspot.com/tamir-alush/introduction-with-tamir",
    isPublished: true,
  },
  {
    id: "elad-itzkovitch",
    name: "Elad Itzkovitch (CMO'vate)",
    domain: "AEO, Meta PPC, LinkedIn PPC, Google PPC, LinkedIn Organic, AI Agents, CRM Management, Lifecycle Marketing, Social Media, SDR Services",
    shortBio: "Multi-channel B2B marketing expert covering AEO, PPC, LinkedIn, AI Agents, CRM, lifecycle, social, and SDR services.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/elad-itzkovitch/",
    websiteUrl: "https://www.cmovate.com/",
    bookingUrl: "https://calendly.com/cmovate/60-minute-meeting",
    isPublished: true,
  },
  {
    id: "daniel-rosenberg",
    name: "Daniel Rosenberg",
    domain: "LinkedIn PPC, Google PPC, Bing PPC",
    shortBio: "PPC expert specializing in LinkedIn, Google, and Bing advertising for B2B companies.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/daniel-rosenberg-ppcexpert/",
    websiteUrl: "https://www.marketplace-solutions.com/",
    bookingUrl: "https://tidycal.com/dr70095/60-minute-meeting-3lww5v0",
    isPublished: true,
  },
  {
    id: "gur-tene",
    name: "Gur Tene (MDR-Digital)",
    domain: "LinkedIn Organic",
    shortBio: "LinkedIn organic growth specialist helping B2B companies build their presence and generate leads.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/gurtene/",
    websiteUrl: "https://www.mdr-digital.com/",
    bookingUrl: "https://calendly.com/gur-tene/marketing-consulting",
    isPublished: true,
  },
  {
    id: "shoshana-kordova",
    name: "Shoshana Kordova (Peel)",
    domain: "LinkedIn Organic, Messaging & Positioning",
    shortBio: "B2B product marketing expert specializing in LinkedIn organic growth, messaging, and positioning.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/shoshana-kordova/",
    websiteUrl: "https://tinyurl.com/PeelPMM",
    bookingUrl: "https://zcal.co/shoshanakordova",
    isPublished: true,
  },
  {
    id: "israel-blechman",
    name: "Israel Blechman (TLM Marketing)",
    domain: "AI Agents",
    shortBio: "AI Agents expert helping B2B companies leverage AI-driven marketing automation and strategy.",
    photoUrl: "",
    websiteUrl: "https://tlm.marketing",
    bookingUrl: "https://calendly.com/tlm-meetings/tlm-20-minutes-strategy-call",
    isPublished: true,
  },
  {
    id: "eden-bidani",
    name: "Eden Bidani",
    domain: "Messaging & Positioning",
    shortBio: "Expert in positioning and messaging for B2B tech companies. Worked with Mend.io, RavenDB, MazeBolt, and Blee.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/edenbidani",
    websiteUrl: "https://capturetheflag.studio",
    bookingUrl: "https://calendly.com/eden-bidani/cmo-consult-free",
    isPublished: true,
  },
  {
    id: "ora-dangot",
    name: "Ora Dangot",
    domain: "Brand Strategy, Visual Identity, UI/UX, Pitch Decks",
    shortBio: "Expert in brand strategy, visual identity, UI/UX design, and pitch decks. Worked with n8n, Mesh.security, and SecuPi.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/oradangot/",
    websiteUrl: "https://theavocado.co/",
    bookingUrl: "https://tidycal.com/ora/cmo-club-consult",
    isPublished: true,
  },
  {
    id: "almog-elmaliah",
    name: "Almog Elmaliah",
    domain: "Reddit",
    shortBio: "Reddit marketing specialist helping B2B companies leverage Reddit for growth.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "michal-moreno",
    name: "Michal Moreno",
    domain: "LinkedIn PPC, Google PPC, X Ads, Reddit",
    shortBio: "Expert in paid advertising across LinkedIn, Google, X, and Reddit platforms.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/michalmoreno/",
    websiteUrl: "https://www.moreno.co.il/",
    bookingUrl: "https://calendar.app.google/cWAZS3WhjKTaRhDaA",
    isPublished: true,
  },
  {
    id: "lior-yeshno",
    name: "Lior Yeshno",
    domain: "SEO, GEO, AI, PR",
    shortBio: "SEO and AI expert specializing in search engine optimization and public relations.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/lior-yeshno/",
    websiteUrl: "https://yeshnoseo.co.il/",
    bookingUrl: "https://calendly.com/yeshnoseo/seo",
    isPublished: true,
  },
  {
    id: "sage-marketing",
    name: "SAGE Marketing",
    domain: "CRM Management, Social Media, Messaging & Positioning",
    shortBio: "HubSpot CRM specialist with expertise in social media management, messaging, and trade shows.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/company/sagemarketing/",
    websiteUrl: "https://www.sagemarketing.io/",
    bookingUrl: "https://meetings.hubspot.com/sarit-lamerovich",
    isPublished: true,
  },
  {
    id: "lior-gonen",
    name: "Lior Gonen",
    domain: "AI Agents, Brand Strategy",
    shortBio: "Tech and marketing strategist focused on AI innovation with a mindset-first approach.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/liorgonen",
    websiteUrl: "https://gemplan.co.il/",
    bookingUrl: "https://calendly.com/lior-7/60min",
    isPublished: true,
  },
  {
    id: "michal-gat",
    name: "Michal Gat (Titan Branding)",
    domain: "Brand Strategy, Visual Identity",
    shortBio: "Branding expert helping B2B companies build powerful brand identities and visual strategies.",
    photoUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/michal-gat-titan-branding/",
    websiteUrl: "https://www.linkedin.com/in/michal-gat-titan-branding/",
    bookingUrl: "https://calendly.com/titanlbranding/zoom-session-with-michal-titan-branding",
    isPublished: true,
  },
];

// Legacy vendors array — kept empty. All vendors merged into experts above.
export const vendors: Vendor[] = [];
