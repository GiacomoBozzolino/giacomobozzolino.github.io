import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';

// import NotFound from './pages/NotFound.vue';





const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },

       
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata'
        }
    ]
})


export { router };