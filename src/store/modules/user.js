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
    },
    setUser(state, data) {
        state.uuid = data.uuid
        state.photo = data.photo
        state.username = data.username
    }
}

const actions = {
    login({ }, data) {
        return axios.post(`${base_url}login`, { data })
    },
    logout({ getters, commit }) {
        axios.post(`${base_url}logout`, { token: getters.getToken }).then(response => {
            localStorage.removeItem("token")
            commit("setAuth", false)
        })
    },
    getUser({ getters, commit }) {
        axios.post(`${base_url}getUser`, { token: getters.getToken }).then(resonse => commit("setUser", resonse.data))
    },
    getUsers({ getters }) {
        return axios.post(`${base_url}getUsers`, { token: getters.getToken })
    },
    updateUser({ getters, commit }, data) {
        return axios.post(`${base_url}updateUserData`, { data }).then(response => {
            if (response.data.msg) {
                if (data.token === getters.getToken) {
                    data.uuid = getters.getUser.uuid
                    commit("setUser", data)
                }
                return true
            } else {
                return response.data
            }

        })
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}