import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wvbvzoevpwlyrmpsdqwe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2YnZ6b2V2cHdseXJtcHNkcXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY0OTksImV4cCI6MTk5NjIzMjQ5OX0.xBVfTfX7gnJQnUXLfZG0D4w31HCrt5pPcBKUX90auWM';

export const supabase = createClient(supabaseUrl, supabaseKey)



