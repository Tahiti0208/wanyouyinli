<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">消息中心</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 消息中心开始 -->
        <van-cell icon="https://ae01.alicdn.com/kf/H9d0556534812442e8f31877c63043286h.jpg" title="交易物流" is-link size="large" label="暂无新消息" to="./newslist"/>
        <van-cell icon="https://ae01.alicdn.com/kf/H047e3a1479ac49b098e12bd1ceaa64ebn.jpg" title="售后服务" is-link size="large" label="暂无新消息" to="./newslist"/>
        <van-cell icon="https://ae01.alicdn.com/kf/H2f567b7e90cf416b81bd30a95569687bO.jpg" title="优惠促销" is-link size="large" label="暂无新消息" to="./newslist"/>
        <van-cell icon="https://ae01.alicdn.com/kf/H020096c82a2f485bb4ca6b390be0c177e.jpg" title="系统通知" is-link size="large" label="暂无新消息" to="./newslist"/>
        <van-cell icon="https://ae01.alicdn.com/kf/H9d0556534812442e8f31877c63043286h.jpg" title="互动消息" is-link size="large" label="暂无新消息" to="./newslist"/>
        <!-- 消息中心结束 -->
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
// 消息中心样式
.van-icon__image{
    width: 3em;
    height: 3em;
}
.van-cell__title{
    span{
        font-size: 14px;
    }
}
</style>