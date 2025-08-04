// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yzjpgkvipialraxebgwr.supabase.co"; // substitua pelo seu URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6anBna3ZpcGlhbHJheGViZ3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjg4NjMsImV4cCI6MjA2NzY0NDg2M30.7zIZmOFoiGBieP847m8DYUzRs7OfTIPE1NYr8IWknvQ"; // substitua pela sua public key

export const supabase = createClient(supabaseUrl, supabaseKey);
