import { supabase } from "../index";
const table = "roles";

export async function ShowRolesName(p) {
  const { data } = await supabase
    .from(table)
    .select()
    .eq("name", p.name)
    .maybeSingle();
  return data;
}
