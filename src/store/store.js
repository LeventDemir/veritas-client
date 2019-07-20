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
        base_url: 'http://ec2-18-223-97-217.us-east-2.compute.amazonaws.com/',
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