import axios from 'axios'


const base_url = 'http://ec2-52-14-172-108.us-east-2.compute.amazonaws.com/message/'


const state = {}

const getters = {}

const mutations = {}

const actions = {
    sendMessage({ }, data) {
        return axios.post(`${base_url}send`, { data })
    },
    getMessages({ getters }) {
        return axios.post(`${base_url}messages`, { token: getters.getToken })
    },
    getMessage({ getters }, message) {
        return axios.post(`${base_url}message`, { data: { token: getters.getToken, message } })
    },
    readMessage({ getters }, message) {
        axios.post(`${base_url}read`, { data: { token: getters.getToken, message } })
    },
    removeMessage({ getters }, message) {
        return axios.post(`${base_url}remove`, { data: { token: getters.getToken, message } })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}