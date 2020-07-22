<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="cartvue">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">订单</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 地址开始 -->
        <div @click="addressfun">
            <van-contact-card 
                :type="cardType" 
                :name="name" 
                :tel="tel" 
                add-text="添加联系人"
                :editable="false" 
            />
        </div>
        <!-- 地址结束 -->

        <!-- 商品卡片开始 -->
        <div v-for="(item,index) in lists" :key="index" class="card">
            <van-col span="1"></van-col>
            <van-col span="7" class="between">
                <van-image
                    height="108"
                    fit="cover"
                    :src="item.img"
                />
            </van-col>
            <van-col span="1"></van-col>
            <van-col span="14">
                <div class="message">
                    <p>{{item.name}}</p>
                    <div class="num">
                        <span class="price">￥{{item.price}}</span>
                        <span class="number">x{{item.num}}</span>
                    </div>
                </div>
            </van-col>
        </div>
        <!-- 商品卡片结束 -->

        <!-- 运费开始 -->
        <van-cell title="运费" value="快递 免邮" class="express"/>
        <van-coupon-cell
            @click="showList = true"
        />
        <!-- 运费结束 -->

        <!-- 优惠券列表开始 -->
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
            class="couponlist"
        />
        </van-popup>
        <!-- 优惠券类别结束 -->
        
        <!-- 礼品卡开始 -->
        <van-cell title="礼品卡" is-link value="抵扣0元" class="gift"/>
        <!-- 礼品卡结束 -->

        <!-- 提交订单开始 -->
        <van-submit-bar 
            :price="total * 100" 
            button-text="提交订单"
            @submit="onsubmit"
        />
        <!-- 提交订单结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:"",
                tel:"",
                showList:false
            }
        },
        methods:{
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange() {
            },
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item) => {
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseFloat(item.price) * parseFloat(item.num); // 总价格
                },0) // 总价格默认值0
            },
            // 定义跳转方法
            addressfun(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length == 0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 // 未支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2 //已支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push("/orderList/orderAll")
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length == 0 ? "add" : "edit"
            }
        },
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; //定义地址对象
            }

            this.lists = this.$store.state.cart.lists;
            this.sum();// 计算总价格
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
.van-submit-bar__button--danger{
    background: #C62F2E;
}
.van-button--round{
    border-radius: 0;
}
// 商品卡片样式
.card{
    height: 120px;
    background-color: #fff;
}
.message{
    p{
        font-size: 12px;
        height: 60px;
        color: #323232;
    }
}
.num{
    .price{
        font-size: 14px;
        color: #C62F2E;
    }
    .number{
        float: right;
        color: #999;
        font-size:12px;
        line-height: 23px;
    }
}
// 运费样式
.express{
    margin-top: 10px;
    .van-cell__title{
        font-size: 14px;
    }
    .van-cell__value{
        font-size: 14px;
    }
}
// 礼品卡样式
.gift{
    margin-top: 10px;
}
.van-coupon-list__bottom{
    button{

    background-color: #C62F2E;
    }
}
.van-button--danger{
    background-color: #C62F2E;
}
</style>
<style lang="scss">
.couponlist{
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
</style>