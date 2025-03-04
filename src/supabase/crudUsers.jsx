import Swal from "sweetalert2";
import { supabase } from "../index";
const table = "users";

export async function ShowUsers(p) {
  const { data } = await supabase
    .from(table)
    .select()
    .eq("id_auth", p.id_auth)
    .maybeSingle();
  return data;
}

export async function InsertSupAdmin(p) {
  const { error, data } = await supabase.from(table).insert(p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Error en Insertar super administrador",
      text: error.message,
    });
    return;
  }
  //return data;
}

export async function ObtenerIdAuthSupabase() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session != null) {
    const { user } = session;
    const idauth = user.id;
    return idauth;
  }
}
