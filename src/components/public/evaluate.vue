<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">评价</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 评价列表开始 -->
        <van-tabs type="card" class="allDiscount">
            <van-tab title="全部">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/Ha9a8722002d1404e9b6dcaf976adacbed.jpg"
                    description="暂无评价"
                />
            </van-tab>
            <van-tab title="带图(0)">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/Ha9a8722002d1404e9b6dcaf976adacbed.jpg"
                    description="暂无评价"
                />
            </van-tab>
            <van-tab title="追加(0)">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/Ha9a8722002d1404e9b6dcaf976adacbed.jpg"
                    description="暂无评价"
                />
            </van-tab>
        </van-tabs>
        <!-- 评价列表结束 -->
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
.van-row{
    height: 45px;
    line-height: 45px;
    text-align: center;
    .van-icon{
        color: #C62F2E;
    }
}
</style>
<style lang="scss">
.allDiscount{
    .van-tabs__wrap{
        height: 4.25rem;
    }
    .van-tabs--card>.van-tabs__wrap{
        height: 4.25rem;
    }
    .van-tabs__nav--card{
        margin: 0;
        height: 4.25rem;
        border: 0;
    }
    .van-tab{
        height: 30px;
        flex: 0.15;
        margin-top: 19px;
        margin-left: 16px;
    }
    .van-tabs__nav--card .van-tab{
        border: 0;
        border-radius: 20px;
        color: #323232;
        background-color: #f7f7f7;
        font-size: 10px;
    }
    .van-tabs__nav--card .van-tab.van-tab--active{
        background-color: #C62F2E;
        color: white;
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