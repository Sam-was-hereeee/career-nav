export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      questions: {
        Row: {
          created_at: string | null
          default_value: number | null
          id: number
          learning_type: string | null
          max_label: string | null
          max_value: number | null
          min_label: string | null
          min_value: number | null
          options: string[] | null
          text: string
          type: string
        }
        Insert: {
          created_at?: string | null
          default_value?: number | null
          id?: number
          learning_type?: string | null
          max_label?: string | null
          max_value?: number | null
          min_label?: string | null
          min_value?: number | null
          options?: string[] | null
          text: string
          type: string
        }
        Update: {
          created_at?: string | null
          default_value?: number | null
          id?: number
          learning_type?: string | null
          max_label?: string | null
          max_value?: number | null
          min_label?: string | null
          min_value?: number | null
          options?: string[] | null
          text?: string
          type?: string
        }
        Relationships: []
      }
      responses: {
        Row: {
          answer: string | null
          created_at: string | null
          id: number
          question_id: number | null
          user_id: number | null
        }
        Insert: {
          answer?: string | null
          created_at?: string | null
          id?: number
          question_id?: number | null
          user_id?: number | null
        }
        Update: {
          answer?: string | null
          created_at?: string | null
          id?: number
          question_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "responses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      stepsenior_users: {
        Row: {
          created_at: string
          email: string
          has_profile: boolean | null
          id: string
          is_senior: boolean
        }
        Insert: {
          created_at?: string
          email: string
          has_profile?: boolean | null
          id?: string
          is_senior: boolean
        }
        Update: {
          created_at?: string
          email?: string
          has_profile?: boolean | null
          id?: string
          is_senior?: boolean
        }
        Relationships: []
      }
      user_senior_info: {
        Row: {
          agreement: boolean
          career: string | null
          corporation_name: string | null
          created_at: string
          double_major: string | null
          fields: string[] | null
          graduate_year: string | null
          id: string
          industry: string | null
          introduction: string | null
          major: string | null
          minor: string | null
          name: string | null
          nickname: string | null
          school: string | null
          student_id: string | null
          submitted_at: string
          user_id: string
        }
        Insert: {
          agreement: boolean
          career?: string | null
          corporation_name?: string | null
          created_at?: string
          double_major?: string | null
          fields?: string[] | null
          graduate_year?: string | null
          id?: string
          industry?: string | null
          introduction?: string | null
          major?: string | null
          minor?: string | null
          name?: string | null
          nickname?: string | null
          school?: string | null
          student_id?: string | null
          submitted_at?: string
          user_id: string
        }
        Update: {
          agreement?: boolean
          career?: string | null
          corporation_name?: string | null
          created_at?: string
          double_major?: string | null
          fields?: string[] | null
          graduate_year?: string | null
          id?: string
          industry?: string | null
          introduction?: string | null
          major?: string | null
          minor?: string | null
          name?: string | null
          nickname?: string | null
          school?: string | null
          student_id?: string | null
          submitted_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_submissions: {
        Row: {
          answers: Json
          created_at: string | null
          id: number
          result_data: Json
          result_type: string
          user_id: number | null
        }
        Insert: {
          answers: Json
          created_at?: string | null
          id?: number
          result_data: Json
          result_type: string
          user_id?: number | null
        }
        Update: {
          answers?: Json
          created_at?: string | null
          id?: number
          result_data?: Json
          result_type?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          is_anonymous: boolean | null
          is_interviewee: boolean | null
          is_waitlist: boolean | null
          name: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          is_anonymous?: boolean | null
          is_interviewee?: boolean | null
          is_waitlist?: boolean | null
          name?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          is_anonymous?: boolean | null
          is_interviewee?: boolean | null
          is_waitlist?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: number
          name: string | null
          shoutout: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          name?: string | null
          shoutout?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          name?: string | null
          shoutout?: string | null
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          content: string | null
          created_at: string
          creator: string | null
          id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          creator?: string | null
          id?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          creator?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
