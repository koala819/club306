interface ArticleProps {
  uid: string | null
  data: {
    featureImageUrl: { url: string; alt: string }
    dateEvent: string
    title: { type: string; text: string }[]
    description: { type: string; text: string }[]
  }
}

interface ArticlesProps {
  articles: {
    uid: string | null
    data: {
      featureImageUrl: { url: string; alt: string }
      dateEvent: string
      title: { type: string; text: string }[]
      description: { type: string; text: string }[]
    }
  }[]
}

interface Car {
  color: {
    name: string | null
    hexa: string | null
  }
  finition: string
  immatriculation: string
  mine: string
  model: string
}

interface CardStaffProps {
  picture: string
  name?: string
  role?: string
  content?: string
  car?: string
  localisation?: string
  facebook?: any
  github?: string
  linkedin?: string
  insta?: any
  mail?: any
  children?: React.ReactNode
  youtube?: string
}

interface CheckoutHelloAsso {
  totalAmount: number
  initialAmount: number
  itemName: string
  backUrl: string
  errorUrl: string
  returnUrl: string
  containsDonation: boolean
  terms?: { amount: number; date: string }[]
  payer: {
    firstName: string
    lastName: string
    email: string
    dateOfBirth: string
    address: string
    city: string
    zipCode: string
    country: string
    companyName?: string
  }
  metadata?: any
  trackingParameter?: string
}

interface Color {
  id: number
  name: string
  hexa: string
}

interface Events {
  id?: number
  month?: number | undefined
  title?: string
  description?: string
  theme?: number
  dates?: string
  year?: number
}

interface Finition {
  id: number
  name: string
}

interface HelloAssoMember {
  address: string
  birth_date: string
  phone: string
  email: string
  first_name: string
  last_name: string
  town: string
  zip_code: string
  id: number
}

interface MailPwd {
  email: string
  pwd?: string
  cpwd?: string
}

interface Member {
  address?: string
  birth_date?: string
  created_at?: string
  email?: string
  first_name?: string
  id: number
  country?: string
  last_name?: string
  phone?: string
  town?: string
  zip_code?: string
}

interface Model {
  id: number
  name: string
}

interface PartnerInfoType {
  id?: number
  title?: string
  code?: string
  linkImg?: string
  remise?: string
  site?: string
  alt?: string
}

interface PersonalInfo {
  first_name: string
  last_name: string
  address: string
  zip_code: string
  town: string
  birth_date: Date
  phone: string
  email: string
  pwd: string
}

interface SchemaPersonalInfo {
  first_name: string
  last_name: string
  address: string
  zip_code: string
  town: string
  birth_date: Date
  phone: string
  checkCotisation: boolean | undefined
  checkCertificateHonour: boolean | undefined
  checkEngagementClub: boolean | undefined
  checkPrivacyPolicy: boolean | undefined
}

interface ThankYouData {
  first_name: string
  last_name: string
  email: string
}

interface ThemesEvent {
  id: number
  name: string
  background: string
  color: string
}

interface Vehicles {
  immatriculation: string
  mine: string
  model: string
  color: string
  finition: string
}

// Interface pour déclarer le type de handleThemeChange
interface Navbar306Props {
  withMember?: boolean
}

interface ThemeSwitcherProps {
  onThemeChange: (newTheme: string) => void
  withMember?: boolean
}

export type {
  ArticleProps,
  ArticlesProps,
  Car,
  CardStaffProps,
  CheckoutHelloAsso,
  Color,
  Events,
  Finition,
  HelloAssoMember,
  MailPwd,
  Member,
  Model,
  PartnerInfoType,
  PersonalInfo,
  SchemaPersonalInfo,
  ThankYouData,
  ThemesEvent,
  Vehicles,
  Navbar306Props,
  ThemeSwitcherProps,
}
