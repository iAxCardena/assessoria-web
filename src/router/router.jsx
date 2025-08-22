import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import PaginaPadrao from "../pages/PaginaPadrao";
import Eventos from "../pages/Eventos";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <PaginaPadrao/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:"",
                element: <Eventos/>
            }
        ]
    }
])