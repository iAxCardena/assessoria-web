import { createBrowserRouter } from "react-router";
import ListaConvidados from "../pages/Convidados";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ListaConvidados/>,
        errorElement: <ErrorPage/>,
        children: []
    } //TODO criar tela default e readicionar o Header
])