import type { ReactNode } from 'react';

export type ArticleProps = {
  uid: string | null;
  data: {
    featureImageUrl: { url: string; alt: string };
    dateEvent: string;
    title: { type: string; text: string }[];
    description: { type: string; text: string }[];
  };
};

export type ArticlesProps = {
  articles: {
    uid: string | null;
    data: {
      featureImageUrl: { url: string; alt: string };
      dateEvent: string;
      title: { type: string; text: string }[];
      description: { type: string; text: string }[];
    };
  }[];
};

export type CarType = {
  color: {
    name: string | null;
    hexa: string | null;
  };
  finition: string;
  immatriculation: string;
  min: string;
  model: string;
};

export type CardStaffProps = {
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
  children?: ReactNode;
  youtube?: string;
};

export type LayoutProps = {
  title: string;
  displayNavbar?: boolean;
  children: ReactNode;
  session?: any;
};

export type MemberType = {
  address: string;
  birth_date: string;
  car_color: string;
  car_model: string;
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  immatriculation: string;
  last_name: string;
  phone: string;
  town: string;
  zip_code: string;
};

export interface PartnerInfoType {
  id: number;
  title: string;
  code: string;
  linkImg: string;
  remise: string;
  site: string;
  alt: string;
}
