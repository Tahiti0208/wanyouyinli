<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
body{
  padding-bottom: 50px;
  background-color: #f7f7f7;
}
.swiper-pagination .swiper-pagination-bullet{
  border-radius: 0px;
  bottom: 0;
}
.swiper-pagination span{
  width: 8px;
  height: 2px;
  background-color: #333;
}
.swiper-container .swiper-pagination-bullet-active{
  width: 16px;
  background-color: #C62F2E;
}
// 兼容性
input:-webkit-autofill{
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
</style>