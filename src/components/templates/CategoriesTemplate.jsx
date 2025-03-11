import styled from "styled-components";
import { v } from "../../styles/variables";
import { useState } from "react";
import Confetti from "react-confetti";
import { TableCategories } from "../organisms/tables/TableCategories";
import {
  Btn1,
  RegisterCategories,
  Search,
  Title,
  useCategoriesStore,
} from "../../index";
export function CategoriesTemplate() {
  const [openRegistration, setopenRegistration] = useState(false);
  const { dataCategories, setSearch } = useCategoriesStore();
  const [action, setaction] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  function newRecord() {
    setopenRegistration(!openRegistration);
    setaction("Nuevo");
    setdataSelect([]);
    setIsExploding(false);
  }
  return (
    <Container>
      {openRegistration && (
        <RegisterCategories
          setIsExploding={setIsExploding}
          onClose={() => setopenRegistration(!openRegistration)}
          dataSelect={dataSelect}
          action={action}
        />
      )}
      <section className="area1">
        <Title>Categorias</Title>
        <Btn1
          funcion={newRecord}
          bgcolor={v.colorSecundario}
          titulo="Nueva Categoria"
          icono={<v.iconoagregar />}
        />
      </section>
      <section className="area2">
        <Search setSearch={setSearch} />
      </section>
      <section className="main">
        {isExploding && <Confetti />}
        <TableCategories
          setDataSelect={setdataSelect}
          setAction={setaction}
          setOpenRegistration={setopenRegistration}
          data={dataCategories}
        />
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: calc(100vh - 30px);
  padding: 15px;
  display: grid;
  grid-template:
    "area1" 50px
    "area2" 50px
    "main" auto;
  .area1 {
    grid-area: area1;
    //background-color: rgba(238, 238, 238, 0.14);
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
  }
  .area2 {
    grid-area: area2;
    //background-color: rgba(238, 238, 238, 0.14);
    display: flex;
    justify-content: end;
    align-items: center;
    //gap: 15px;
  }
  .main {
    grid-area: main;
    //background-color: rgba(238, 244, 252, 0.14);
  }
`;
