import styled from "styled-components";
import {
  Btn1,
  Footer,
  InputText,
  InputText2,
  Line,
  Title,
  useAuthStore,
  useCompanyStore,
} from "../../index";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";
export function LoginTemplate() {
  const { loginGoogle } = useAuthStore();

  // const {InsertCompany} = useCompanySotre();
  // const insert= async ()=>{
  //   const p ={
  //     name:"pruebafrontend 2"
  //   }
  //   await InsertCompany(p)
  // }

  return (
    <Container>
      <div className="card">
        <ContainerLogo>
          <img src={v.logo} />
          <span>Julia 1.0</span>
        </ContainerLogo>
        <Title $paddingbottom="20px">Ingresar</Title>
        <form>
          <InputText2>
            <input
              className="form__field"
              placeholder="email/usuario"
              type="text"
            />
          </InputText2>
          <InputText2>
            <input
              className="form__field"
              placeholder="contraseña"
              type="password"
            />
          </InputText2>
          {/* <InputText>
              <input
                className="form__field"
                placeholder="email/usuario"
                type="text"
              />
            </InputText>
            <InputText>
              <input
                className="form__field"
                placeholder="contraseña"
                type="password"
              />
            </InputText> */}
          <Btn1
            titulo="INGRESAR"
            bgcolor="#0EA5F6"
            color="255,255,255"
            width="100%"
          />
        </form>
        <Line>
          <span>0</span>
        </Line>
        <Btn1
          funcion={loginGoogle}
          titulo="Google"
          bgcolor="#fff"
          color="0,0,0"
          width="100%"
          icono={<v.iconogoogle />}
        />

        {/* <Btnsave
          funcion={insert}
          titulo="Insertar Empresa"
          bgcolor="#fff"
          color="0,0,0"
          width="100%"
        /> */}
      </div>
      <Footer></Footer>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 10px;
  color: ${({ theme }) => theme.text};
  .card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    @media ${Device.tablet} {
      width: 400px;
    }
  }
`;

const ContainerLogo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  span {
    font-weight: 700;
  }
  img {
    width: 10%;
  }
`;
