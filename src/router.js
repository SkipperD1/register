import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

const routes =  [
    {path: '/', component: Login},
    {path: '/Register', component: Register}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;