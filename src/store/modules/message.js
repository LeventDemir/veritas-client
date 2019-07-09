import axios from 'axios'


const base_url = 'http://127.0.0.1:3000/message/'


const state = {}

const getters = {}

const mutations = {}

const actions = {
    sendMessage({ }, data) {
        return axios.post(`${base_url}send`, { data })
    },
    getMessages({ getters }) {
        return axios.post(`${base_url}messages`, { token: getters.getToken })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}