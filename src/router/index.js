import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home.vue';
import classify from '../pages/classify.vue';
import shopcart from '../pages/shopcart.vue';
import myepet from '../pages/myepet.vue';
import sort from '../pages/sort.vue';
import brand from '../pages/brand.vue';

Vue.use(Router);

export default new Router({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/shopcart',component:shopcart},
    {
      path:'/classify',
      component:classify,
      children:[
      {path:'/classify/sort',component:sort},
      {path:'/classify/brand',component:brand},
      {path:'/classify',redirect:'/classify/sort'},
      ]
    },
    {path:'/myepet',component:myepet},

  ]
})
