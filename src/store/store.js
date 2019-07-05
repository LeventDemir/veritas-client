import Vue from "vue";
import Vuex from "vuex";

import * as getters from './main/getters'
import * as mutations from './main/mutations'
import * as actions from './main/actions'

import user from "./modules/user";
import product from "./modules/product";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        auth: null,
        base_url: 'http://127.0.0.1:3000/',
        token: localStorage.getItem("token") || "",
        settings: {}
    },
    getters,
    mutations,
    actions,
    modules: {
        user,
        product
    }
});