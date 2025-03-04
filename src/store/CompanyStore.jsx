import { create } from "zustand";
import { InsertCompanies } from "../index";

export const useCompanyStore = create((set) => ({
  dataempresa: [],
  insertcompany: async (p) => {
    const response = await InsertCompanies(p);
    console.log("respuesta empresa", response);
  },
}));