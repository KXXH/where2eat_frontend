<template>
    <div ref="test" id="test1" style="width:100%;height:300px"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    props:['history'],
    data:()=>({
        config:undefined,
        chart:undefined
    }),
    mounted(){
       this.chart = echarts.init(this.$el);

        var option = {
            series: {
                type: 'sunburst',
                // highlightPolicy: 'ancestor',
                data: this.history,
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            }
        };
        this.chart.setOption(option);
    },
    watch:{
        history(){
            var option = {
                series: {
                    type: 'sunburst',
                    // highlightPolicy: 'ancestor',
                    data: this.history,
                    radius: [0, '90%'],
                    label: {
                        rotate: 'radial'
                    }
                }
            };
            this.chart.setOption(option);
        }
    }
}
</script>