export interface Color {
  id: number;
  name: string;
  hexa: string;
}

export interface Finition {
  id: number;
  name: string;
}

export interface Model {
  id: number;
  name: string;
}

export interface PersonalInfo {
  first_name: string;
  last_name: string;
  address: string;
  zip_code: string;
  town: string;
  birth_date: string;
  phone: string;
  checkCotisation: boolean;
  checkCertificateHonour: boolean;
  checkEngagementClub: boolean;
  checkPrivacyPolicy: boolean;
}

export interface SummaryProps {
  setStep: any;
  personalInfo: PersonalInfo;
  vehicles: Vehicles[];
}

export interface Vehicles {
  immatriculation: string;
  mine: string;
  model: string;
  color: string;
  finition: string;
}
