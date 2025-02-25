import styled from "styled-components";
import ListaConvidados from "./componentes/ListaConvidados";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";

const AppContainer = styled.div`
  margin: 0;
  height: 100vh;
  padding: 30px;
  overflow: auto;
  background-color: ${props => props.backgroundColor};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer backgroundColor={theme.palette.grey[300]}>
        <ListaConvidados/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
