import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import PaginaPadrao from "../pages/PaginaPadrao";
import Eventos from "../pages/Eventos";
import Convidados from "../pages/Convidados";


export const router = createBrowserRouter([
    {
        element: <PaginaPadrao/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/events",
                element: <Eventos/>,
            },
            {
                path: ":id",
                element: <Convidados/>,
            },
        ]
    }
])