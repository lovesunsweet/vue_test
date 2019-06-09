<template>
  <div id="dashboard">
    <div id="dashboard-header">
      <div class="select1">
        <select1/>
      </div>
      <div class="dateSelect">
        <dateSelect/>
      </div>
      <div class="selectCharts">
          <el-row>
             <el-button type="primary" plain>柱状图</el-button>
             <el-button type="primary" plain>条形图</el-button>
             <el-button type="primary" plain>折线图</el-button>
             <el-button type="primary" plain>饼图</el-button>
          </el-row>
      </div>
    </div>

    <div id="dashboard-body">
      <div class="echarts1">
        <echarts1/>
      </div>
      <div class="echarts2">
        <echarts2/>
      </div>
      <div class="echarts3">
        <echarts3/>
      </div>
      <div class="echarts4">
        <echarts4/>
      </div>
      <div class="echarts5">
        <echarts5/>
      </div>
      <div class="echarts6">
        <echarts6/>
      </div>
    </div>
  </div>
</template>


<script>
import echarts1 from "./echarts1";
import echarts2 from "./echarts2";
import echarts3 from "./echarts3";
import echarts4 from "./echarts4";
import echarts5 from "./echarts5";
import echarts6 from "./echarts6";
import select1 from "./select1";
import dateSelect from "./dateSelect";

export default {
  name: "dashboard",
  data() {
    return {};
  },
  components: {
    echarts1,
    echarts2,
    echarts3,
    echarts4,
    echarts5,
    echarts6,
    select1,
    dateSelect
  }
};
</script>

<style>
#dashboard{
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  border: 2px solid red;
}
#dashboard-header{
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #0e0b0b;
}
.select1{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  left: 50px;
  position: relative;
}
.dateSelect{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  left: 100px;
  position: relative;
}
.selectCharts{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  left: 250px;
  position: relative;
}
#dashboard-body {
  /* width: 100%, */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #0e0b0b;
  /* border-radius: 5px; */
}
#main {
  display: flex;
  flex-wrap: wrap;
}
/* .echarts1{
    left: 50px;
    float: left;
    width: 30%;
    position: relative;
}

.echarts2{
    left: 100px;
    float: left;
    width: 30%;
    position: relative;
}
.echarts3{
    left: 150px;
    float: left;
     width: 30%;
    position: relative;
}
.echarts4{
    left: 50px;
    float: left;
    width: 30%;
    position: relative;
}

.echarts5{
    left: 100px;
    float: left;
    width: 30%;
    position: relative;
}
.echarts6{
    left: 150px;
    float: left;
     width: 30%;
    position: relative;
} */
</style>
