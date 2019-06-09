<template>
  <div id="fitlerDemo">
    {{money|rmb}}
    <br>
    {{txt | author}}
  </div>
</template>

<script>


export default {
  name: 'fitlerDemo',
  data(){
      return{
        money:20,
        txt: "我是普希金"
      }
  },
  filters:{
      rmb:function(value){
        if(!value) return;
        value = value.toString()
        return "$"+value;
      },
      author:function(value){
        if(!value) return;
        value = value.toString()
        return value+"------来自普希金"
      }
  }
}
</script>

<style>


</style>
