import { supabase } from "../index";
const table = "doc_types";

export async function ShowDocTypes(p) {
  const { data } = await supabase
    .from(table)
    .select()
    .eq("id_company", p.id_company);
  return data;
}
