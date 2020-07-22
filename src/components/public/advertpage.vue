<template>
    <div class="page">
        <!-- 广告页advertpage.vue -->
        <div class="bg">
            <van-button @click="goHome">跳过{{num}}</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home");// 跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home");// 跳转首页
                }else{
                    this.num--;
                }
            },1000)
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
    }
</script>

<style lang="scss" scoped>
// 图片按钮样式
.page{
    .bg{
        background: url('../../assets/img/advertpage.jpg');
        background-size: 100% 100%;
        position: fixed;
        height: 100%;
        width: 100%;
    }
    button{
        height: 30px;
        border-radius: 50px;
        background-color: rgba(0,0,0,.4);
        float: right;
        margin-right: 1rem;
        margin-top: 2rem;
        border: 0;
        color: white;
    }
}
</style>