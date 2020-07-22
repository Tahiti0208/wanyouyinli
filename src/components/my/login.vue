<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="3" @click="$router.push('/my')">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="18">登录页面</van-col>
            <van-col span="3"></van-col>
        </van-row>
        <!-- 顶部导航结束 -->

        <!-- 输入框、登录注册按钮开始 -->
        <van-form @submit="onSubmit" class="registers">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="输入用户名"
                :rules="[{ required: true, message: '请输入正确用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="输入密码"
                :rules="[{ required: true, message: '请输入正确密码' }]"
            />
            <div style="margin:10px 0;" class="login">
                <van-button round block type="info" native-type="submit">
                登录
                </van-button>
            </div>
            <div style="margin:10px 0;" class="register">
                <van-button round block type="info" @click="getRegister">
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
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                // 判断是否传参，修改返回路径
                let path = "path" in _this.$route.query ? _this.$route.query.path : '/my';

                this.$axios.get("login",{params}).then(res => {
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            onOpened(){
                                // 登陆成功用户名存入vuex
                                _this.$store.state.username = _this.username;
                                // 回调跳转路由
                                _this.$router.push(path);
                            }
                        });
                    }else{
                        Toast("登陆失败");
                    }
                })
            },
            getRegister() {
                this.$router.push("register")
            }
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
// 登录按钮样式
.login{
    .van-button--info{
        border: 1px solid #C62F2E;
        background-color: #C62F2E;
        border-radius: 3px;
    }
}
// 注册按钮样式
.register{
    .van-button--info{
        border: 1px solid #C62F2E;
        background-color: white;
        border-radius: 3px;
        color:#C62F2E;
    }
}
.registers{
    margin: 0 10px;
}
</style>