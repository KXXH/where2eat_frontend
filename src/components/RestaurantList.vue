<template>
    <v-card

            max-width="400"
            tile
        >
            <v-list
                    v-bind:multiple="multiple"
            >
                <v-list-group
                    v-for="r in target" 
                    :key="r.name" 
                    prepend-icon="mdi-silverware"
                    @click="toggle(r)"
                >           
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title  v-on:click="$emit('input', selected)">{{r.name}}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item 
                        v-for="q in r.children" 
                        :key="q.name"
                        v-ripple
                    >
                        <template v-slot:default="{ active, toggle }">
                            <v-list-item-action><v-checkbox v-model="q.isActive" v-on:change="$emit('input', selected)"></v-checkbox></v-list-item-action>
                            <v-list-item-content >
                            <v-list-item-title> {{q.name}} </v-list-item-title>
                            </v-list-item-content>
                        </template>
                    </v-list-item>
                </v-list-group>
                
            </v-list>
        </v-card>
</template>
<script>
export default {
    props: ['value','multiple'],
    data:()=>({
        sel:[[],[],[],[]],
        target:undefined
    }),
    computed:{
        state(){
            return [];
        },

        selected(){
            let t=this.target.map((item)=>{
                var {...t}=item;
                t.children=t.children.filter(x=>x.isActive==true);
                return t;
            });
            t=t.filter((x)=>(x.children.length));
            return t;
        }
    },
    mounted(){
        //此处有问题，由于餐馆信息是异步获取的，因此这里取数据是有可能取不到的。待处理
        this.target=this.$store.state.restaurant_list.map((x)=>{
                let {...y}=x;
                
                y.isActive=false;
                y.old=false;
                y.children=y.children.map((y)=>({name:String(y),isActive:false}));
                return y;
        });
        
        //this.sel=this.target.map(()=>false);
    },
    methods:{
        toggle(target){
            target.isActive=!target.isActive;
            
            if(target.isActive&&!target.old){
                target.children.forEach((x)=>(x.isActive=true));
            }
            target.old=true;
            this.$emit('input', this.selected);
        }
    }

}
</script>