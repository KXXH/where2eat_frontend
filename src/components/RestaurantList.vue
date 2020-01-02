<template>
    <v-card

            max-width="400"

            tile
        >
            <v-list >
                <v-list-item-group
                    v-model="sel"
                    v-bind:multiple="multiple"
                >
                    <v-list-item v-for="r in target" :key="r" v-on:input="$emit('input', sel)">
                        <v-list-item-content>
                            <v-list-item-title>{{r}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                
            </v-list>
        </v-card>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ['value','multiple'],
    data:()=>({
        sel:[]
    }),
    computed:{
        ...mapState({
            target:"restaurant_list"
        })
    }

}
</script>