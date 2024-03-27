import { createClient } from "@supabase/supabase-js"

const TEMP = {
    supabaseUrl: "https://esrbpchpwtlymoddohsm.supabase.co",
    supabaseKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcmJwY2hwd3RseW1vZGRvaHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMjM0OTYsImV4cCI6MjAwNjg5OTQ5Nn0.CEL5hKTXExxfbG0VM9T074HZEZUAOfdYmRFYCEiWuPo",
}

export const client = createClient(TEMP.supabaseUrl, TEMP.supabaseKey)
