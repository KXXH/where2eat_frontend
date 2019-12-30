<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="400"
            tile
        >
            <v-list>
                <v-list-item-group
                    v-model="selected"
                    multiple
                >
                    <v-list-item v-for="r in target" :key="r">
                        <v-list-item-content>
                            <v-list-item-title>{{r}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                
            </v-list>
        </v-card>
        <v-btn color="primary" v-on:click="pick" v-bind:disabled="!selected.length">开始抽奖!</v-btn>
        <ve-histogram :data="stat"/>
    </div>
    
</template>

<script>
import _ from 'lodash';
import VeHistogram from 'v-charts/lib/histogram.common'
export default {
    name:"RestaurantPick",
    components:{
        've-histogram':VeHistogram
    },
    data:()=>({
        target:['南门','资本','食堂','北京华联'],
        selected:[],
        count:0,
        history:[]
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
        }
    }

}
</script>