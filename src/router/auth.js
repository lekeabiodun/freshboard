import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const auth_routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
];

export default auth_routes;