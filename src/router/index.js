import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletView from '../views/wallet/WalletView.vue'
import WalletDetails from '@/views/wallet/WalletDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wallets',
      name: 'Wallets',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WalletView,
    },
    {
      path: '/wallets/:id',
      name: 'WalletDetails',
      component: WalletDetails, // Replace with the actual component
      props: true,
    },
  ],
})

export default router
