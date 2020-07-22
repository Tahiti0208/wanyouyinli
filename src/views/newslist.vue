<template>
    <div>
        <!-- 导航栏开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">消息中心</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 导航栏结束 -->

        <!-- 消息开始 -->
        <van-tabs v-model="active" background="#f7f7f7" color="#C62F2E">
            <van-tab title="交易物流" name="a">
                <van-empty description="暂无消息通知">
                    <van-button round type="danger" class="bottom-button" to="/home">
                        随便逛逛
                    </van-button>
                </van-empty>
            </van-tab>
            <van-tab title="售后退换">
                <van-empty description="暂无消息通知">
                    <van-button round type="danger" class="bottom-button" to="/home">
                        随便逛逛
                    </van-button>
                </van-empty>
            </van-tab>
            <van-tab title="优惠促销">
                <van-empty description="暂无消息通知">
                    <van-button round type="danger" class="bottom-button" to="/home">
                        随便逛逛
                    </van-button>
                </van-empty>
            </van-tab>
            <van-tab title="系统消息">
                <van-empty description="暂无消息通知">
                    <van-button round type="danger" class="bottom-button" to="/home">
                        随便逛逛
                    </van-button>
                </van-empty>
            </van-tab>
            <van-tab title="互动消息">
                <van-empty description="暂无消息通知">
                    <van-button round type="danger" class="bottom-button" to="/home">
                        随便逛逛
                    </van-button>
                </van-empty>
            </van-tab>
        </van-tabs>
        <!-- 消息结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active:0,
            }
        },
    }
</script>

<style lang="scss" scoped>
// 导航栏样式
.van-row{
    height: 45px;
    line-height: 45px;
    text-align: center;
    .van-icon{
        color: #C62F2E;
    }
}
// 消息样式
.van-tab__pane{
    text-align: center;
    .van-button--danger{
        width: 152px;
        height: 42px;
        color: white;
        background-color: #C62F2E;
        border-radius: 3px;
    }
}
</style>