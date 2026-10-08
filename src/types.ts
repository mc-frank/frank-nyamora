export type InitiativeCategory = 'all' | 'vocational' | 'food-security' | 'education' | 'health-water';

export interface Initiative {
  id: string;
  title: string;
  category: InitiativeCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  impactMetric: string;
  impactLabel: string;
  schedule: string;
  keyOutputs: string[];
  volunteerRoles: string[];
}

export interface WishlistItem {
  id: string;
  title: string;
  category: 'nutrition' | 'education' | 'living' | 'health';
  categoryLabel: string;
  description: string;
  quantityNeeded: string;
  status: 'Urgent' | 'Ongoing';
  pledgedCount: number;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  availability: string;
  interests: string[];
  experience: string;
  backgroundCheckConsent: boolean;
}

export interface GeneralContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: 'general' | 'visit' | 'prayer' | 'donation';
  message: string;
}
