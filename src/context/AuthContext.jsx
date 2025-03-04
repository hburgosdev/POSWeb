import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import {
  ShowUsers,
  InsertCompanies,
  InsertSupAdmin,
  ShowDocTypes,
  ShowRolesName,
} from "../index";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session == null) {
        setUser(null);
      } else {
        setUser(session?.user);
        // console.log("session", session.user);
        InsertData(session?.user.id, session?.user.email);
      }
    });
    return () => {
      data.subscription;
    };
  }, []);
  const InsertData = async (id_auth, email) => {
    const response = await ShowUsers({ id_auth: id_auth });
    if (response) {
      return;
    } else {
      const responseCompany = await InsertCompanies({ id_auth: id_auth });
      //console.log("Insertar Compañia: ", responseCompany);

      const responseDocType = await ShowDocTypes({
        id_company: responseCompany?.id,
      });
      //console.log("Insertar Tipo de Documento: ", responseDocType);

      const responseRole = await ShowRolesName({ name: "superadministrator" });

      const pUser = {
        id_doc_type: responseDocType[0].id,
        id_role: responseRole?.id,
        email: email,
        reg_date: new Date(),
        id_auth: id_auth,
      };
      console.log("Datos a insertar del usuario: ", pUser);

      await InsertSupAdmin(pUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};

//PROBANDO GIT HUB