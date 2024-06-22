import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zoixhugkgwxlhpqjtjqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvaXhodWdrZ3d4bGhwcWp0anFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNjMzNjAsImV4cCI6MjAzNDYzOTM2MH0.hWlsjNMSN334dnxNIRmIxyC2gTQal4Cma7lbo6Ctb5U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
