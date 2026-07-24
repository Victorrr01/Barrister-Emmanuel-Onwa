export type PageType = 'home' | 'about' | 'services' | 'contact';

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyDeliverables: string[];
  idealFor: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  serviceUsed: string;
}

export interface CredentialItem {
  category: string;
  title: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface BookingFormData {
  serviceType: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  consultationMethod: 'in-person' | 'virtual' | 'phone';
}

export interface AssessmentAnswer {
  questionId: number;
  score: number;
  recommendation: string;
}
