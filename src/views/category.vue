<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row class="topsearchNav">
            <van-col span="20">
                <van-search class="searchs"
                placeholder=" 百年孤独"
                @focus="getSearch"
                left-icon=""
                right-icon="search"
            />
            </van-col>
            <van-col span="4" @click="getNews">
                <span class="iconfont icon-Group-"></span>
            </van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 引入组件 -->
        <bscroll></bscroll>
        <vantabber></vantabber>
    </div>
</template>

<script>
    import bscroll from "../components/category/BScroll"
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        methods:{
            getSearch(){
                this.$router.push("/search");
            },
            getNews(){
                this.$router.push("/news");
            }
        },
        components:{
            bscroll,
            vantabber
        },
        created(){
            this.$store.state.active = 1;
        }
    }
</script>

<style lang="scss" scoped>
// 顶部导航样式
.van-row{
    height: 44px;
    line-height: 44px;
    .van-field{
        background-color: #fff;
    }
    .searchs{
        padding: 0;
        margin-top: 5px;
    }
    .van-col{
        text-align: center;
    }
    .icon-Group-{
        font-size: 28px;
        color:#C62F2E;
    }
}
</style>