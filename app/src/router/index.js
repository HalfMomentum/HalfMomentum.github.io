import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import About from '../components/About.vue'
import Project from '../components/Project.vue'
import Experience from '../components/Experience.vue'
// import Blog from '../components/Blog.vue'  -- coming (real) soom
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ,
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'lost',
      component: Index
    }
  ]
})
