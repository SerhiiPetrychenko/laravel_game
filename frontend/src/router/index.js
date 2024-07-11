import { createRouter, createWebHistory } from 'vue-router';
import {getByNameParam, getRegisterUser, getUserToken} from "../helpers/routeHelper";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/app',
            name: 'FirstPage',
            meta: {
                requiresAuth: false,
            },
            component: () => import(/* webpackChunkName: "FirstPage" */ '../views/FirstPage.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            meta: {
                requiresAuth: false,
            },
            component: () => import(/* webpackChunkName: "NotFound.vue" */ '../views/NotFound.vue')
        },
    ],
});

router.beforeEach((to, from, next) => {
    const {requiresAuth = false,
        requiresGuest = false,
        confirmedRoles = []} = to?.meta;

    const token = getUserToken();

    if (!requiresAuth &&
        requiresGuest &&
        !token) {
        return next();
    }

    if (!requiresAuth &&
        !requiresGuest) {
        return next();
    }

    if (!requiresAuth &&
        requiresGuest &&
        token) {

        return next({
            name: router.back(),
            params: {
                nextUrl: to.fullPath,
            }
        });
    }

    const user = getRegisterUser();

    if (confirmedRoles?.length &&
        (!user || !confirmedRoles.includes(user.role))) {
        return next({
                    name: 'Login',
                    params: {
                        nextUrl: to.fullPath,
                    }
                });
    }

    return next();
});
export default router;
