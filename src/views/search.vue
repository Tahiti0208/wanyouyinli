<template>
    <div>
        <!-- 搜索框开始 -->
        <van-row class="topsearchNav">
            <van-col span="21" >
                <van-search 
                    placeholder="百年孤独" 
                    left-icon=""
                    right-icon="search"
                />
            </van-col>
            <van-col span="3" @click="$router.go(-1)"><span class="cancel">取消</span> </van-col>
        </van-row>
        <!-- 搜索框结束 -->

        <!-- 热门搜索开始 -->
        <div class="hot">
            <div class="top">热门搜索</div>
            <div class="bottom" >
                <span v-for="(item,index) in $store.state.lists13" :key="index" @click="getDetails(item)">{{item.word}}</span>
            </div>
        </div>
        <!-- 热门搜索结束 -->
    </div>
</template>

<script>
    export default {
        methods:{
            getDetails(item){
                this.$router.push({path:"details",query:{item:item}})
            },
        }
    }
</script>

<style lang="scss" scoped>
// 搜索框样式
.topsearchNav{
    background-color: #f7f7f7;
    .van-search{
        padding:0px;
        margin:5px;
        background-color: #fff;
    }
    .van-search__content{
        background-color: #fff;
    }
    .cancel{
        text-align: center;
        display: block;
        font-size: 14px;
        height: 44px;
        line-height: 44px;
        color:#4E4E4E;
    }
}
// 热门搜索样式
.hot{
    min-width: 280px;
    min-height: 470px;
    padding: 0 12px;
    padding-top: 36px;
    .top{
        font-size:14px;
        color: #7F8385;
        margin-bottom: 10px;
    }
    .bottom{
        span{
            color:#999;
            font-size: 14px;
            padding: 4px 12px;
            display: inline-block;
            background-color: rgb(234, 235, 237);
            margin-right: 12px;
            margin-bottom: 12px;
        }
    }
}
</style>