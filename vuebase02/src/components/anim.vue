<template>
  <div id="anim">
   <!-- <button @click="show = !show" type="button" name="button">Toggle</button> -->
   <button @click="showHide" type="button" name="button">Toggle</button>
    <!-- <transition name="hello">
        <p class="box" v-if="show">hello</p>
    </transition> -->

    
    <transition
            name="custom-classes-transition"
            enter-active-class="animated rollIn"
            leave-active-class="animated zoomOutDown">
            <p class="box" v-if="show">hello</p>
  </transition>

  </div>
</template>

<script>


export default {
  name: 'anim',
  data(){
      return{
        show: true
      }
  },
  methods:{
      showHide(){
          this.show = !this.show
      }
  }
}
</script>

<style>
/*
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

*/
/*進入 0*/
/* .hello-enter, .hello-leave-to{
    opacity: 0;
} */

/* 1 */
/* .hello-enter-to, .hello-leave{
    opacity: 1;
} */
/*过度*/
/* .hello-enter-active, .hello-enter-active{
    transition: 0.5s;

} */

.box{
    width: 100px;
    height: 100px;
    background: red;
}

/* .hello-enter, .hello-leave-to{
    opacity: 0;
    width: 0;
    height: 0;
}


.hello-enter-to, .hello-leave{
    opacity: 1;
    width: 200px;
    height: 200px;
}

.hello-enter-active, .hello-enter-active{
    transition:all 1s;

} 
*/

/* .hello-enter-active {
  animation: bounce-in .5s;
}
.hello-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
} */



</style>
