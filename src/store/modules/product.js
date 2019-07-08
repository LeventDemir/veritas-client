import axios from 'axios'


const base_url = 'http://127.0.0.1:3000/product/'


const state = {
    product: ''
}

const getters = {
    getProduct(state) {
        return state.product
    }
}

const mutations = {
    setProduct(state, product) {
        state.product = product
    }
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
    removeProduct({ getters }) {
        const data = { token: getters.getToken, product: getters.getProduct }

        return axios.post(`${base_url}removeProduct`, { data })
    },
    getProducts() {
        return axios.get(`${base_url}getProducts`)
    },
    getProductsByCategorie({ }, categorie) {
        return axios.get(`${base_url}getProductsByCategorie`, { params: { categorie } })
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