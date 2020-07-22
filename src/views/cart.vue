<template>
    <div class="box">
        <!-- 购物车顶部开始 -->
        <div class="cars">
            <div class="cars_top">
                <span>购物车</span>
                <span class="iconfont icon-dingwei"></span>
            </div>
            <!-- <div class="cars_bottom">
                <span class="login" @click="login">登录</span>
                <span class="login_word">登录后商品将合并到您的账号中</span>
            </div> -->
        </div>
        <!-- 购物车顶部结束 -->

        <!-- 无商品显示开始 -->
        <section class="shop" v-show="!($store.state.cart.lists.length)">
            <div class="shop_top">
                <img src="../assets/img/cars.png">
                <div class="word">购物车没有商品喔</div>
            </div>
            <div class="shop_bottom">
                <!-- <van-button type="default" class="collect">去看收藏</van-button> -->
                <van-button type="warning" class="go" to="/home">随便逛逛</van-button>
            </div>
        </section>
        <!-- 无商品显示结束 -->

        <!-- <van-row class="top" v-for="(item,index) in lists" :key="index+1">
            <van-col span="1"></van-col>
            <van-col span="2">
                <van-checkbox icon-size="16px" checked-color="#C62F2E" v-model="item.isSelect"></van-checkbox>
            </van-col>
            <van-col span="18" class="center">
                <span class="iconfont icon-shangdian"></span>
                <span class="word"> 新华书店网上商城自营图书</span>
            </van-col>
            <van-col span="3" class="between">
                <span class="iconfont icon-youhuiquan_huaban"></span>
            </van-col>
        </van-row> -->

        <!-- 商品列表开始 -->
        <van-row class="bottom" v-for="(item,index) in lists" :key="index" style="margin-bottom:6px">
            <van-col span="1"></van-col>
            <van-col span="2">
                <van-checkbox icon-size="16px" checked-color="#C62F2E" :value="item.isSelect" @click="inputselect(index)"></van-checkbox>
            </van-col>
            <van-col span="7" class="between">
                <van-image
                    width="6.75rem"
                    height="6.75rem"
                    fit="cover"
                    :src="item.img"
                />
            </van-col>

            <van-col span="1"></van-col>
            <van-col span="12">
                <div class="details">
                    <p>{{item.name}}</p>
                    <div class="num">
                        <span class="price">￥{{item.price}}</span>
                        <button class="btn left" @click="item.num <= 1 ? 1 :item.num--">-</button>
                        <span class="number">{{item.num}}</span>
                        <button class="btn" @click="item.num++">+</button>
                    </div>
                    <van-icon name="delete" @click="del(index)" class="dele"/>
                </div>
            </van-col>
            <van-col span="1"></van-col>
        </van-row>
        <!-- 商品列表结束 -->

        <!-- 去结算开始 -->
        <van-submit-bar :price="total * 100" button-text="去结算" button-type="" @submit="onsubmit" v-show="$store.state.cart.lists.length">
            <van-checkbox icon-size="16px" @click="checkedAll" :value="checked" checked-color="#C62F2E">全选</van-checkbox>
        </van-submit-bar>
        <!-- 去结算结束 -->

        <!-- 引入组件 -->
        <recommend style="margin-top:20px"></recommend>
        <vantabber></vantabber>
    </div>
</template>

<script>
    import recommend from "../components/recommend/recommend"
    import vantabber from "../components/public/vantabbar.vue"
    import { Toast } from 'vant';
    export default {
        data(){
            return{
                checked:true,
                total:0,
                lists:[]
            }
        },
        methods:{
            login(){
                this.$router.push("/my");
            },
            del(index){
                this.lists.splice(index,1);
            },
            // 总价格计算
            sum(){
                // total 累加值
                this.total = this.lists.reduce((total,item) => {
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; // 返回默认价格
                    return total + parseFloat(item.price) * parseFloat(item.num); // 总价格
                },0) // 总价格默认值0
            },
            checkedAll(){
                this.lists.forEach(item => {
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every(item => {
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
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
                    Toast("请先登录");
                }
            }
        },
        components:{
            recommend,
            vantabber
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.checkboxclick();
            this.sum();
            this.$store.state.active = 2;
        },
        beforeUpdate(){
            this.sum();
        },
        beforeDestroy(){
            this.$store.commit("cart/edit",this.lists);
        }
    }
</script>

<style lang="scss" scoped>
button{
    width: 80px;
    height: 35px;
    background-color: #C62F2E;
    border-radius: 0;
    color: white;
}
.btn{
    width: 26px;
    height: 26px;
    border: 0;
    outline: none;
    background-color: #f7f7f7;
    color: #2B2B2B;
    font-size: 22px;
}
// 商品列表样式
.details{
    position: relative;
    p{
        margin: 0;
        padding: 0;
        font-size: 12px;
        overflow: hidden;/* 超出部分隐藏 */
        white-space: nowrap;/* 不换行 */
        text-overflow:ellipsis;/* 超出部分文字以...显示 */
    }
    .dele{
        font-size: 20px;
        color: #C62F2E;
        background-color: #f7f7f7;
        position: absolute;
        right: -10px;
        top: 88px;
    }
}
// 购物车顶部样式
.cars_top{
    max-width: 640px;
    height: 42px;
    background-color: #F7F7F7;
    text-align: center;
    line-height: 42px;
    font-size: 20px;
    color: #323232;
    .icon-dingwei{
        font-size: 20px;
        color:#999;
    }
}
// .cars_bottom{
//     width: 100%;
//     height: 40px;
//     line-height: 40px;
//     background-color: #F7F7F7;
//     padding-bottom: 5px;
//     .login{
//         display: inline-block;
//         width: 64px;
//         height: 24px;
//         text-align: center;
//         line-height: 24px;
//         color: #C62F2E;
//         border: 1px solid #C62F2E;
//         font-size: 14px;
//         margin-left: 20px;
//         border-radius: 2px;
//     }
//     .login_word{
//         font-size: 12px;
//         color: #999;
//         margin-left: 10px;
//     }
// }
// 商品列表样式
.price{
    color:#C62F2E;
}
.num{
    margin-top: 30px;
    .left{
        margin-left: 10px;
    }
    .number{
        padding: 0 18px;
        font-size: 14px;
        color: #1E1E1E;
    }
}
// .top{
//     background-color: #fff;
//     border-bottom: 1px solid #eeeeee;
// }
// 
.van-checkbox{
    height: 26px;
    line-height: 26px;
}
// .word{
//     font-size: 12px;
// }
.center{
    line-height: 26px;
}
.between{
    text-align: center;
}
.icon-youhuiquan_huaban{
    color:#C62F2E;
    font-size: 26px;
    text-align: center;
}
.icon-shangdian{
    font-size: 14px;
}
.bottom{
    padding-top: 10px;
    background-color: #fff;
}
.van-submit-bar{
    bottom: 50px;
}
.shop{
    background-color: #fff;
    .shop_top{
        text-align: center;
        img{
            width: 74px;
            height: 74px;
        }
        .word{
            margin-top: 15px;
            font-size: 14px;
            color:#999;
            margin-bottom: 30px;
        }
    }
    .shop_bottom{
        text-align: center;
        .collect{
            width: 134px;
            height: 36px;
            margin-right: 5px;
            background-color: #F7F7F7;
        }
        .go{
            width: 134px;
            height: 36px;
            background-color: #C62F2E;
        }
    }
}
</style>
<style lang="scss">
.van-submit-bar__price{
    color: #C62F2E;
}
</style>