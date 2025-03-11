import { create } from "zustand";
import { ShowUsers, ObtainIdAuthSupabase } from "../index";

export const useUsersStore = create((set) => ({
  dataUsers: [],
  showUsers: async () => {
    const idauth = await ObtainIdAuthSupabase();
    // console.log("ID de autenticación:", idauth); // Depuración
    // if (!idauth) {
    //   console.error("ID de autenticación no obtenido");
    //   return;
    // }
    const response = await ShowUsers({ id_auth: idauth });
    //console.log("datos de usuario", response);
    set({ dataUsers: response });
    return response;
  },
}));
