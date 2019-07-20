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
    createUser({ getters }, data) {
        return axios.post(`${base_url}create`, { data: { ...data, token: getters.getToken } })
    },
    updateUser({ getters, commit }, data) {
        return axios.post(`${base_url}update`, { data: { ...data, token: getters.getToken } }).then(response => {
            if (response.data.success)
                if (data.user === getters.getUser.uuid)
                    commit("setUser", { ...data, uuid: getters.getUser.uuid })

            return response.data
        })
    },
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