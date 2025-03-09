import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";
import { Btn1, Search, Title } from "../../index";
import { v } from "../../styles/variables";
export function CategoriesTemplate() {
  const { signOut } = useAuthStore();
  const { user } = UserAuth();
  return (
    <Container>
      <section className="area1">
        <Title>Categorias</Title>
        <Btn1
          bgcolor={v.colorSecundario}
          titulo="Nueva Categoria"
          icono={<v.iconoagregar />}
        />
      </section>
      <section className="area2">
        <Search/>
      </section>
      <section className="main">main</section>
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
    background-color: rgba(238,238,238, 0.14);
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(238,238,238, 0.14);
    display: flex;
    justify-content: end;
    align-items: center;
    //gap: 15px;
  }
  .main {
    grid-area: main;
    background-color: rgba(238,244,252, 0.14);
  }
`;
