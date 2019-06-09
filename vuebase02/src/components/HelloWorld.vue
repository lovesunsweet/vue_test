<template>
  <div class="hello">
    <!-- <parent/> -->
    <!-- <music/> -->
    <!-- <slotDemo> -->
    <!-- <template slot="v1">
          <div class="v1">
            插槽内容1
          </div>
      </template>

      <template slot="v2">
          <div class="v2">
           {{msg}} 
          </div>
    </template>-->

    <!-- <template slot-scope="content" >
        {{content.ct}}
      </template>
    
    </slotDemo>

    <music>
      <template slot-scope="music">
        {{music.title}}
      </template>
    </music>

    <dialogCmpt></dialogCmpt>-->

    <!-- <anim/> -->
    <!-- <fitlerDemo/> -->
    MAYDAY
  </div>
</template>

<script>
import parent from "./parent";
import music from "./music";
import slotDemo from "./slotDemo";
import dialogCmpt from "./dialogCmpt";
import anim from "./anim";
import fitlerDemo from "./fitlerDemo";

import qs from "qs";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "插槽动态内容"
    };
  },
  components: {
    parent,
    music,
    slotDemo,
    dialogCmpt,
    anim,
    fitlerDemo
  },
  mounted() {
    this.$axios.get("localhost:9001/label/page/list")
    // var url =  "/api/label/page/list"
    // this.$axios
      // .get(url)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
