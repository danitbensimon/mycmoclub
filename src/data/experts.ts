// Expert and Vendor data — edit this file to add/remove entries.
// Was previously read from Anima's database; now a simple local file.

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

// Add your experts here (shown on /vendors page)
export const experts: Expert[] = [
  {
    id: "elad-hefetz",
    name: "Elad Hefetz (Airfleet)",
    domain: "AEO, AI Agents, Website Dev",
    shortBio: "AEO, AI Agents, and Website Development expert helping B2B companies grow their digital presence.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "elad-itzkovitch",
    name: "Elad Itzkovitch (CMO'vate)",
    domain: "AEO, Meta PPC, LinkedIn PPC, Google PPC, LinkedIn Organic, AI Agents, CRM Management, Lifecycle Marketing, Social Media, SDR Services",
    shortBio: "Multi-channel B2B marketing expert covering AEO, PPC, LinkedIn, AI Agents, CRM, lifecycle, social media, and SDR services — helping B2B companies build brand presence and inbound growth.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "israel-blechman",
    name: "Israel Blechman (TLM Marketing)",
    domain: "AI Agents",
    shortBio: "AI Agents expert helping B2B companies leverage AI-driven marketing automation and strategy.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "ora-dangot",
    name: "Ora Dangot",
    domain: "Brand Strategy, Visual Identity, UI/UX, Pitch Decks",
    shortBio: "Expert in brand strategy, visual identity, UI/UX design, and pitch decks. Worked with n8n, Mesh.security, and SecuPi.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "gur-tene",
    name: "Gur Tene (MDR-Digital)",
    domain: "LinkedIn Organic",
    shortBio: "LinkedIn organic growth specialist helping B2B companies build their presence and generate leads.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "shoshana-kordova",
    name: "Shoshana Kordova (Peel)",
    domain: "LinkedIn Organic, Messaging & Positioning",
    shortBio: "B2B product marketing expert specializing in LinkedIn organic growth, messaging, and positioning.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "daniel-rosenberg",
    name: "Daniel Rosenberg",
    domain: "LinkedIn PPC, Google PPC, Bing PPC",
    shortBio: "PPC expert specializing in LinkedIn, Google, and Bing advertising for B2B companies.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "eden-bidani",
    name: "Eden Bidani",
    domain: "Messaging & Positioning",
    shortBio: "Expert in positioning and messaging for B2B tech companies. Worked with Mend.io, RavenDB, MazeBolt, and Blee.",
    photoUrl: "",
    isPublished: true,
  },
  {
    id: "tamir-alush",
    name: "Tamir Alush (Noetic)",
    domain: "Meta PPC, LinkedIn PPC, Google PPC, Bing PPC, LinkedIn Organic, CRM Management, Lifecycle Marketing, Social Media",
    shortBio: "Full-funnel B2B marketing expert covering paid ads across all major platforms, CRM, lifecycle, and social media.",
    photoUrl: "",
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
    id: "tzvi-vaknin",
    name: "Tzvi Vaknin",
    domain: "Reddit, Meta PPC, LinkedIn PPC",
    shortBio: "Reddit and PPC expert specializing in Reddit, Meta, and LinkedIn paid advertising for B2B.",
    photoUrl: "",
    isPublished: true,
  },
];

// Add your vendors here (shown on /vendors page alongside experts)
export const vendors: Vendor[] = [];
