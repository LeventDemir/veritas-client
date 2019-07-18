import Vue from "vue";
import Vuex from "vuex";

import * as getters from './main/getters'
import * as mutations from './main/mutations'
import * as actions from './main/actions'

import user from "./modules/user";
import product from "./modules/product";
import message from "./modules/message";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        auth: null,
        base_url: 'http://18.188.8.112:3000/',
        token: localStorage.getItem("token") || "",
    },
    getters,
    mutations,
    actions,
    modules: {
        user,
        product,
        message
    }
});