<template>
    <div>
        <!-- 轮播图开始 -->
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/img/category02.jpg" alt="">
                    <h3>书里的城</h3>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/category03.jpg" alt="">
                    <h3>城里的书</h3>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/category04.jpg" alt="">
                    <h3>欢迎使用万有引力书城APP</h3>
                    <van-button plain type="primary" color="#C62F2E" size="small" to="/home">点击体验</van-button>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guidepagepagination"></div>
        </div>
        <!-- 轮播图结束 -->
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        mounted(){
            new Swiper('.guidepagecontainer', {
                pagination: {
                    el: '.guidepagepagination',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
// 轮播图样式
.swiper-container{
    position: fixed;
    top:0px;
    left:0px;
    width:100%;
    height: 100%;
}
.swiper-slide{
    text-align: center;
    img{
        margin: 200px auto 0 auto;
        width:200px;
        height:200px;
    }
    h3{
        font-size: 20px;
        color:#404040;
    }
}
</style>
