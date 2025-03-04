import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoutes, UserAuth } from "../index";
export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route element={<ProtectedRoutes user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
