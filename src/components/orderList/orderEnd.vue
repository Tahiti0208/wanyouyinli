<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type == 3">
                <!-- 商品列表样式开始 -->
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
                <!-- 商品类别样式结束 -->
                <div class="orderfooter">
                    <!-- 已完成开始 -->
                    <van-button size="mini" @click="showPopup">商品评价</van-button>
                    <van-popup v-model="show" position="bottom" :style="{ height: '8%' }" style="text-align:center">
                        期待您的五星好评
                        <br>
                        <van-rate v-model="value" />
                    </van-popup>
                    <!-- 已完成结束 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
          data() {
            return {
                show: false,
                value: 0,
            }
        },
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item => item.type == 3); // 类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            // console.log(this.lists.length)
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
            showPopup() {
                this.show = true;
            },
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
</style>