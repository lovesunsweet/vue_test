<!-- ECharts图表测试 -->
<template>
    <!-- 图表 -->
    <div class="vol-data">
      <div class="charts" style="width:'100%',height:'6.54rem'">
        <div class="charts-title">
          网上问题
        </div>
        <div id="myChart1" :style="{width:'100%',height:'300px'}">
        </div>
      </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'myChart1',
  data () {
    return {
    }
  },
  mounted () {
    /*ECharts图表*/
    var myChart1 = echarts.init(document.getElementById('myChart1'));
    myChart1.setOption({
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
  }
}
</script>
<style>
.vol-data{
  width: 427px;
}
</style>
