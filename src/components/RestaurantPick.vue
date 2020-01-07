<template>
    <div>
        <RestaurantList class="mx-auto" v-model="selected" multiple></RestaurantList>
        <v-btn color="primary" v-on:click="pick" v-bind:disabled="!selected.length" class="ma-2">开始抽奖!</v-btn>
        <v-btn color="warning" v-on:click="selected.forEach(clear);history=selected=[];" v-bind:disabled="!selected.length" class="ma-2">清空记录</v-btn>
        <ve-histogram :data="stat"/>
        <Sunburst :history="stat2()"/>

    </div>
    
</template>

<script>
import _ from 'lodash';
import VeHistogram from 'v-charts/lib/histogram.common'
import RestaurantList from './RestaurantList'
import Sunburst from './Sunburst'
import { mapState } from 'vuex';


export default {
    name:"RestaurantPick",
    components:{
        've-histogram':VeHistogram,
        RestaurantList,
        Sunburst
    },
    data:()=>({
        selected:[],
        count:0,
        history:[],
        test:0
    }),
    methods:{
        pick:function(){
            let picked=_.sample(this.selected);
            this.history.unshift(picked.name);
            if(!picked.count) picked.count=0;
            picked.count++;
            let childPick=_.sample(picked.children);
            if(!childPick.count) childPick.count=0;
            childPick.count++;
        },
        get_stat(data){
            data.forEach((x)=>{
                if(x.count==undefined){
                    x.count=0;
                }
                x.children.forEach((x)=>{
                    if(x.count==undefined){
                        x.count=0;
                    }
                });
            });//规范化数据
            var normal_2=(x)=>({
                name:x.name,
                value:x.count,
                children:x.children?x.children.map(normal_2):null
            });
            var ans=_.map(data,normal_2);
            return ans;
        },
        stat2(){
            let data=this.get_stat(this.selected);
            return data;
        },
        clear(target){
            target.count=0;
            if(target.children){
                target.children.forEach(this.clear);
            }
        }
    },
    computed:{
        stat:function(){
            let names=this.selected.map((i)=>i.name);
            let counts=_.countBy(this.history);
            return {
                columns:['名称','计数'],
                rows:names.map((name)=>({"名称":name,"计数":counts[name]}))
            }
        },
        ...mapState({
            target:"restaurant_list"
        }),
        
    },


}

</script>