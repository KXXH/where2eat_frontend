<template>
    <div>
        <RestaurantList class="mx-auto" v-model="selected" multiple></RestaurantList>
        <v-btn color="primary" v-on:click="pick" v-bind:disabled="!selected.length" class="ma-2">开始抽奖!</v-btn>
        <v-btn color="warning" v-on:click="history=selected=[];" v-bind:disabled="!selected.length" class="ma-2">清空记录</v-btn>
        <ve-histogram :data="stat"/>
    </div>
    
</template>

<script>
import _ from 'lodash';
import VeHistogram from 'v-charts/lib/histogram.common'
import RestaurantList from './RestaurantList'
import { mapState } from 'vuex';
export default {
    name:"RestaurantPick",
    components:{
        've-histogram':VeHistogram,
        RestaurantList
    },
    data:()=>({
        selected:[],
        count:0,
        history:[],
        test:0
    }),
    methods:{
        pick:function(){
            let i = Math.floor(Math.random()*this.selected.length);
            this.history.unshift(this.target[this.selected[i]]);
        }
    },
    computed:{
        stat:function(){
            let names=this.selected.map((i)=>this.target[i]);
            let counts=_.countBy(this.history);
            return {
                columns:['名称','计数'],
                rows:names.map((name)=>({"名称":name,"计数":counts[name]}))
            }
        },
        ...mapState({
            target:"restaurant_list"
        })
    }

}
</script>