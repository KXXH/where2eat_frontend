<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/record">
          <v-list-item-action>
            <v-icon>mdi-send</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>发送记录</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/history">
          <v-list-item-action>
            <v-icon>mdi-timeline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>查看记录</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-toolbar-title>去哪吃饭推荐系统</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/login" class="ma-2" v-if="!username">登录</v-btn>
      <v-btn v-on:click="logout" class="ma-2" v-else>登出</v-btn>
    </v-app-bar>
    
    <v-content>
      <router-view></router-view>
      
    </v-content>
  </v-app>
  
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data: () => ({
    //
    drawer:null
  }),
  computed:{
    ...mapState(["username"])
  },
  methods:{
    ...mapActions(["fetchToken","fetchRestaurant"]),
    ...mapMutations(["logout"])
  },
  created(){
    this.fetchRestaurant();
  }
};
</script>
