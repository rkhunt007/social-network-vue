import { createStore } from 'vuex';
import axios from '../api/api';

const store = createStore({
    state() {
        return {
            userName: '',
            userEmail: '',
            authToken: null
        }
    },
    getters: {
        authToken(state) {
            return state.authToken;
        },
        isAuthenticated(state) {
            return !!state.authToken;
        },
        getUserName(state) {
            return state.userName;
        }
    },
    mutations: {
        setAuthToken(state, token) {
            state.authToken = token;
        },
        setUserDetails(state, data) {
            state.userName = data.name;
            state.userEmail = data.email;
        }
    },
    actions: {
        setAuthToken(context, token) {
            localStorage.setItem('authToken', token);
            context.commit('setAuthToken', token)
            context.dispatch('setUserDetails')
        },
        async setUserDetails(context) {
            const res = await axios.get('auth');
            context.commit('setUserDetails', res.data)
        }
    }
})

export default store;