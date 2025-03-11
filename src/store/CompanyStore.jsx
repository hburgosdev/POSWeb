import { create } from "zustand";
import { InsertCompanies, ShowCompaniesxIduser } from "../index";

export const useCompanyStore = create((set) => ({
  dataempresa: [],
  showCompany: async(p)=>{
    const response = await ShowCompaniesxIduser(p)
    set({dataempresa:response})
    //console.log("Empresa por usuario: ", response);
    return response;
  },
  insertcompany: async (p) => {
    const response = await InsertCompanies(p);
    //console.log("respuesta empresa", response);
  },
}));