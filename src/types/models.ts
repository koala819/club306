interface ArticleProps {
  uid: string | null;
  data: {
    featureImageUrl: { url: string; alt: string };
    dateEvent: string;
    title: { type: string; text: string }[];
    description: { type: string; text: string }[];
  };
}

interface ArticlesProps {
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

interface CardStaffProps {
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

interface Color {
  id: number;
  name: string;
  hexa: string;
}

interface Finition {
  id: number;
  name: string;
}

interface MailPwd {
  email: string;
  pwd?: string;
  cpwd?: string;
}

interface Member {
  address?: string;
  birth_date?: string;
  created_at?: string;
  email?: string;
  first_name?: string;
  id: number;
  country?: string;
  last_name?: string;
  phone?: string;
  town?: string;
  zip_code?: string;
}

interface Model {
  id: number;
  name: string;
}

interface PartnerInfoType {
  id?: number;
  title?: string;
  code?: string;
  linkImg?: string;
  remise?: string;
  site?: string;
  alt?: string;
}

interface PersonalInfo {
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

interface Vehicles {
  immatriculation: string;
  mine: string;
  model: string;
  color: string;
  finition: string;
}

export type {
  ArticleProps,
  ArticlesProps,
  CardStaffProps,
  Color,
  Finition,
  MailPwd,
  Member,
  Model,
  PartnerInfoType,
  PersonalInfo,
  Vehicles,
};
