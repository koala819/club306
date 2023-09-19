export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      car_colors: {
        Row: {
          code: string | null;
          hexa: string | null;
          id: number;
          nom: string | null;
        };
        Insert: {
          code?: string | null;
          hexa?: string | null;
          id?: number;
          nom?: string | null;
        };
        Update: {
          code?: string | null;
          hexa?: string | null;
          id?: number;
          nom?: string | null;
        };
      };
      members: {
        Row: {
          address: string | null;
          birth_date: string | null;
          car_color: string | null;
          car_model: string | null;
          created_at: string | null;
          email: string | null;
          first_name: string | null;
          id: number;
          immatriculation: string | null;
          last_name: string | null;
          password: string | null;
          phone: string | null;
          town: string | null;
          username: string | null;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          birth_date?: string | null;
          car_color?: string | null;
          car_model?: string | null;
          created_at?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          immatriculation?: string | null;
          last_name?: string | null;
          password?: string | null;
          phone?: string | null;
          town?: string | null;
          username?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          birth_date?: string | null;
          car_color?: string | null;
          car_model?: string | null;
          created_at?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          immatriculation?: string | null;
          last_name?: string | null;
          password?: string | null;
          phone?: string | null;
          town?: string | null;
          username?: string | null;
          zip_code?: string | null;
        };
      };
      members_cars: {
        Row: {
          color_id: number;
          finition: string | null;
          id: number;
          immatriculation: string;
          member_id: number;
          min: string | null;
          modele: string | null;
        };
        Insert: {
          color_id: number;
          finition?: string | null;
          id?: number;
          immatriculation: string;
          member_id: number;
          min?: string | null;
          modele?: string | null;
        };
        Update: {
          color_id?: number;
          finition?: string | null;
          id?: number;
          immatriculation?: string;
          member_id?: number;
          min?: string | null;
          modele?: string | null;
        };
      };
      partners_codePromo: {
        Row: {
          alt: string | null;
          code: string | null;
          id: number;
          linkImg: string | null;
          remise: string | null;
          site: string | null;
          title: string | null;
        };
        Insert: {
          alt?: string | null;
          code?: string | null;
          id?: number;
          linkImg?: string | null;
          remise?: string | null;
          site?: string | null;
          title?: string | null;
        };
        Update: {
          alt?: string | null;
          code?: string | null;
          id?: number;
          linkImg?: string | null;
          remise?: string | null;
          site?: string | null;
          title?: string | null;
        };
      };
    };
  };
}
