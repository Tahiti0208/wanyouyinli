<template>
    <div>
        <!-- 头部搜索开始 -->
        <van-sticky>
            <header class="header">
                <div class="header_box">
                    <div class="header_box_top">
                        <van-row class="topsearchNav">
                            <van-col span="4"><span class="iconfont"></span></van-col>
                            <van-col span="16">
                                <img src="../assets/img/logo.png">
                            </van-col>
                            <van-col span="4" @click="getNews">
                                <span class="iconfont icon-Group-"></span>
                            </van-col>
                        </van-row>
                    </div>
                        <van-search class="header_box_search"
                            placeholder="百年孤独"
                            background="#C62F2E"
                            @focus="getSearch"
                            left-icon=""
                            right-icon="search"
                        >
                        </van-search>
                </div>
            </header>
        </van-sticky>
        <!-- 头部搜索结束 -->

        <!-- 轮播图开始 -->
        <div class="swiper-container homecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/banner01.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner02.png">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner03.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner04.jpg">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination homepagination"></div>
        </div>
        <!-- 轮播图结束 -->

        <!-- 导航栏开始 -->
        <nav class="nav">
            <ul>
                <li v-for="(item,index) in lists" :key="index">
                    <a href="javascript:;" @click="getBook" >
                        <img :src="item.src">
                        <p>{{item.pname}}</p>
                    </a>
                </li>
            </ul>
            <div class="privacy">
                <img src="../assets/img/laba.png">
                <span>《隐私政策-公示版》</span>
            </div>
            <div class="homead">
                <img src="../assets/img/homead.jpg" alt="">
            </div>
        </nav>
        <!-- 导航栏结束 -->

        <!-- 凑单区开始 -->
        <section class="rec">
            <img src="../assets/img/cd01.jpg">
            <img src="../assets/img/cd02.jpg">
            <img src="../assets/img/cd03.jpg">
            <img src="../assets/img/cd04.jpg">
        </section>
        <!-- 凑单区结束 -->

        <!-- 活动区开始 -->
        <section class="activity">
            <div class="top" style="padding-top:6px">
                <div class="l">今日聚焦</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists2" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">好书推荐</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists3" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">畅销图书</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists4" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
            <div class="homead">
                <img src="../assets/img/homead02.jpg" alt="">
            </div>
        </section>
        <section class="activity">
            <div class="top" style="padding-top:6px">
                <div class="l">童书</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists5" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">人文社科</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists10" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">经营励志</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists9" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">教育专区</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists11" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">精准扶贫</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists6" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">科学技术</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists7" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="activity" style="margin-top:5px">
            <div class="top" style="padding-top:6px">
                <div class="l">体育电竞</div>
                <div class="r">
                    <a class="link" href="javascript:;" @click="getBook">更多&gt;&gt;</a>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in $store.state.lists8" :key="index" @click="getDetails(item)">
                        <a href="javascript:;">
                            <img :src="item.img">
                        </a>
                        <span class="word">{{item.word}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 活动区结束 -->

        <!-- 二级路由 -->
        <router-view></router-view>
        
        <!-- 引入组件 -->
        <vantabber></vantabber>
    </div>
</template>

<script>
    import vantabber from "../components/public/vantabbar.vue"
    import Swiper from 'swiper';
    export default {
        data() {
            return{
                lists:[
                    {src:require("../assets/img/nav01.png"),pname:"排行榜"},
                    {src:require("../assets/img/nav02.png"),pname:"电子书"},
                    {src:require("../assets/img/nav03.png"),pname:"优惠券"},
                    {src:require("../assets/img/nav04.png"),pname:"精准扶贫"},
                    {src:require("../assets/img/nav05.png"),pname:"教材教辅"},
                    {src:require("../assets/img/nav06.png"),pname:"引力优选"},
                    {src:require("../assets/img/nav07.png"),pname:"引力定制"},
                    {src:require("../assets/img/nav08.png"),pname:"引力教育"},
                    {src:require("../assets/img/nav09.png"),pname:"体育电竞"},
                    {src:require("../assets/img/nav10.png"),pname:"儿童乐园"},
                ],
            }
        },
        methods:{
            getSearch(){
                this.$router.push("/search");
            },
            getDetails(item){
                this.$router.push({path:"details",query:{item:item}})
            },
            getNews(){
                this.$router.push("/news");
            },
            getBook(){
                this.$router.push("/book");
            }
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 0;
        },
        mounted(){
            new Swiper('.homecontainer', {
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                loop: true,
                pagination: {
                    el: '.homepagination',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
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
    color: #323232;
    text-decoration: none;
    /* 针对移动端 点击链接标签点击高亮 */
    -webkit-tap-highlight-color: transparent;
}
// 头部搜索样式
.header {
  width: 100%;
  margin: 0 auto;
}
.header .header_box {
  background-color: #C62F2E;
}

.header .header_box .header_box_top {
  text-align: center;
}

.header .header_box .header_box_top img {
  max-width: 160px;
  max-height: 44px;
  vertical-align: bottom;
}

.header .header_box .header_box_top .icon-Group- {
  float: right;
  color:white;
  font-size: 28px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 0;
}

.header .header_box .header_box_search {
  padding-top: 0;
}

.banner .my-swipe .van-swipe-item img{
    width: 100%;
    height: 100%;
}
// 导航栏样式
.nav {
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;
  background-color: white;
  color: #323232;
}

.nav ul {
  display: flex;
  flex-wrap: wrap;
}

.nav ul li {
  width: 20%;
  padding: 8px;
  padding-bottom: 0;
  box-sizing: border-box;
  float: left;
}

.nav ul li a {
  width: 100%;
  display: block;
}

.nav ul li a img {
  width: 48px;
  margin: 0 auto;
  display: block;
}

.nav ul li a p {
  font-size: 12px;
  text-align: center;
}

.nav .privacy {
  width: 100%;
  height: 40px;
  background-color: #FFFEFA;
  line-height: 40px;
}
.nav .privacy img {
  padding-left: 30px;
  padding-right: 30px;
  height: 14px;
  margin-bottom: 14px;
  vertical-align: bottom;
}
.nav .privacy span{
    font-size: 12px;
    color: #666;
}

// 凑单区样式
.rec {
  display: flex;
  flex-wrap: wrap;
}

.rec img {
  width: 50%;
  display: block;
}

// 活动区样式
.activity{
    background-color: #fff;
}
.activity .top{
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    color:#323232;
}
.activity .top .l{
    font-weight: 700;
    float: left;
    color:#363433;
}
.activity .top .r{
    float: right;
}
.activity .top .r a{
    font-size: 12px;
    color:#BBBBBB
}
.activity .bottom ul{
    display: flex;
    margin-top: 14px;
    padding-bottom: 12px;
    margin-left: 0.5rem;
}
.activity .bottom ul li{
    margin-left: 4px;
    flex:1
}
.activity .bottom ul li img{
    width: 100px;
    height: 100px;
}
.activity .bottom ul li .word{
    display: block;
    width: 96px;
    height: 29px;
}

.activity .bottom ul li span{
    font-size: 12px;
    color:#323232;
}
.activity .bottom ul li .money{
    display: block;
    width: 96px;
    margin-top: 5px;
    color:#C62F2E;
}
// 公告样式
.homead{
    img{
        width: 100%;
        height:113.5px;
    }
}
</style>
<style lang="scss">
.van-swipe__indicator .van-swipe__indicator--active{
    background-color: red;
}
</style>