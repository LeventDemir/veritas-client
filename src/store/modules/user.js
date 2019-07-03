import axios from 'axios'

const base_url = 'http://127.0.0.1:3000/user/'

const state = {
    uuid: "",
    photo: "",
    username: "",
    token: localStorage.getItem("token") || ""
}

const getters = {
    getUser(state) {
        return state
    },
    getToken(state) {
        return state.token
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token
    }
}

const actions = {
    login({ }, data) {
        return axios.post(`${base_url}login`, { data })
    },
}


export default {
    state,
    getters,
    mutations,
    actions
}