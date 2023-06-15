export interface Color {
  id: number;
  name: string;
  hexa: string;
}

export interface Finition {
  id: number;
  name: string;
}

export interface MailPwd {
  email: string;
  pwd: string;
  cpwd?: string;
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
  birth_date: Date;
  phone: string;
  checkCotisation: boolean | undefined;
  checkCertificateHonour: boolean | undefined;
  checkEngagementClub: boolean | undefined;
  checkPrivacyPolicy: boolean | undefined;
}

export interface Vehicles {
  immatriculation: string;
  mine: string;
  model: string;
  color: string;
  finition: string;
}
