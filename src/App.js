import styled from "styled-components";
import ListaConvidados from "./componentes/ListaConvidados";

const AppContainer = styled.div`
  margin: 0;
  height: 100vh;
  padding: 30px;
  overflow: auto;
  background-color:rgb(116, 116, 116);
`

function App() {
  return (
    // <ProvedorTema>
      <AppContainer>
        <ListaConvidados/>
      </AppContainer>
    // </ProvedorTema>
  );
}

export default App;
