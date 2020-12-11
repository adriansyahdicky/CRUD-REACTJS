import RegisterComponent from '../containers/Register';
import LoginComponent from '../containers/Login';
import KategoriComponent from '../containers/Kategori';

const routes = [
    {
        path: "/auth/register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "/auth/login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "/",
        component: KategoriComponent,
        title: "Kategori"
    },
];

export default routes;