import Vue from "vue";
import VueRouter from "vue-router";


import Home from '../views/Home'
import About from '../views/About'
import Products from '../views/Products'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'


Vue.use(VueRouter);


// Routes
const routes = [
    {
        path: "/",
        component: Home,
        name: "home",
    },
    {
        path: "/about",
        component: About,
        name: "about",
    },
    {
        path: "/products",
        component: Products,
        name: "products",
    },
    {
        path: "/contact",
        component: Contact,
        name: "contact",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "dashboard",
    },
];


export default new VueRouter({ routes, mode: "history" });