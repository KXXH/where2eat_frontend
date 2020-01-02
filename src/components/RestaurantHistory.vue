<template>
    <div>
        <v-timeline>
            <v-timeline-item v-for="(item,index) in history" v-bind:key="index">
                <v-card class="elevation-2">
                    <v-card-title class="headline">{{item[0]}}</v-card-title>
                    <v-card-text>
                    {{item[1]}}
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    data:()=>({
        history:[]
    }),
    created(){
        let url="/record"
        axios.get(url).then((response)=>this.history=response.data);
    }
}
</script>