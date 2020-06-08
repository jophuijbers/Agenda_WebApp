import axios from 'axios'
//import router from '../../router';

const state = {
    events: [],
    event: {}
};

const getters = {
    events: (state) => {
        return state.events;
    },
    getEvent: (state) => {
        return state.user;
    }
};

const actions = {
    fetchEvents({ commit }, access_token) {
        axios.get('api/Events/GetEvents', {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
            .then((response) => {
                commit('SET_EVENTS', response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    // addEvent({ commit }, { event, access_token }) {
    //     axios({
    //         method: 'post',
    //         url: 'api/Events/PostEvent',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             Authorization: "Bearer " + access_token
    //         },
    //         data: {
    //             name: event.name,
    //             description: event.description,
    //             startstring: event.start_string,
    //             endstring: event.end_string
    //         }
    //     })
    //     .then((response) => {
    //         router.push('/');
    //         //commit('ADD_EVENT', response.data)
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }
};

const mutations = {
    SET_EVENTS(state, events) {
        state.events = events;
    },
    // ADD_EVENT(state, event) {
    //     router.push('/');
    // }
};

export default {
    state,
    getters,
    actions,
    mutations
}