import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

export const privateRoutes = [
    {
        path: '/',
        element: Main,
    }
];


export const publicRoutes = [
    {
        path: '/login',
        element: Login,
    },
    {
        path: '/register',
        element: Register,
    },
    {
        path: '/forgot-password',
        element: ForgotPassword,
    },
];