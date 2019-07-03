import Vue from "vue";
import Vuex from "vuex";

import * as getters from './main/getters'
import * as mutations from './main/mutations'
import * as actions from './main/actions'

import user from "./modules/user";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        auth: null,
        base_url: 'http://127.0.0.1:3000/'
    },
    getters,
    mutations,
    actions,
    modules: {
        user,
    }
});