import Swal from "sweetalert2";
import { supabase } from "../index";
const table = "categories";

//Codigo Humano
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
    const urlimage = await UpImages(new_id, file);
    const peditimagen = {
      icon: urlimage.publicUrl,
      id: new_id,
    };
    await EditImages(peditimagen);
  }
}

async function UpImages(idcategory, file) {
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

async function EditImages(p) {
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

//Codigo IA
/*
export async function InsertCategories(p, file) {
  try {
    // Llamada al procedimiento almacenado "insertcategories" con el parámetro p
    const { error, data } = await supabase.rpc("insertcategories", p);
    if (error) {
      // Muestra una alerta de error si hay un problema con la llamada RPC
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      return; // Sale de la función si hay un error
    }

    // Obtiene el tamaño del archivo de imagen
    const img = file.size;
    if (img !== undefined) {
      // Si el tamaño de la imagen está definido, continúa con la subida de la imagen
      const new_id = data; // Obtiene el ID de la nueva categoría insertada
      try {
        const urlimage = await upImage(new_id, file); // Sube la imagen y obtiene la URL de la imagen
        // Aquí podrías hacer algo con la URL de la imagen, si es necesario
      } catch (uploadError) {
        // Muestra una alerta de error si hay un problema al subir la imagen
        Swal.fire({
          icon: "error",
          title: "Carga falló",
          text: uploadError.message,
        });
      }
    } else {
      // Muestra una advertencia si el tamaño del archivo de imagen no está definido
      Swal.fire({
        icon: "warning",
        title: "Sin imagen",
        text: "No se encuentra el tamaño del archivo. Proporcione una imagen válida.",
      });
    }
  } catch (rpcError) {
    // Muestra una alerta de error si hay un problema en el bloque try principal
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: rpcError.message,
    });
  }
}

async function upImage(idcategory, file) {
    // Define la ruta en el almacenamiento para la imagen basándote en el id de la categoría
    const route = "categories/" + idcategory;
  
    // Llama a la función de actualización de Supabase Storage para subir la imagen
    const { data, error } = await supabase.storage
      .from("images")
      .update(route, file, {
        // Establece cacheControl para esta imagen
        cacheControl: "0",
        // Upsert asegura que la imagen será creada o actualizada si ya existe
        upsert: true,
      });
  
    // Si hay un error durante la actualización, muestra una alerta de error
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      return; // Termina la función si hay un error
    }
  
    // Si la actualización es exitosa y hay datos, obtiene la URL pública de la imagen
    if (data) {
      const { data: urlimage } = await supabase.storage
        .from("images")
        .getPublicUrl(route); // Obtén la URL pública para la imagen
      return urlimage; // Devuelve la URL de la imagen
    }
  }
  */
