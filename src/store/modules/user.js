import axios from 'axios'


const base_url = 'http://127.0.0.1:3000/user/'


const state = {
    uuid: "",
    photo: "",
    username: "",
}

const getters = {
    getUser(state) {
        return state
    }
}

const mutations = {
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
        data.token = getters.getToken

        return axios.post(`${base_url}updateUserData`, { data }).then(response => {
            if (response.data.msg) {
                if (data.user === getters.getUser.uuid) {
                    data.uuid = getters.getUser.uuid
                    commit("setUser", data)
                }
                return true
            } else {
                return response.data
            }

        })
    },
    createUser({ getters }, data) {
        data.token = getters.getToken

        return axios.post(`${base_url}createUser`, { data })
    },
    removeUser({ getters }, user) {
        return axios.post(`${base_url}removeUser`, { data: { user, token: getters.getToken } })
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}