import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import('../layouts/MyLayout.vue'),
      children: [
        {path: '/', name: 'HomePage', component: () => import('../pages/HomePage.vue')}
      ]
    },
    {
      path: "/contact",
      component: () => import('../layouts/MyLayout.vue'),
      children: [
        {path: '', name: 'ContactPage', component: () => import('../pages/ContactPage.vue')}
      ]
    },
    {
      path: "*",
      component: () => import('../layouts/MyLayout.vue'),
      children: [
        {path: '', name: 'HomePage', component: () => import('../pages/HomePage.vue')}
      ]
    }
  ]
})

export default router