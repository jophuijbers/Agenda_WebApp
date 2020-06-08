import axios from 'axios'
import router from '../../router'

const state = {
    access_token: '' || localStorage.getItem('access_token'),
    user: {}
};

const getters = {
    getAccessToken: (state) => {
        return state.access_token;
    },
    getUser: (state) => {
        return state.user;
    }
};

const actions = {
    login({commit}, user){
        axios.post('api/Users/Login', {
            email: user.email,
            password: user.password
        })
        .then((response)=>{
            commit('SET_USER_TOKEN', response.data.token);
            localStorage.setItem('access_token', response.data.token);
            router.push("/");
        })
        .catch((error) => {
            alert(error);
            console.log('wrong credentials');
        });
    },
    register({commit}, user){
        axios.post('', {
            email: user.email,
            password: user.password
        })
        .then((response)=>{
            commit('SET_USER_TOKEN', response.data)
            router.push("/profile");
        })
        .catch((error) => {
            alert(error);
        })
    },
    logout({commit}){
        commit('SET_USER_TOKEN', null);
        router.push('/login');
    },
    user({commit}, access_token){
        console.log(access_token);
        axios.get('api/Users/GetUser', {
            headers: {
               Authorization: "Bearer " + access_token
            }
         })
        .then((response)=>{
            commit('SET_USER', response.data)
            console.log(response.data);
        })
        .catch((error) => {
            alert(error);
        })
    }
};

const mutations = {
    SET_USER_TOKEN(state, token){
        state.access_token = token;
    },
    SET_USER(state, user){
        state.user = user;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}