<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.push('/my')">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">注册页面</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 输入框、登录注册按钮开始 -->
        <van-form @submit="onSubmit" class="registers">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="设置用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="设置密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="password2"
                label="确认密码"
                placeholder="确认密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin:20px 0;">
                <van-button round block type="info" native-type="submit">
                注册
                </van-button>
            </div>
        </van-form>
        <!-- 输入框、登录注册按钮结束 -->
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                username: '',
                password: '',
                password2: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                this.$axios.get("register",{params}).then(res => {
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"注册成功",
                            onOpened(){
                                // 回调跳转路由
                                _this.$router.push("/login");
                            }
                        });
                    }else{
                        Toast("注册失败");
                    }
                })
            },
        }
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
.van-button--info{
    border: 1px solid #C62F2E;
    background-color: #C62F2E;
    border-radius: 3px;
}
.registers{
    margin: 0 10px;
}
</style>