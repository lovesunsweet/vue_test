<!-- ECharts图表测试 -->
<template>
    <!-- 图表 -->
    <div class="vol-data">
      <div class="charts" style="width:'100%',height:'6.54rem'">
        <div class="charts-title">
          数据包
        </div>
        <div id="myChart3" :style="{width:'100%',height:'300px'}">
        </div>
      </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'myChart3',
  data () {
    return {
    }
  },
  mounted () {
    /*ECharts图表*/
    var myChart3 = echarts.init(document.getElementById('myChart3'));    
    myChart3.setOption({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
     })

  },
  
  methods:{
  },
  
}
</script>
<style>
.vol-data{
  width: 427px;
}
</style>
