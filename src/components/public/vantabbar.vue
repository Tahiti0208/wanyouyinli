<template>
    <div>
        <!-- 底部导航栏开始 -->
        <van-tabbar active-color="#C62F2E" v-model="$store.state.active">
            <van-tabbar-item to="/home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="wap-nav">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart">购物车</van-tabbar-item>
            <van-tabbar-item to="/my" icon="smile">我</van-tabbar-item>
        </van-tabbar>
        <!-- 底部导航栏结束 -->
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
// 底部导航栏样式
.van-tabbar{
  border-top: 1px solid #666;
  background-color: #F3F3EF;
  box-sizing: border-box;
}
</style>