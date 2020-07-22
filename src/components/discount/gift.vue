<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">我的礼品卡</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 输入框开始 -->
        <van-field placeholder="输入卡密绑定礼品卡">
            <template #button>
                <van-button size="small" type="primary">绑定</van-button>
            </template>
        </van-field>
        <!-- 输入框结束 -->

        <!-- 礼品卡详情开始 -->
        <van-tabs v-model="active" class="card">
            <van-tab title="可使用(0)">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/H999a38b5a7274459b0decdb2151e302ad.jpg"
                    description="您暂无可用礼品卡~"
                />
            </van-tab>
            <van-tab title="不可使用(0)">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/H999a38b5a7274459b0decdb2151e302ad.jpg"
                    description="您暂无可用礼品卡~"
                />
            </van-tab>
        </van-tabs>
        <!-- 礼品卡详情结束 -->
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