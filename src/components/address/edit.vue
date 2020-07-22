<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">修改地址</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 修改地址开始 -->
        <van-address-edit
            :area-list="areaList"
            show-search-result
            :search-result="searchResult"
            :address-info="addressInfo"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            class="editaddress"
        />
        <!-- 修改地址结束 -->
    </div>
</template>

<script>
    // 引入地址
    import areaList from "./erea.js";
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                areaList,
                searchResult: [],
                addressInfo:{}
            };
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,addressDetail}) {
                let id = this.$route.query.id;
                // 调用vuex方法
                this.$store.commit("address/edit",{
                    id,// 修改指定对象
                    name,
                    tel,
                    address:province + city + county + addressDetail,
                    province,
                    city,
                    county,
                    areaCode,
                    addressDetail
                });
                // 返回上一页
                this.$router.go(-1); 
                Toast("修改成功");
            },
        },
        created(){
            // 获取路由id
            let id = this.$route.query.id;
            // 找到相同id对象数据
            this.addressInfo = this.$store.state.address.lists.find(item => item.id == id); 
        }
    };
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
.van-address-edit__buttons .van-button--round{
    border-radius: 3px;
}
.van-button .van-button--danger .an-button--normal .van-button--block .van-button--round{
    background-color: #C62F2E;
}
</style>
<style lang="scss">
.editaddress{
    .van-button--danger{
        background-color: #C62F2E;
        border-radius: 3px;
    }
}
</style>