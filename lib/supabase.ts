export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      gpt_one: {
        Row: {
          created_at: string
          email: string | null
          id: string
          messages: string | null
          user_input: string | null
          vector_one: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          messages?: string | null
          user_input?: string | null
          vector_one?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          messages?: string | null
          user_input?: string | null
          vector_one?: string | null
        }
        Relationships: []
      }
      nods_page: {
        Row: {
          checksum: string | null
          id: number
          meta: Json | null
          parent_page_id: number | null
          path: string
          source: string | null
          type: string | null
        }
        Insert: {
          checksum?: string | null
          id?: number
          meta?: Json | null
          parent_page_id?: number | null
          path: string
          source?: string | null
          type?: string | null
        }
        Update: {
          checksum?: string | null
          id?: number
          meta?: Json | null
          parent_page_id?: number | null
          path?: string
          source?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nods_page_parent_page_id_fkey"
            columns: ["parent_page_id"]
            isOneToOne: false
            referencedRelation: "nods_page"
            referencedColumns: ["id"]
          }
        ]
      }
      nods_page_section: {
        Row: {
          content: string | null
          embedding: string | null
          heading: string | null
          id: number
          page_id: number
          slug: string | null
          token_count: number | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id: number
          slug?: string | null
          token_count?: number | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id?: number
          slug?: string | null
          token_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nods_page_section_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "nods_page"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_page_parents: {
        Args: {
          page_id: number
        }
        Returns: {
          id: number
          parent_page_id: number
          path: string
          meta: Json
        }[]
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      match_page_sections: {
        Args: {
          embedding: string
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          id: number
          page_id: number
          slug: string
          heading: string
          content: string
          similarity: number
        }[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never