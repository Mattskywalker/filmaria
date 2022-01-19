import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Home from "./pages/Home";


const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/filme/:id',
        exact: true,
        component: Filme
    },
    {
        path: '/favoritos',
        exact: true,
        component: Favoritos
    },
    {
        path: '*',
        exact: true,
        component: Error
    }
]

export default routes;