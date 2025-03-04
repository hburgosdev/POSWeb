import { create } from "zustand";
import { supabase, ShowUsers } from "../index";

//Codigo Humano
export const useAuthStore = create((set) => ({
  loginGoogle: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log("data user", data)
    if(data){
      await ShowUsers({id_auth:data})
    }
  },
  signOut: async () => {
    await supabase.auth.signOut();
  },
}));

//Codigo IA
// export const useAuthStore = create((set) => ({
//   user: null, // Estado inicial del usuario

//   loginGoogle: async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//       });
//       if (error) throw error;
//       set({ user: data.user }); // Actualizar el estado con el usuario autenticado
//     } catch (error) {
//       console.error("Error during Google login:", error.message);
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed",
//         text: error.message,
//       });
//     }
//   },

//   signOut: async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//       set({ user: null }); // Actualizar el estado cuando el usuario cierra sesión
//     } catch (error) {
//       console.error("Error during sign out:", error.message);
//       Swal.fire({
//         icon: "error",
//         title: "Logout Failed",
//         text: error.message,
//       });
//     }
//   },
// }));
