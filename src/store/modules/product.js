import axios from 'axios'


const base_url = 'http://127.0.0.1:3000/product/'


const state = {
    product: '',
    uploaded: 0
}

const getters = {
    getProduct(state) {
        return state.product
    },
    getUploaded(state) {
        return state.uploaded
    }
}

const mutations = {
    setProduct(state, product) {
        state.product = product
    },
    resetUploaded(state) {
        state.uploaded = 0
    }
}

const actions = {
    createProduct({ state, getters }, data) {
        return axios.post(`${base_url}create`, { data: { ...data, token: getters.getToken } }, {
            onUploadProgress: e => state.uploaded = Math.round((e.loaded / e.total) * 100)
        })
    },
    updateProduct({ getters }, data) {
        return axios.post(`${base_url}update`, { data: { ...data, token: getters.getToken } }, {
            onUploadProgress: e => state.uploaded = Math.round((e.loaded / e.total) * 100)
        })
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