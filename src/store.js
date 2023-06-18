import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        tasks: [],
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        deleteTask(state, index) {
            state.tasks.splice(index,1);
        },
        editTask(state, { index, newtask }){
            state.tasks[index] = newtask
        }
    },
    actions: {
        addTask({ commit }, task) {
        commit('addTask', task);
        },
        deleteTask({ commit }, index) {
        commit('deleteTask', index);
        },
        editTask({ commit }, { index, newtask }) {
            commit('editTask',{ index, newtask });
        }
    },
    plugins: [createPersistedState()]
});

export default store;
