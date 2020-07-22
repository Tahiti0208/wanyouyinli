<template>
    <div>
        <!-- 推荐商品开始 -->
        <div class="rec_book" style="margin-bottom:5px">引力推荐</div>
        <section class="rec">
            <div class="rec_content">
                <ul>
                    <li @click="getDetails(item)" v-for="(item,index) in $store.state.lists" :key="index">
                        <img :src="item.img">
                        <span class="title">{{item.word}}</span>
                        <span class="author">{{item.author}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 推荐商品结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        methods:{
            getDetails(item){
                this.$router.push({path:"details",query:{item:item}})
            }
        }
    }
</script>

<style lang="scss" scoped>
// 推荐商品样式
.rec_book{
    font-weight: 700;
    font-size: 17px;
    color: #363433;
    margin-left: 12px;
}
.rec{
    padding: 5px 8px;
    .rec_content{
        max-width: 640px;
        display: flex;
        ul{
            max-width: 640px;
            display: flex;
            flex-wrap: wrap;
            li{
                max-width: 640px;
                height: 218px;
                list-style: none;
                flex:1;
                margin: 4px;
                box-sizing: border-box;
                background-color: #fff;
                text-align: center;
                color: #323232;
                img{
                    max-width: 320px;
                    height: 127px;
                }
                .title{
                    max-width: 320px;
                    height: 40px;
                    display: block;
                    font-size: 14px;
                    text-align:left;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                .author{
                    width: 127px;
                    display: block;
                    color:#999;
                    font-size: 12px;
                    text-align: left;
                    margin-left: 5px;
                }
                .money{
                    height: 28px;
                    line-height: 28px;
                    font-size: 16px;
                    display: block;
                    color:#C62F2E;
                    text-align: left;
                    margin-left: 3px;
                }
            }
        }
    }
}
</style>