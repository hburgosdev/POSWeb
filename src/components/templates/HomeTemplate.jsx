import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";
export function HomeTemplate() {
  const { signOut } = useAuthStore();
  const { user } = UserAuth();
  return (
    <Container>
      <span>HomeTemplate</span>
      <button onClick={signOut}>Cerrar Sesion</button>
      <span>{user.id}</span>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
