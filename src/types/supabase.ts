export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      car_colors: {
        Row: {
          code: string | null;
          hexa: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          code?: string | null;
          hexa?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          code?: string | null;
          hexa?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      car_finitions: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      car_models: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      cars: {
        Row: {
          car_color_id: number;
          car_finition_id: number;
          car_model_id: number;
          id: number;
          immatriculation: string;
          member_id: number;
          min: string;
        };
        Insert: {
          car_color_id: number;
          car_finition_id?: number;
          car_model_id?: number;
          id?: number;
          immatriculation: string;
          member_id: number;
          min?: string;
        };
        Update: {
          car_color_id?: number;
          car_finition_id?: number;
          car_model_id?: number;
          id?: number;
          immatriculation?: string;
          member_id?: number;
          min?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'car_finition_fk';
            columns: ['car_finition_id'];
            referencedRelation: 'car_finitions';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'car_model_fk';
            columns: ['car_model_id'];
            referencedRelation: 'car_models';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'members_cars_color_id_fkey';
            columns: ['car_color_id'];
            referencedRelation: 'car_colors';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'members_cars_member_id_fkey';
            columns: ['member_id'];
            referencedRelation: 'members';
            referencedColumns: ['id'];
          }
        ];
      };
      event: {
        Row: {
          dates: string | null;
          description: string | null;
          id: number;
          month: number;
          theme: number | null;
          title: string | null;
          year: number | null;
        };
        Insert: {
          dates?: string | null;
          description?: string | null;
          id?: number;
          month: number;
          theme?: number | null;
          title?: string | null;
          year?: number | null;
        };
        Update: {
          dates?: string | null;
          description?: string | null;
          id?: number;
          month?: number;
          theme?: number | null;
          title?: string | null;
          year?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'event_theme_fkey';
            columns: ['theme'];
            referencedRelation: 'event_theme';
            referencedColumns: ['id'];
          }
        ];
      };
      event_theme: {
        Row: {
          background: string | null;
          color: string | null;
          id: number;
          name: string;
        };
        Insert: {
          background?: string | null;
          color?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          background?: string | null;
          color?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      members: {
        Row: {
          address: string | null;
          birth_date: string | null;
          country: string | null;
          created_at: string | null;
          email: string | null;
          first_name: string | null;
          id: number;
          immatriculation: string | null;
          last_name: string | null;
          password: string | null;
          phone: string | null;
          town: string | null;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          birth_date?: string | null;
          country?: string | null;
          created_at?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          immatriculation?: string | null;
          last_name?: string | null;
          password?: string | null;
          phone?: string | null;
          town?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          birth_date?: string | null;
          country?: string | null;
          created_at?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          immatriculation?: string | null;
          last_name?: string | null;
          password?: string | null;
          phone?: string | null;
          town?: string | null;
          zip_code?: string | null;
        };
        Relationships: [];
      };
      museum: {
        Row: {
          car_color_id: number | null;
          car_finition_id: number | null;
          car_model_id: number | null;
          deleted_at: string;
          id: number;
          immatriculation: string | null;
          member_id: number | null;
          min: string | null;
          reason: string | null;
        };
        Insert: {
          car_color_id?: number | null;
          car_finition_id?: number | null;
          car_model_id?: number | null;
          deleted_at?: string;
          id?: number;
          immatriculation?: string | null;
          member_id?: number | null;
          min?: string | null;
          reason?: string | null;
        };
        Update: {
          car_color_id?: number | null;
          car_finition_id?: number | null;
          car_model_id?: number | null;
          deleted_at?: string;
          id?: number;
          immatriculation?: string | null;
          member_id?: number | null;
          min?: string | null;
          reason?: string | null;
        };
        Relationships: [];
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
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      export_database: {
        Args: {
          schema: string;
        };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
