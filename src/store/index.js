import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
        storage: window.localStorage
    })
    // import syncStorage from './plugins/syncStorage';
    // import permission from './modules/permission';
import { asyncRoutes, constantRoutes } from '@/router/';
import settings from './modules/settings';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // permission,
        settings,
    },

    plugins: [
        // syncStorage({}),
        vuexLocal.plugin
    ],




    state: {
        loading: false,
        errShow: false,
        errText: null,
        user: {
            roles: ['admin']
        }
    },
    mutations: {
        setLoading: (state, loading) => {
            state.loading = loading
        },
        showAlert: (state, text) => {
            state.errShow = true
            state.errText = text
        },
        hideAlert: (state) => {
            state.errShow = false
            state.errText = null
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    actions: {
        // Login user
        LoginByEmail: async({ commit, dispatch }, payload) => {
            let res = await api.login(payload)

            if (res.status == 200) {
                localStorage.setItem("token", res.accessToken.id);
                await commit('SET_TOKEN', res.accessToken && res.accessToken.id);
                await commit('SET_USER', res.result);
                return true;
                // let detail = { roles: ['admin'], ...res.result }
                // await dispatch('GenerateRoutes', detail);
            } else {
                commit('showAlert', res.message)
                return false;
            }
        },
        SignUp: async({ commit, dispatch }, payload) => {
            let res = await api.signup(payload)

            if (res.status == 200) {
                localStorage.setItem("token", res.accessToken.id);
                await commit('SET_TOKEN', res.accessToken && res.accessToken.id);
                await commit('SET_USER', res.result);
                return true;
                // let detail = { roles: ['admin'], ...res.result }
                // await dispatch('GenerateRoutes', detail);
            } else {
                commit('showAlert', res.message)
                return false;
            }
        },

        GetUserInfo: async({ commit, state }) => {
            console.log('[vuex.user] GetUserInfo');
            try {
                const response = await getUserInfo(state.token);

                // Since mockjs does not support custom status codes, it can only be hacked like this
                if (!response) {
                    throw new Error('Verification failed, please login again.');
                }

                // Verify returned roles are a non-null array
                if (response.user.roles && response.user.roles.length === 0) {
                    throw new Error('getInfo: roles must be a non-null array!');
                }

                commit('SET_USER', response.user);
            } catch (err) {
                console.warn('[vuex.user] GetUserInfo', err);
            }
        },

        LogOut: async({ commit }) => {
            try {
                console.log('[vuex.user] LogOut');
                await commit('SET_USER', { logout: true });
            } catch (err) {
                console.warn('[vuex.user] LogOut', err);
            }
        },

    },
    getters: {
        token: state => state.token,
        permissionRoutes: state => {
            if (!state.user || !state.user.id) return []
            return constantRoutes.filter(route => {
                if (!route.roles) return true;
                if (state.user.roleId == 1) return route.roles.includes('admin')
                else return route.roles.includes('editor')
            })
        }
    },
});