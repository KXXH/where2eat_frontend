<template>
<v-container 
        class="fill-height"
        fluid>

    <v-row
        align="center"
        justify="center"
    >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
        <v-card>
            <v-toolbar 
            color="primary"
                dark
                flat>
                <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    v-model="username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  />
                </v-form>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" v-on:click="attemptLogin">Login</v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data:()=>({
        username:undefined,
        password:undefined
    }),
    methods:{
        attemptLogin(){
            this.fetchToken({username:this.username,password:this.password}).then(()=>(this.$router.push('/')));
        },
        ...mapActions(["fetchToken"])
    }
}
</script>