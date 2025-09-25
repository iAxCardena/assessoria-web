import styled from "styled-components";
import {ConvidadoProvider} from "./contexto/ConvidadoContext.jsx";
import { COLOR_PAPER } from "./theme.ts";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

const AppContainer = styled.div`
  margin: 0;
  height: 100vh;
  overflow: auto;
  background-color: ${COLOR_PAPER};
`

function App() {
  return (
    <AppContainer>
      <ConvidadoProvider>
        <RouterProvider router={router}/>
      </ConvidadoProvider>
    </AppContainer>
  );
}

export default App;
