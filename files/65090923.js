import { createStore } from 'vuex';
import axios from 'axios';
export const store = createStore({
    state: {
        todos: []
    },
    getters: {
        todos(state) {
            return state.todos
        }
    },
    mutations: {
        FILL_ITEMS(state, payload) {
            state.todos = payload
        }
    },
    actions: {
        fillItems({ commit }) {
            axios
                .get("https://jsonplaceholder.typicode.com/todos")
                .then(res => commit('FILL_ITEMS', res.data))
        }
    }
})
