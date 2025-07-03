import { createBrowserRouter } from "react-router";
import ListaConvidados from "../pages/Convidados";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ListaConvidados/>,
        children: []
    }
])