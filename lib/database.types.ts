export type Database = {
  public: {
    Tables: {
      wines: {
        Row: {
          id: string;
          name: string;
          producer: string | null;
          region: string | null;
          country: string | null;
          grape: string | null;
          vintage: number | null;
          description: string | null;
          image_url: string | null;
          raw_label_text: string | null;
          scanned_at: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["wines"]["Row"], "id" | "scanned_at" | "created_at"> & {
          id?: string;
          scanned_at?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["wines"]["Insert"]>;
      };
      films: {
        Row: {
          id: string;
          title: string;
          director: string | null;
          year: number | null;
          genre: string[] | null;
          description: string | null;
          poster_url: string | null;
          filmweb_rating: number | null;
          rotten_tomatoes_rating: number | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["films"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["films"]["Insert"]>;
      };
      pairings: {
        Row: {
          id: string;
          wine_id: string;
          film_id: string;
          bridge: string;
          bridge_title: string | null;
          education_concept: string | null;
          education_text: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["pairings"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["pairings"]["Insert"]>;
      };
    };
  };
};
