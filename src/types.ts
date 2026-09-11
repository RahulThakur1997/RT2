export type ServiceCategory =
  | 'ROOFING'
  | 'REPAIRS'
  | 'GUTTERING'
  | 'CHIMNEY WORK'
  | 'LEAD WORK'
  | 'SKYLIGHTS'
  | 'INSULATION';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

export type ProjectCategory =
  | 'ALL'
  | 'ROOF REPLACEMENT'
  | 'FLAT ROOFING'
  | 'ROOF REPAIR'
  | 'ROOFLINE & GUTTERING'
  | 'BUILDING & EXTERIOR';

export interface ProjectImages {
  after: string;
  before?: string;
  inProgress?: string;
  afterCaption?: string;
  beforeCaption?: string;
  inProgressCaption?: string;
}

export interface ProjectProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  projectType: string;
  category: string;
  location: string;
  heading: string;
  cardCopy: string;
  description: string;
  challenge: string;
  approach: string;
  workCarriedOut: string[];
  processSteps: ProjectProcessStep[];
  result: string;
  images: ProjectImages;
  image: string; // fallback main image
  statsRow?: { number: string; label: string }[];
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  review: string;
  projectType: string;
  avatarUrl?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'phone' | 'clipboard-check' | 'file-text' | 'calendar' | 'shield-check';
}

export interface QuoteFormData {
  service: string;
  propertyType: string;
  postcode: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export type LeadPriority = 'HIGH PRIORITY' | 'STANDARD' | 'LOWER PRIORITY';

export interface LeadData {
  service: string;
  area: string;
  projectDetails: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  leadPriority: LeadPriority;
  submittedAt: string;
}
