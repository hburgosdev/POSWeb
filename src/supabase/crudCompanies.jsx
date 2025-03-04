import Swal from "sweetalert2";
import { supabase } from "../index";
const table = "companies";

//Codigo Humano
export async function InsertCompanies(p) {
  const { error, data } = await supabase.from(table).insert(p).select().maybeSingle();
  // if (error) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Error al insertar Empresa",
  //     text: error.message,
  //   });
  //   return;
  // }
  return data;
}
