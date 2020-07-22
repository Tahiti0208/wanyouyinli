<template>
    <div>
        <!-- 导航栏开始 -->
        <van-sticky>
            <van-row>
                <van-col span="1"></van-col>
                <van-col span="1" class="back" @click="$router.go(-1)">
                    <van-icon name="arrow-left" color="#C62F2E" size="20"/>
                </van-col>
                <van-col span="3"></van-col>
                <van-col span="3" class="shop"></van-col>
                <van-col span="2"></van-col>
                <van-col span="3" class="shop"></van-col>
                <van-col span="2"></van-col>
                <van-col span="3" class="shop"></van-col>
                <van-col span="2"></van-col>
                <van-col span="3" class="more">
                    <van-cell @click="showShare = true" icon="ellipsis" class="share"/>
                    <van-share-sheet
                        v-model="showShare"
                        title="立即分享给好友"
                        :options="options"
                        @select="onSelect"
                    />
                </van-col>
            </van-row>
        </van-sticky>
        <!-- 导航栏结束 -->

        <!-- 轮播图开始 -->
        <div class="swiper-container detailscontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img>
                </div>
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img>
                </div>
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img>
                </div>
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img>
                </div>
            </div>
            <div class="swiper-pagination detailspagination"></div>
        </div>
        <!-- 轮播图结束 -->
        
        <!-- 价格开始 -->
        <van-row class="now">
            <van-col span="4" class="money">￥{{this.$route.query.item.money}}</van-col>
            <van-col span="14"></van-col>
            <van-col span="1"></van-col>
            <van-col span="4" class="like" >
                <van-icon name="like" :class="{'active':isSelected}" @click="toggleCollect" class="collect" size="24"/>
            </van-col>
        </van-row>
        <!-- 价格结束 -->

        <!-- 收藏开始 -->
        <van-row class="discount">
            <van-col span="4" class="word">￥62.00</van-col>
            <van-col span="3" class="words">9.5折</van-col>
            <van-col span="11"></van-col>
            <van-col span="1"></van-col>
            <van-col span="4" class="collection" v-show="!isSelected">收藏</van-col>
            <van-col span="4" class="collection" v-show="isSelected">已收藏</van-col>
        </van-row>
        <!-- 收藏结束 -->

        <!-- 书名开始 -->
        <div class="title">{{this.$route.query.item.word}}</div>
        <!-- 书名结束 -->

        <!-- 优惠券开始 -->
        <van-coupon-cell
            @click="showList = true"
        />
        <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
        >
            <van-coupon-list
                @change="onChange"
                @exchange="onExchange"
                disabled-title="未满足要求"
                close-button-text="完成"
                class="couponlists"
            />
        </van-popup>
        <!-- 优惠券结束 -->

        <!-- 作者,出版社开始 -->
        <van-cell is-link class="author" value="更多作品" to="/book">
            <template #title>
                <span class="custom-title">作者</span>
                <van-tag type="danger" color="white" text-color="#969799" size="medium">新华社中央新闻采访中心</van-tag>
            </template>
        </van-cell>
        <van-cell value="更多作品" is-link to="/book">
            <template #title>
                <span class="custom-title">出版社</span>
                <van-tag type="danger" color="white" text-color="#969799" size="medium">人民出版社</van-tag>
            </template>
        </van-cell>
        <!-- 作者,出版社结束 -->

        <!-- <van-cell is-link class="choice">
            <template #title>
                <span class="custom-title">已选</span>
                <van-tag type="danger" color="white" text-color="#969799" size="medium">默认</van-tag>
            </template>
        </van-cell> -->
        <!-- <van-cell is-link class="address">
            <template #title >
                <span class="custom-title">送至</span>
                <van-tag color="#fff"></van-tag>
                <van-icon name="location" size="18" color="#C62F2E"/>
                <van-tag type="danger" color="white" text-color="#969799" size="medium">北京 北京市 朝阳区</van-tag>
            </template>
        </van-cell>
        <span class="have">有货</span> -->

        <!-- 评价开始 -->
        <van-cell is-link class="evaluate" to="/evaluate">
            <template #title >
                <span class="custom-title">用户评价(0)</span>
            </template>
        </van-cell>
        <!-- 评价结束 -->
        
        <!-- 推荐开始 -->
        <van-tabs v-model="active">
            <van-tab title="引力推荐">
                <section class="rec">
                    <div class="rec_content">
                        <ul>
                            <li>
                                <img src="../assets/img/shop07.jpg">
                                <span class="bookname">人工智能机器人大百科</span>
                                <span class="authorname">周彦彤</span>
                                <span class="money">￥98.00</span>
                            </li>
                            <li>
                                <img src="../assets/img/shop03.jpg">
                                <span class="bookname">疯狂成语游戏:挑战篇</span>
                                <span class="authorname">瓜叔</span>
                                <span class="money">￥25.00</span>
                            </li>
                            <li>
                                <img src="../assets/img/shop07.jpg">
                                <span class="bookname">人工智能机器人大百科</span>
                                <span class="authorname">周彦彤</span>
                                <span class="money">￥98.00</span>
                            </li>
                            <li>
                                <img src="../assets/img/shop03.jpg">
                                <span class="bookname">疯狂成语游戏:挑战篇</span>
                                <span class="authorname">瓜叔</span>
                                <span class="money">￥25.00</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </van-tab>
            <van-tab title="作者佳作">
                <section class="rec">
                    <div class="rec_content">
                        <ul>
                            <li>
                                <img src="../assets/img/shop03.jpg">
                                <span class="bookname">疯狂成语游戏:挑战篇</span>
                                <span class="authorname">瓜叔</span>
                                <span class="money">￥25.00</span>
                            </li>
                            <li>
                                <img src="../assets/img/shop07.jpg">
                                <span class="bookname">人工智能机器人大百科</span>
                                <span class="authorname">周彦彤</span>
                                <span class="money">￥98.00</span>
                            </li>
                        </ul>
                    </div>
                    <div class="rec_content">
                        <ul>
                            <li>
                                <img src="../assets/img/shop03.jpg" class="imgs">
                                <span class="bookname">疯狂成语游戏:挑战篇</span>
                                <span class="authorname">瓜叔</span>
                                <span class="money">￥25.00</span>
                            </li>
                            <li>
                                <img src="../assets/img/shop07.jpg">
                                <span class="bookname">人工智能机器人大百科</span>
                                <span class="authorname">周彦彤</span>
                                <span class="money">￥98.00</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </van-tab>
        </van-tabs>
        <!-- 推荐结束 -->

        <!-- 图文详情开始 -->
        <van-tabs type="card" class="after">
            <van-tab title="图文详情" class="graphic">
                <h1 style="font-family:PingFang-SC-Medium;font-size:16px;text-align:center">内容简介</h1>
                    新华社中央新闻采访中心编的《2019全国两会记者会实录(视频书)》生动记录李克强总理答中外记者问等多场记者会，并通过相关技术多媒体呈现精彩现场。收录十三届全国人大二次会议和全国政协十三届二次会议召开期间，国务院总理李克强、国家发展和改革委主任、财政部部长、商务部部长、外交部部长等国务院机构负责人，全国政协领导人和全国政协委员等，在记者招待会上的发言与答问，反映了当下中国有代表性的重大议题，具有较强的可读性，对于了解中华人民共和国全国人民代表大会和中国人民政治协商会议精神及有关部委的方针政策等，具有一定的参考价值。
                <h1 style="font-family:PingFang-SC-Medium;font-size:16px;text-align:center">目录</h1>
                3月15日  李克强总理答中外记者问
                    十三届全国人大二次会议记者会
                        3月4日  十三届全国人大二次会议新闻发布会
                        3月6日  就大力推动经济高质量发展答记者问
                        3月7日  就财税改革和财政工作答记者问
                        3月7日  就攻坚克难、坚决打赢脱贫攻坚战答记者问
                        3月8日  就中国外交政策和对外关系答中外记者问
                        3月9日  就人大立法工作答记者问
                        3月9日  就促进形成强大国内市场、推动全方位对外开放答记者问
                        3月9日  就国有企业改革发展答记者问
                        3月10日  就金融改革与发展答记者问
                        3月10日  就人大监督工作答记者问
                        3月11日  就加快建设创新型国家答记者问
                        3月11日  就加强市场监管、维护市场秩序答记者问
                        3月11日  就打好污染防治攻坚战答记者问
                        3月12日  就攻坚“基本解决执行难”答记者问
                    全国政协十三届二次会议记者会
                        3月2日  全国政协十三届二次会议新闻发布会
                        3月5日  就打好防范化解重大风险、脱贫攻坚、污染防治三大攻坚战答记者问
                        3月6日  就优化营商环境、促进民营经济高质量发展答记者问
                        3月10日  就新时代政协履职答记者问
                    视频索引
            </van-tab>
            <van-tab title="售后信息" class="after">
                <p><strong><span style="font-family: STHeitiSC-Light;">正品行货</span></strong></p>
                <p><span style="font-family: STHeitiSC-Light;">新华书店网上商城向您保证所售商品均为正品行货，所有商品开具电子发票。<br></span></p>
                <p><br></p>
                <p><strong><span style="font-family: STHeitiSC-Light;">售后服务承诺</span></strong></p>
                <p><span style="font-family: STHeitiSC-Light;">1) 新华书店网上商城支持商品7天内无理由退换货（不影响二次销售），15天内可以换货，以客户收到商品第二日起计算。（食品、酒类等非图书商品非质量问题不予退换）<br></span></p>
                <p><span style="font-family: STHeitiSC-Light;">2) 平台售后审核人员在客户提交申请后72小时之内完成审核。<br></span></p>
                <p><span style="font-family: STHeitiSC-Light;">3) 退换货业务均会在自接收到问题商品之日起7日之内处理完成，国家法定节假日不计算在内。</span><br></p>
                <p><br></p>
            </van-tab>
        </van-tabs>
        <!-- 图文详情结束 -->

        <!-- 加入购物车开始 -->
        <van-goods-action>
            <van-goods-action-icon 
                @click="$router.push('/home')"
                icon="wap-home"  
                color="#C62F2E"
                text="首页"
            />
            <van-goods-action-icon 
                @click="$router.push('/cart')"
                icon="cart-o" 
                :badge="num"
                text="购物车"
            />
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" @click="$router.push('/order'),add(goods)" v-show="this.$store.state.username"/>
        </van-goods-action>
        <!-- 加入购物车结束 -->
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import {createNamespacedHelpers} from "vuex";
    import { Toast } from 'vant';
    const {mapState,mapMutations} = createNamespacedHelpers("cart");

    export default {
        data() {
            return {
                active:0,
                item:this.$route.query.item,
                isSelected:false,
                showShare: false,
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                showList:false,
                goods:{
                    id:this.$route.query.item.id,
                    img:this.$route.query.item.img,
                    name:this.$route.query.item.word,
                    price:this.$route.query.item.money,
                    num:1,
                }
            };
        },
        methods:{
            // 调用vuex里面的方法
            ...mapMutations(["add"]),
            toggleCollect(){
                this.isSelected = !this.isSelected
            },
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
            onsubmit(){
                // 判断用户名是否为空
                if(this.$store.state.username){
                    this.$router.push("/order")
                }else{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/order"
                        }
                    })
                }
            },
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange() {
            },
        },
        computed:{
            ...mapState({
                num:state => state.num
            })
        },
        mounted(){
            new Swiper('.detailscontainer', {
                pagination: {
                    el: '.detailspagination',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
// 顶部导航栏样式
.van-row{
    height: 43px;
    text-align: center;
    background-color: rgba(255,255,255,0.3);
    .back{
        margin-top: 10px;
    }
    .right{
        padding-bottom: 10px;
        margin-left: 4px;
        border-bottom: 2px solid #C62F2E;
    }
    .more{
        .share{
            background-color: rgba(255,255,255,0.3);
        }
        text-align: center;
        .van-icon{
            font-size: 24px;
            color: #C62F2E;
        }
    }
}
// 轮播图样式
.swiper-container {
    width: 100%;
    height: 100%;
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
// 设置图片大小
img{
    width: 320px;
    height: 320px;
}
// 现价格样式
.now{
    background-color: #fff;
    .like{
        margin-top: 10px;
        border-left: 1px solid #eee;
        padding-left: 10px;
    }
    .money{
        color: #C62F2E;
        font-size: 26px;
        margin-left: 5px;
    }
    .collect.active{
        color: #C62F2E;
    }
}
// 旧价格样式
.discount{
    padding: 0;
    margin: 0;
    height: 20px;
    line-height: 0;
    background-color: #fff;
    .word{
        font-size: 12px;
        color: #999;
        text-decoration:line-through;
        margin-left: 5px;
    }
    .words{
        font-size: 12px;
        color: #C62F2E;
    }
    .collection{
        height: 5px;
        font-size: 11px;
        border-left: 1px solid #eee;
        padding-left: 10px;
    }
}
// 书名样式
.title{
    height: 40px;
    padding-left: 10px;
    background-color: #fff;
    font-size: 18px;
    color: #363433;
    margin-bottom: 10px;
}
// 优惠券样式
.coupon{
    width: 50px;
    margin-right: 10px;
    span{
        margin-left: 10px;
    }
    .reduce{
        margin-left: 5px;
    }
}
// 作者样式
.author{
    margin-top: 10px;
}
// .choice{
//     margin-top: 10px;
// }
// .address{
//     margin-top: 10px;
//     height: 65px;
//     margin-bottom: 10px;
// }
// .have{
//     color: #C62F2E;
//     font-size: 14px;
//     position: absolute;
//     top: 716px;
//     left: 60px;
// }
// 评价样式
.evaluate{
    margin-top: 10px;
    margin-bottom: 10px;
}
// 加入购物车样式
.van-goods-action{
    z-index:999;
}
.van-goods-action-button--first{
    border-radius: 0;
}
.van-goods-action-button--warning{
    background:#FEB13B;
}
.van-goods-action-button--last{
    margin-left: 5px;
    border-radius: 0;
}
.van-goods-action-button--danger{
    background: #C62F2E;
}
// 推荐样式
.rec{
    padding: 5px 8px;
    background-color: #fff;
    .rec_content{
        max-width: 640px;
        display: flex;
        ul{
            max-width: 640px;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 320px;
                height: 218px;
                list-style: none;
                flex:1;
                margin: 4px;
                box-sizing: border-box;
                background-color: #fff;
                text-align: center;
                img{
                    width: 127px;
                    height: 127px;
                }
                .bookname{
                    max-width: 320px;
                    height: 40px;
                    display: block;
                    font-size: 14px;
                    text-align:left;
                    margin-left: 5px;
                }
                .authorname{
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
// 图文详情样式
.graphic{
    max-width: 320px;
    font-size: 12px;
    margin: 0 auto;
    color: #323232;
}
// 售后信息
.after{
    padding: 1rem;
    color: #323232;
    font-size: 12px;
}
</style>
<style lang="scss">
.couponlists{
    .van-tabs__line{
        background-color: #C62F2E;
    }
    .van-coupon-list__bottom{
        .van-button--danger{
            background-color: #C62F2E;
            border-radius: 3px;
        }
    }
}
.after{
    .van-tabs__nav--card{
        border: 1px solid #C62F2E;
    }
    .van-tabs__nav--card .van-tab.van-tab--active{
        background-color: #C62F2E;
        color: #fff;
    }
    .van-tabs__nav--card .van-tab{
        color: #C62F2E;
    }
}
.van-sku-row__item--active{
    color: #C62F2E;
}
.van-info{
    background-color: #C62F2E;
}
.van-tabs__line{
    background-color: #C62F2E;
}
.shopsku{
    .van-sku-actions .van-button:first-of-type{
        border-radius: 0;
    }
    .van-sku-actions .van-button--warning{
        background:#FEB13B;
    }
    .van-sku-actions .van-button:last-of-type{
        border-radius: 0;
    }
    .van-sku-actions .van-button--danger{
        background: #C62F2E;
    }
}
</style>