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
export const experts: Expert[] = [];

// Add your vendors here (shown on /vendors page)
export const vendors: Vendor[] = [];
