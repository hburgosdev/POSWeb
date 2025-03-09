import { create } from "zustand";
import {
  DeleteCategories,
  InsertCategories,
  SearchCategories,
  ShowCategories,
  UpdateCategories,
} from "../index";

export const useCategoriesStore = create((set, get) => ({
  search: "",
  setSearch: (p) => {
    set({ search: p });
  },
  dataCategories: [],
  categoriesItemSelect: [],
  parameters: {},
  showCategories: async (p) => {
    const response = await ShowCategories(p);
    set({ parameters: p });
    set({ dataCategories: response });
    set({ categoriesItemSelect: response[0] });
    return response;
  },
  selectCategories: (p) => {
    set({ categoriesItemSelect: p });
  },
  insertCategories: async (p, file) => {
    await InsertCategories(p, file);
    const { showCategories } = get();
    const { parameters } = get();
    set(showCategories(parameters));
  },
  deleteCategories: async (p) => {
    await DeleteCategories(p);
    const { showCategories } = get();
    const { parameters } = get();
    set(showCategories(parameters));
  },
  updateCategories: async (p, fileold, filenew) => {
    await UpdateCategories(p, fileold, filenew);
    const { showCategories } = get();
    const { parameters } = get();
    set(showCategories(parameters));
  },
  searchCategories: async (p) => {
    const response = await SearchCategories(p);
    set({ dataCategories: response });
    return response;
  },
}));
