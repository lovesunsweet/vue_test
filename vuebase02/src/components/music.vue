<template>
    <div class="music">
        <!-- 音乐实例
        <p class="p1" ref="p1">原声p元素</p>

        <input ref="myinput">
        <button @click="getValue" type="button" name="button">get</button> -->
        <slot title="我是音乐的插槽"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$refs.p1.innerHTML = '改变吧'
        this.$refs.myinput.value = "哈哈哈哈"
        console.log(this.$refs.p1)
    },
    methods:{
        getValue(){
            console.log(this.$refs.myinput.value)
        }
    }
}
</script>

<style>

</style>

