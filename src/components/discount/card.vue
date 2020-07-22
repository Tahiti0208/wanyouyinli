<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">我的优惠券</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 输入框开始 -->
        <van-field placeholder="请输入优惠券兑换码">
            <template #button>
                <van-button size="small" type="primary">兑换</van-button>
            </template>
        </van-field>
        <!-- 输入框结束 -->

        <!-- 优惠券详情开始 -->
        <van-tabs v-model="active" class="card">
            <van-tab title="已领取">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/Hb2a0e1b46a7946d28b65445440cd9d6bl.jpg"
                    description="暂无优惠券"
                />
            </van-tab>
            <van-tab title="已使用">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/Hb2a0e1b46a7946d28b65445440cd9d6bl.jpg"
                    description="暂无优惠券"
                />
            </van-tab>
            <van-tab title="已失效">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/Hb2a0e1b46a7946d28b65445440cd9d6bl.jpg"
                    description="暂无优惠券"
                />
            </van-tab>
        </van-tabs>
        <!-- 优惠券详情结束 -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
            };
        },
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
.van-button--primary{
    background-color: #fff;
    color: #C62F2E;
    border: 1px solid #C62F2E;
}
.van-cell{
    width: 93%;
    margin-left: 12px;
    margin-right: 12px;
}

</style>
<style lang="scss">
.card{
    .van-tabs__nav{
        background-color: #f7f7f7;
    }
    .custom-image .van-empty__image {
        width: 9.25rem;
        height: 9.25rem;
        margin-top: 6.5rem;
        margin-bottom: 1rem;
    }
    .van-tabs__line{
        background-color: #C62F2E;
    }
}
</style>