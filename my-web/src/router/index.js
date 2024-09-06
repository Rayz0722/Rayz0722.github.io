import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ResearchProject',
    name: 'ResearchProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ResearchProject" */ '../views/ResearchProjectView.vue'),
  },
  {
    path: '/Music',
    name: 'Music',
    component: () => import(/* webpackChunkName: "Music" */ '../views/MusicView.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResumeView.vue')
  },
  {
    path: '/ResearchProject/project1',
    name: 'Project1View',
    component: () => import(/* webpackChunkName: "Project1" */ '../views/Project1View.vue')
  },
  {
    path: '/ResearchProject/project2',
    name: 'Project2View',
    component: () => import(/* webpackChunkName: "Project2" */ '../views/Project2View.vue')
  },
  {
    path: '/ResearchProject/project3',
    name: 'Project3View',
    component: () => import(/* webpackChunkName: "Project3" */ '../views/Project3View.vue')
  },
  {
    path: '/ResearchProject/project4',
    name: 'Project4View',
    component: () => import(/* webpackChunkName: "Project3" */ '../views/Project4View.vue')
  },
  // Catch-all route for handling unknown routes (404 fallback)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: HomeView // or you can create a custom 404 view
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
