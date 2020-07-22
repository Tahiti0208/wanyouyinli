<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.go(-1)">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">地址</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 地址列表开始 -->
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
            class="success"
        />
        <!-- 地址列表结束 -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chosenAddressId: '1',
                list: [],
            };
        },
        methods: {
            onAdd() {
                this.$router.push("/addressAdd")
            },
            onEdit(item) {
                this.$router.push(
                    {
                        path:"/addressEdit",
                        query:{id:item.id}
                    }
                )
            },
            onSelect(item){
                this.$store.commit("address/editId",item.id);
                this.$router.go(-1)
            }
        },
        created(){
            this.list = this.$store.state.address.lists;
            // 获取id值
            this.chosenAddressId = this.list.find(item => item.isDefault).id
        },
    };
</script>
<style lang="scss" scoped>
.van-row{
    height: 45px;
    line-height: 45px;
    text-align: center;
    .van-icon{
        color: #C62F2E;
    }
}
.van-button--danger{
    background-color: #C62F2E;
    border-radius: 3px;
}

</style>
<style lang="scss">

.success{
    .van-address-item .van-radio__icon--checked .van-icon{
        background-color: #C62F2E;
    }
    .van-tag{
        background-color: #C62F2E;
    }
}
</style>