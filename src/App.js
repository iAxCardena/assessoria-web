import styled from "styled-components";
import { ThemeProvider } from "@mui/material";
import {ConvidadoProvider} from "./contexto/ConvidadoContext.jsx";
import theme from "./theme.ts";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

const AppContainer = styled.div`
  margin: 0;
  height: 100vh;
  overflow: auto;
  background-color: ${props => props.backgroundcolor};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer backgroundcolor={theme.palette.background.paper}>
        <ConvidadoProvider>
          <RouterProvider router={router}/>
        </ConvidadoProvider>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
