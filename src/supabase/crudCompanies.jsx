import { supabase } from "../index";
const table = "companies";

export async function InsertCompanies(p) {
  const { error, data } = await supabase
    .from(table)
    .insert(p)
    .select()
    .maybeSingle();
  return data;
}

export async function ShowCompaniesxIduser(p) {
  const { data } = await supabase.rpc("showcompaniesxiduser", p).maybeSingle();
  return data;
}
