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
        return response
    })
}