export interface ArticleProps {
  uid: string | null;
  data: {
    featureImageUrl: { url: string; alt: string };
    dateEvent: string;
    title: { type: string; text: string }[];
    description: { type: string; text: string }[];
  };
}

export interface ArticlesProps {
  articles: {
    uid: string | null;
    data: {
      featureImageUrl: { url: string; alt: string };
      dateEvent: string;
      title: { type: string; text: string }[];
      description: { type: string; text: string }[];
    };
  }[];
}

export interface CardStaffProps {
  picture: string;
  name?: string;
  role?: string;
  content?: string;
  car?: string;
  localisation?: string;
  facebook?: any;
  github?: string;
  linkedin?: string;
  insta?: any;
  mail?: any;
  children?: React.ReactNode;
  youtube?: string;
}

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
  pwd?: string;
  cpwd?: string;
}

export interface Model {
  id: number;
  name: string;
}

export interface PartnerInfoType {
  id?: number;
  title?: string;
  code?: string;
  linkImg?: string;
  remise?: string;
  site?: string;
  alt?: string;
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
