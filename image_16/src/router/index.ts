/* eslint-disable prettier/prettier */
import { createRouter, createWebHashHistory } from 'vue-router';
// import axios from 'axios';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/empty',
            name: 'empty',
            component: () => import('@/views/pages/Empty.vue')
        },
        {
            path: '/',
            name: 'example',
            component: () => import('@/views/pages/Example.vue')
        }
    ]
});

export default router;
