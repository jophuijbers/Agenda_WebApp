import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';
import users from './modules/users';
import events from './modules/events';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos,
        users,
        events
    }
});