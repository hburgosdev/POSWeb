import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

export function Spinner1() {
  return (
    <Container>
      <ScaleLoader color="#C88B09" size={100} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
