<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.push('/my')">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">订单列表</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->
        
        <!-- 订单列表开始 -->
        <van-tabs v-model="$store.state.order.active" background="#f7f7f7" color="#C62F2E">
            <van-tab title="全部" to="/orderList/orderAll"></van-tab>
            <van-tab title="待支付" to="/orderList/orderPay"></van-tab>
            <van-tab title="待收货" to="/orderList/orderGoods"></van-tab>
            <van-tab title="已完成" to="/orderList/orderEnd"></van-tab>
        </van-tabs>
        <!-- 订单列表结束 -->

        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
// 顶部导航样式
.van-row{
    height: 45px;
    line-height: 45px;
    text-align: center;
    .van-icon{
        color: #C62F2E;
    }
}
</style>