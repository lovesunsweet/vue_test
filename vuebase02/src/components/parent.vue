<template>
    <div class="parent">
        父组件 msg:{{msg}}
        <child @message="getMsg" :age=age title="五月天" nick="信仰"/>
    </div>
</template>

<script>
import child from './child'
export default {
    name: 'parent',
    data(){
        return{
            msg:"",
            age:20
        }
    },
    components:{
        child
    },
    methods:{
        getMsg(data){
            this.msg = data
            
        }
    }
}
</script>

<style>

</style>


