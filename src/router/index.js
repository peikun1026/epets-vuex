import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home.vue';
import classify from '../pages/classify.vue';
import shopcart from '../pages/shopcart.vue';
import myepet from '../pages/myepet.vue';

Vue.use(Router);

export default new Router({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/shopcart',component:shopcart},
    {path:'/classify',component:classify},
    {path:'/myepet',component:myepet},
  ]
})
