import {
  CategoriesTemplate,
  useCategoriesStore,
  useCompanyStore,
  Spinner1,
} from "../index";
import { useQuery } from "@tanstack/react-query";

export function Categories() {
  const { showCategories, searchCategories, search } = useCategoriesStore();
  const { dataempresa } = useCompanyStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar categorias", dataempresa?.id],
    queryFn: () => showCategories({ id_company: dataempresa?.id }),
    enable: !!dataempresa,
    refetchOnWindowFocus: false,
  });
  //Buscar categorias
  const {} = useQuery({
    queryKey: ["buscar categorias", search],
    queryFn: () =>
      searchCategories({ id_company: dataempresa?.id, description: search }),
    enable: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }
  return <CategoriesTemplate />;
}
