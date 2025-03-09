import { useQuery } from "@tanstack/react-query";
import { SettingsTemplate, Spinner1, useModulesStore } from "../index";
export function Settings() {
  const { showModules } = useModulesStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar modulos"],
    queryFn: showModules,
  });
  if (isLoading) {
    return <Spinner1/>;
  }
  if (error) {
    return <span>error...</span>;
  }
  return <SettingsTemplate />;
}
