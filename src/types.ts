export type PageType = 'home' | 'services' | 'contact';

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyDeliverables: string[];
  idealFor: string[];
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

export interface TeamMember {
  name: string;
  role: string;
  practiceAreas: string[];
  email: string;
  telephone: string;
}
