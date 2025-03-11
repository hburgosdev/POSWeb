import styled from "styled-components";
import { TableActions } from "../../../index";
import { v } from "../../../styles/variables";
import { Icon } from "@iconify/react";
export function ContentTableActions({ functionUpdate, functionDelete }) {
  return (
    <Container>
      <TableActions
        funcion={functionUpdate}
        fontSize="18px"
        color="#F29C1F"
        icono = {<Icon icon="ic:outline-edit" width="24" height="24" />}
        //icono={<v.iconeditarTabla />}
      />
      <TableActions
        funcion={functionDelete}
        fontSize="20px"
        color="#f76e8e"
        icono = {<Icon icon="ic:baseline-delete-forever" width="24" />}height="24" 
        //icono={<Icon icon="fluent-emoji-high-contrast:skull" />}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  @media (max-width: 48em) {
    justify-content: end;
  }
`;
