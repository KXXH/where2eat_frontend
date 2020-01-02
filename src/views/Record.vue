<template>
    <v-container>
        <RestaurantRecord v-on:success="showSnackbar"/>
        <v-snackbar
        v-model="snackbar"
        >
        {{ text }}
        <v-btn
            color="pink"
            text
            @click="snackbar = false"
        >
            Close
        </v-btn>
        </v-snackbar>
    </v-container>

</template>

<script>
import RestaurantRecord from '../components/RestaurantRecord'

export default {
    name:'record',
    data:()=>({
        snackbar:false,
        text:undefined
    }),
    components:{
        RestaurantRecord
    },
    methods:{
        showSnackbar(text){
            this.text=text;
            this.snackbar=true;
        }
    }
}
</script>