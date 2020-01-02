import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurant_list:undefined,
    token:undefined,
    username:undefined
  },
  mutations: {
    refreshRestaurant(state,list){
      state.restaurant_list=list;
    },
    login(state,info){
      state.username=info.username;
      state.token=info.token;
      axios.defaults.headers.common['Authorization']=state.token;
    },
    logout(state){
      state.username=state.token=undefined;
      let url='/logout'
      return axios.get(url);
    }
  },
  actions: {
    fetchRestaurant(context){
      if(context.state.restaurant_list) return;
      let url="/restaurants";
      return axios.get(url).then(response=>(context.commit('refreshRestaurant',response.data)));
    },
    fetchToken(context,user){
      let url='/login';
      return axios.post(url,{
        username:user.username,
        password:user.password,
      }).then(response=>(context.commit('login',{username:user.username,token:response.data.token})));
    }
  },
  modules: {
  }
})
