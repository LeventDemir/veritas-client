import axios from 'axios'


export const isAuth = ({ state, getters, commit, dispatch }) => {
    return axios.post(`${state.base_url}user/isAuth`, { token: getters.getToken }).then(response => {
        commit("setAuth", response.data.isAuth)
        if (response.data.isAuth) {
            dispatch("getUser")
            return true
        }
        return false
    }
    )
}

export const updateSettings = ({ state, getters, dispatch }, data) => {
    data.token = getters.getToken

    return axios.post(`${state.base_url}settings/updateSettings`, { data }).then(response => {
        dispatch('getSettings')
        return response
    })
}

export const getSettings = ({ state, commit }) => {
    axios.get(`${state.base_url}settings/getSettings`).then(response => commit('setSettings', response.data))
}


export const sendMail = ({ state, getters }, data) => {
    data.token = getters.getToken

    return axios.post(`${state.base_url}mail/send`, { data })
}