import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./routes/home";
import category from "./routes/category";
import cart from "./routes/cart";
import my from "./routes/my";
import search from "./routes/search";
import details from "./routes/details";
import publics from "./routes/publics";
import address from "./routes/address";
import order from "./routes/order";
import news from "./routes/news";
import newslist from "./routes/newslist";
import book from "./routes/book";
import discount from "./routes/discount";

  const routes = [
    {
      path:"/",
      redirect: "/advertpage"
    },
    home,         // 首页
    category,     // 分类
    ...cart,      // 购物车
    ...my,        // 我的
    search,       // 搜索
    details,      // 详情页
    ...publics,   // 公共路由
    ...address,   // 地址
    ...order,     // 订单
    news,         // 消息中心
    newslist,     // 消息中心详情
    book,         // 书籍
    ...discount,  // 优惠
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
