import styled from "styled-components";
import Header from "./componentes/Header";
import ListaConvidados from "./componentes/ListaConvidados";

const AppContainer = styled.div`
  margin: auto;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <ListaConvidados/>
    </AppContainer>
  );
}

export default App;
