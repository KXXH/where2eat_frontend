<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>去哪吃饭推荐系统</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>

      <router-view></router-view>
    </v-content>
  </v-app>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',



  data: () => ({
    //
  }),
};
</script>
