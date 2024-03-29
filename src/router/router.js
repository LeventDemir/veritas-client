import Vue from "vue";
import VueRouter from "vue-router";

import store from '../store/store'

import Home from '../views/Home'
import About from '../views/About'
import Products from '../views/Products'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import ProductOperations from '../views/ProductOperations'
import Product from '../views/Product'
import Categorie from '../views/Categorie'
import NoFound from '../components/NoFound'
import Rights from '../views/Rights'
import Messages from '../views/Messages'
import Message from '../views/Message'
import Questions from '../views/Questions'


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
        beforeEnter(to, from, next) {
            store.dispatch("isAuth").then(response => {
                store.commit("setAuth", response);
                if (response) next();
                else next({ name: 'login' })
            });
        }
    },
    {
        path: "/productOperations/:page",
        component: ProductOperations,
        name: "productOperations",
        beforeEnter(to, from, next) {
            store.dispatch("isAuth").then(response => {
                store.commit("setAuth", response);
                if (response) next();
                else next({ name: 'login' })
            });
        }
    },
    {
        path: "/product/:id",
        component: Product,
        name: "product",
    },
    {
        path: "/categorie/:categorie",
        component: Categorie,
        name: "categorie",
    },
    {
        path: "/rights",
        component: Rights,
        name: "rights",
    },
    {
        path: "/messages",
        component: Messages,
        name: "messages",
        beforeEnter(to, from, next) {
            store.dispatch("isAuth").then(response => {
                store.commit("setAuth", response);
                if (response) next();
                else next({ name: 'login' })
            });
        }
    },
    {
        path: "/message/:id",
        component: Message,
        name: "message",
        beforeEnter(to, from, next) {
            store.dispatch("isAuth").then(response => {
                store.commit("setAuth", response);
                if (response) next();
                else next({ name: 'login' })
            });
        }
    },
    {
        path: "/questions",
        component: Questions,
        name: "questions",
    }, {
        path: "*",
        component: NoFound,
        name: "noFound",
    },
];


export default new VueRouter({ routes, mode: "history" });