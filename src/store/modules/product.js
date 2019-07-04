import axios from 'axios'


const base_url = 'http://127.0.0.1:3000/product/'


const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    createProduct({ getters }, data) {
        data.token = getters.getToken

        return axios.post(`${base_url}createProduct`, { data })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
} 