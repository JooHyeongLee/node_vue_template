import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        active: '',
    },
    mutations: {
        setActive (state, active) {
            state.active = active;
        },
    },
});
