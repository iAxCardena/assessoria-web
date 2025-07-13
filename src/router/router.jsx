import { createBrowserRouter } from "react-router";
import ListaConvidados from "../pages/Convidados";
import ErrorPage from "../pages/ErrorPage";
import PaginaPadrao from "../pages/PaginaPadrao";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <PaginaPadrao/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:"",
                element: <ListaConvidados/>
            }
        ]
    }
])