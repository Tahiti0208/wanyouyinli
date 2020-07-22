<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type == 2">
                <!-- 商品列表开始 -->
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime) | dataFormat" />
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                        :num="value.num"
                        :price="value.price"
                        :title="value.name"
                        :thumb="value.img"
                    >
                    </van-card>
                </div>
                <!-- 商品列表结束 -->

                <div class="orderfooter">
                    <!-- 待收货 -->
                    <van-button size="mini" type="warning" @click="show = true">退款申请</van-button>
                    <van-button size="mini" type="info" @click="onGoods(index)">确认收货</van-button>
                    <van-overlay :show="show" @click="show = false">
                        <div class="wrapper" @click="show = true">
                            <div class="block">
                                请联系客服
                                <img src="../../assets/img/service.png">
                            </div>
                        </div>
                    </van-overlay>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data(){
            return{
                show:false
            }
        },
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item => item.type == 2); // 类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
            onGoods(index){
                // let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货状态，
                Toast('修改已完成');
            }
        },
        // 局部过滤器 
        // 注意：过滤器可以添加多个，必须在单词后面添加”s“
        filters:{
            dataFormat(dataString){
                var dd = new Date(dataString);
                // 获取年月日
                var y = dd.getFullYear();
                var m = dd.getMonth() + 1;
                var d = dd.getDate();
                // 获取时分秒
                var hh = dd.getHours();
                var mm = dd.getMinutes();
                var ss = dd.getSeconds();
                // 字符串拼接
                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            },
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        }
    }
</script>

<style lang="scss" scoped>
.orderlists{
    margin-top: 10px;
        background: #fff;
    .van-card{
        background: #fff;
    }
    .orderfooter{
        text-align: right;
        padding: 0px 16px 10px 16px;
    }
}
// 客服样式
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}
.block {
    width: 9rem;
    background-color: #fff;
    img{
        width: 9rem;
    }
}
</style>