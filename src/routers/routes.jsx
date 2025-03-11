import { Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Home,
  Login,
  Settings,
  Categories,
  ProtectedRoutes,
  UserAuth,
  useUsersStore,
  useCompanyStore,
  Spinner1,
} from "../index";
export function MyRoutes() {
  const { user } = UserAuth();
  const { dataUsers, showUsers } = useUsersStore();
  const { showCompany, dataempresa } = useCompanyStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: showUsers,
    refetchOnWindowFocus: false,
  });
  const { data: a } = useQuery({
    queryKey: ["mostrar empresa", dataUsers?.id],
    queryFn: () => showCompany({ _id_user: dataUsers?.id }),
    enabled: !!dataUsers,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }
  return (
    <Routes>
      <Route element={<ProtectedRoutes user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/categories" element={<Categories />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
