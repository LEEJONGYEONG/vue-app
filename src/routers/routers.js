import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            name: 'TestHome',
            component: () => import('../views/TestHome.vue')
        },

        {
            path: '/JY_P_NoticeList',
            name: 'JY_P_NoticeList',
            component: () => import('../views/JY_P_NoticeList.vue')
        },
    
        {
            path: '/JY_P_NoticeDetails',
            name: 'JY_P_NoticeDetails',
            component: () => import('../views/JY_P_NoticeDetails.vue')
        },
    
        {
            path: '/JY_A_NoticeList',
            name: 'JY_A_NoticeList',
            component: () => import('../views/JY_A_NoticeList.vue')
        },
    
        {
            path: '/JY_A_NoticeWrite',
            name: 'JY_A_NoticeWrite',
            component: () => import('../views/JY_A_NoticeWrite.vue')
        },
    
        {
            path: '/JY_A_NoticeDetails',
            name: 'JY_A_NoticeDetails',
            component: () => import('../views/JY_A_NoticeDetails.vue')
        },
    
        {
            path: '/JY_P_NoticeModify',
            name: 'JY_P_NoticeModify',
            component: () => import('../views/JY_A_NoticeModify.vue')
        }
    ]
});

export default router;