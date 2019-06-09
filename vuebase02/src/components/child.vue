<template>
    <div class="child">
        子组件
       title: {{title}}
       age:{{age}}
       <button @click="sendMsg"  type="button" name="button">子传父</button>
       <p>称号：{{nick}}</p>
       <ul>
           <li v-for="(w,index) in wifes" :key="index">{{w}}</li>
       </ul>
     getFoo:{{getFoo}}
    </div>
</template>

<script>
export default {
    name: 'child',
    data(){
        return{

        }
    },
    props:{
        title:String,
        age:Number,
        nick:{
            type:String,
            default:"宗教组织"
        },
        wifes:{
            type:Array,
            default: function(){
                return ['陈太太1','陈太太2','陈太太3','陈太太4','陈太太5']
            }
        }

    },
    computed:{
        getFoo(){
            return this.$root.foo
        }
    },
    methods:{
        sendMsg(){
            this.$emit("message","陈信宏是我的神明！")
        }
    }
}
</script>

<style>

</style>


