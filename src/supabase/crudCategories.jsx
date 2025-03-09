import Swal from "sweetalert2";
import { supabase } from "../index";
const table = "categories";

export async function InsertCategories(p, file) {
  const { error, data } = await supabase.rpc("insertcategories", p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
  const img = file.size;
  if (img != undefined) {
    const new_id = data;
    const urlimage = await InsertImages(new_id, file);
    const peditimagen = {
      icon: urlimage.publicUrl,
      id: new_id,
    };
    await UpdateImages(peditimagen);
  }
}

async function InsertImages(idcategory, file) {
  const route = "categories/" + idcategory;
  const { data, error } = await supabase.storage
    .from("images")
    .update(route, file, {
      cacheControl: "0",
      upsert: true,
    });
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
  if (data) {
    const { data: urlimage } = await supabase.storage
      .from("images")
      .getPublicUrl(route);
    return urlimage;
  }
}

async function UpdateImages(p) {
  const { error } = await supabase.from("categories").update(p).eq("id", p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
}

export async function ShowCategories(p) {
  const { data } = await supabase
    .from(table)
    .select()
    .eq("id_company", p.id_company)
    .order("id", { ascending: false });
  return data;
}

export async function SearchCategories(p) {
  const { data } = supabase
    .from(table)
    .select()
    .eq("id_company", p.id_company)
    .ilike("name", "%" + p.description + "%");
  return data;
}

export async function DeleteCategories(p) {
  const { error } = await supabase.from(table).delete().eq("id", p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
  if (p.icon != "-") {
    const route = "categories/" + p.id;
    await supabase.storage.from("images").remove([route]);
  }
}

export async function UpdateCategories(p, fileold, filenew) {
  const { error } = await supabase.rpc("updateCategories", p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
  if (filenew != "-" && filenew.size != undefined) {
    if (fileold != "-") {
      await UpdateImages(p._id, filenew);
    } else {
      const dataImage = await InsertImages(p._id, filenew);
      const peditimagen = {
        icon: dataImage.publicUrl,
        id: p._id,
      };
      await UpdateImages(peditimagen);
    }
  }
}

export async function UpdateImages(id, file) {
  const route = "categories/" + id;
  await supabase.storage.from("images").update(route, file, {
    cacheControl: "0",
    upsert: true,
  });
}
