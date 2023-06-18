import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import CreateQuick from '../components/CreateQuick.vue';
import StartPage from '../components/StartPage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: StartPage},
    { path: '/home', component: HomePage},
    { path: '/tasks', component: CreateQuick}

];

const router = new VueRouter({
  routes
});

export default router;
