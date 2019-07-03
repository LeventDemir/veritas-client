import axios from 'axios'


export const isAuth = ({ state, getters, commit }) => {
    axios.post(`${state.base_url}user/isAuth`, { token: getters.getToken }).then(response =>
        commit("setAuth", response.data.isAuth)
    )
}