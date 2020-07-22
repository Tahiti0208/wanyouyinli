<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-sticky>
            <van-row class="topsearchNav">
                <van-col span="3" @click="$router.go(-1)">
                    <van-icon name="arrow-left" />
                </van-col>
                <van-col span="18">
                    <van-search class="searchs"
                        placeholder=" 百年孤独"
                        @focus="getSearch"
                        left-icon=""
                        right-icon="search"
                    />
                </van-col>
                <van-col span="3" @click="$router.push('/cart')">
                    <van-icon name="shopping-cart-o" />
                </van-col>
            </van-row>
        </van-sticky>
        <!-- 顶部导航结束 -->

        <!-- 轮播图开始 -->
        <div class="swiper-container bookcontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/banner05.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner06.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner07.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner08.jpg">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination bookpagination"></div>
        </div>
        <!-- 轮播图结束 -->

        <!-- 热销图书开始 -->
        <section class="rec">
            <div class="top">
                    <div class="l">热销图书</div>
                    <div class="r">
                        <a class="link" href="javascript:;" @click="getHome">更多&gt;&gt;</a>
                    </div>
                </div>
            <div class="rec_content">
                <ul>
                    <li v-for="(item,index) in $store.state.lists12" :key="index" @click="getDetails(item)">
                        <img :src="item.img">
                        <span class="bookname">{{item.word}}</span>
                        <span class="authorname">{{item.authorname}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 热销图书结束 -->

        <!-- 广告开始 -->
        <div class="ad">
            <img src="../assets/img/ad01.jpg">
            <img src="../assets/img/ad02.jpg">
            <img src="../assets/img/ad03.jpg">
            <img src="../assets/img/ad04.jpg">
        </div>
        <!-- 广告结束 -->
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            getSearch(){
                this.$router.push("/search");
            },
            getDetails(item){
                this.$router.push({path:"details",query:{item:item}})
            },
            getHome(){
                this.$router.push("/home")
            }
        },
        mounted() {
            new Swiper('.bookcontainer', {
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                loop: true,
                pagination: {
                    el: '.bookpagination',
                },
            });
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
    .van-icon{
        font-size: 22px;
        color:#C62F2E;
        margin-top: 10px;
    }
}
// 轮播图样式
.swiper-container {
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        max-height: 320px;
    }
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
a ,
a:hover ,
a:focus {
    color: #333;
    text-decoration: none;
    /* 针对移动端 点击链接标签点击高亮 */
    -webkit-tap-highlight-color: transparent;
}
// 热销图书样式
.rec{
    background-color: #fff;
}
.rec .top{
    height: 20px;
    line-height: 20px;
    margin: 10px 0;
    .l{
        font-weight: 700;
        float: left;
        color: #323232;
    }
    .r{
        float: right;
        a{
            font-size: 12px;
            color:#BBBBBB;
        }
    }
}
.rec{
    padding: 5px 8px;
    background-color: #fff;
    box-sizing: border-box;
    .rec_content{
        max-width: 640px;
        display: flex;
        ul{
            max-width: 640px;
            display: flex;
            flex-wrap: wrap;
            li{
                max-width: 640px;
                max-height: 210px;
                list-style: none;
                flex:1;
                margin: 4px;
                box-sizing: border-box;
                background-color: #fff;
                text-align: center;
                color: #323232;
                img{
                    max-width: 125px;
                    height: 127px;
                }
                .bookname{
                    max-width: 320px;
                    height: 40px;
                    display: block;
                    font-size: 12px;
                    text-align:left;
                    margin-left: 5px;
                }
                .authorname{
                    max-width: 127px;
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
// 广告样式
.ad{
    img{
        width: 100%;
        height: 190px;
    }
}
</style>