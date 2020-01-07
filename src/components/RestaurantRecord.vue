<template>
    <div>
        <div class="d-flex flex-wrap justify-sm-end justify-md-start" >
                    <v-autocomplete
            label="餐馆"
            :items="list"
            v-model="restaurant"
        ></v-autocomplete>
            <div align="center"><v-time-picker v-model="time" class="mx-2 my-2" ></v-time-picker></div>
            <div align="center"><v-date-picker v-model="date" class="mx-2 my-2" ></v-date-picker></div>
        </div>
        
         <v-btn
              absolute
              dark
              fab
              button
              right
              color="pink"
              @click="sendRecord"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'


let date=new Date();
export default {
    name:"restaurantRecode",
    data:()=>({
        time:date.getHours()+":"+date.getMinutes(),
        date:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDay(),
        restaurant:undefined
    }),
    mounted(){
        this.fetchRestaurant();
    },
    methods:{
        ...mapActions([
            'fetchRestaurant'
        ]),
        sendRecord(){
            let postData={
                date:this.date+' '+this.time,
                restaurant:this.restaurant
            };
            let url="/record";
            axios.post(url,postData).then(this.$emit("success","成功"));
        }
    },
    computed:{
        ...mapState({
            list:'restaurant_list',
        }),
    },
}
</script>