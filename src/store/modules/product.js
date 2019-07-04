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
    },
    updateProduct({ getters }, data) {
        data.token = getters.getToken
        return axios.post(`${base_url}updateProduct`, { data })
    },
    getProducts() {
        return axios.get(`${base_url}getProducts`)
    },
    getProduct({ }, product) {
        return axios.get(`${base_url}getProduct`, { params: { product } })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
} 