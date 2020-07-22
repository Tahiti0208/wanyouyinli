import Vue from 'vue'
import Vuex from 'vuex'

import cart from "./cart";
import address from "./address";
import order from "./order";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active:0, // 导航索引
    username:null, // 用户名
    lists2:[
      {id:1,img:require("../assets/img/re01.jpg"),word:"2019全国两会记者会实录(视频书)",money:"58.90"},
      {id:2,img:require("../assets/img/re02.jpg"),word:"直通两会2019(两会热点面对面)",money:"49.40"},
      {id:3,img:require("../assets/img/re03.jpg"),word:"图解2019全两国会",money:"36.10"},
    ],
    lists3:[
      {id:4,img:require("../assets/img/re04.png"),word:"Excel最强教科书【完全版】",money:"54.70"},
      {id:5,img:require("../assets/img/re05.jpg"),word:"御猫带你游故宫[3-6岁]",money:"109.50"},
      {id:6,img:require("../assets/img/re06.jpg"),word:"唐诗三百首【马末都亲笔作序】",money:"82.60"},
    ],
    lists4:[
      {id:7,img:require("../assets/img/re07.png"),word:"【权威专家解读今典原著】",money:"139.00"},
      {id:8,img:require("../assets/img/re08.jpg"),word:"【一书读懂孔孟老庄】",money:"53.80"},
      {id:9,img:require("../assets/img/re09.jpg"),word:"【汪曾祺的几件生活智慧】",money:"65.00"},
    ],
    lists5:[
      {id:10,img:require("../assets/img/re10.jpg"),word:"熊熊乐园环游世界(15册套装)",money:"226.30"},
      {id:11,img:require("../assets/img/re11.jpg"),word:"宫泽贤治不朽童话集(共9册)",money:"188.10"},
      {id:12,img:require("../assets/img/re12.jpg"),word:"手指点读英语情景对话-全网独家",money:"199.00"},
    ],
    lists6:[
      {id:13,img:require("../assets/img/re16.jpg"),word:"格桑泉即热饮水机",money:"399.00"},
      {id:14,img:require("../assets/img/re17.jpg"),word:"江西会昌县县五丰上等沙河粉 ",money:"60.00"},
      {id:15,img:require("../assets/img/re18.jpg"),word:"新疆疏附县 纸皮核桃500g",money:"42.00"},
    ],
    lists7:[
      {id:16,img:require("../assets/img/re15.jpg"),word:"上帝投骰子吗?量子物理史话(精装)",money:"78.00"},
      {id:17,img:require("../assets/img/re14.jpg"),word:"饮食的迷思(关于营养健康)",money:"49.40"},
      {id:18,img:require("../assets/img/re15.jpg"),word:"数学简史(确定性的消失)",money:"74.10"},
    ],
    lists8:[
      {id:19,img:require("../assets/img/re19.jpg"),word:"圆点蓝牙机械键盘——小黄鸭",money:"639.00"},
      {id:20,img:require("../assets/img/re20.jpg"),word:"圆点蓝牙机械键盘",money:"399.00"},
      {id:21,img:require("../assets/img/re21.jpg"),word:"洛斐薯片蓝牙鼠标 ",money:"229.00"},
    ],
    lists9:[
      {id:22,img:require("../assets/img/re22.jpg"),word:"OKR工作法",money:"39.90"},
      {id:23,img:require("../assets/img/re23.jpg"),word:"公文写作诗词速查手册",money:"45.00"},
      {id:24,img:require("../assets/img/re24.jpg"),word:"贫穷的本质+财富与贫穷 ",money:"146.00"},
    ],
    lists10:[
      {id:25,img:require("../assets/img/re25.jpg"),word:"【余秋雨新作】中国文化课(精)",money:"81.80"},
      {id:26,img:require("../assets/img/re26.jpg"),word:"明朝那些事儿(增补版共9册)",money:"282.15"},
      {id:27,img:require("../assets/img/re27.jpg"),word:"如何阅读一本书(精)",money:"53.20"},
    ],
    lists11:[
      {id:28,img:require("../assets/img/re28.jpg"),word:"【我不是学神】 化学",money:"63.00"},
      {id:29,img:require("../assets/img/re29.jpg"),word:"语文(高中必修3新课标江苏)",money:"18.81"},
      {id:30,img:require("../assets/img/re30.jpg"),word:"笠翁对韵",money:"65.55"},
    ],
    lists:[
      {id:31,img:require("../assets/img/shop01.jpg"),word:"爱莲说",author:"西茜",money:"46.55"},
      {id:32,img:require("../assets/img/shop02.jpg"),word:"【历史精进版共6册】曾国藩(豪华礼盒)",author:"唐浩明",money:"283.10"},
      {id:33,img:require("../assets/img/shop03.jpg"),word:"疯狂成语游戏:挑战篇",author:"瓜叔",money:"25.00"},
      {id:34,img:require("../assets/img/shop04.jpg"),word:"不租房的606天",author:"郑辰雨",money:"31.20"},
      {id:35,img:require("../assets/img/shop05.jpg"),word:"草木有趣:跟着二十四节气过日子",author:"殷若衿",money:"34.80"},
      {id:36,img:require("../assets/img/shop06.jpg"),word:"爱的教育:丰子恺艺术启蒙课",author:"丰子恺",money:"40.80"},
      {id:37,img:require("../assets/img/shop07.jpg"),word:"【全网独家首发】人工智能机器人大百科",author:"周彦彤",money:"98.00"},
      {id:38,img:require("../assets/img/shop08.jpg"),word:"【引导孩子学会情景阅读】牛津英语分级阅读",author:"海豚传媒",money:"228.00"},
      {id:39,img:require("../assets/img/shop09.jpg"),word:"【走遍世界:看尽世间美景】旅游地理",author:"夏昆",money:"189.30"},
      {id:40,img:require("../assets/img/shop10.jpg"),word:"【钟南山授权传记】你好,钟南山",author:"叶依",money:"68.00"},
      {id:41,img:require("../assets/img/shop11.jpg"),word:"【万物有科学（套装共8册）推荐 [7-12岁]",author:"童心布马",money:"260.00"},
      {id:42,img:require("../assets/img/shop12.jpg"),word:"偶尔做不好没关系系列（套装共2册）",author:"安妮·布斯",money:"84.00"},
    ],
    lists12:[
      {id:43,img:require("../assets/img/shop04.jpg"),word:"不租房的606天",authorname:"郑辰雨",money:"31.20"},
      {id:44,img:require("../assets/img/shop05.jpg"),word:"草木有趣:跟着二十四节气过日子",authorname:"殷若衿",money:"34.80"},
      {id:45,img:require("../assets/img/shop06.jpg"),word:"爱的教育:丰子恺艺术启蒙课",authorname:"丰子恺",money:"40.80"},
      {id:46,img:require("../assets/img/shop05.jpg"),word:"草木有趣:跟着二十四节气过日子",authorname:"殷若衿",money:"34.80"},
      {id:47,img:require("../assets/img/shop04.jpg"),word:"不租房的606天",authorname:"郑辰雨",money:"31.20"},
      {id:48,img:require("../assets/img/shop06.jpg"),word:"爱的教育:丰子恺艺术启蒙课",authorname:"丰子恺",money:"40.80"},
      {id:49,img:require("../assets/img/shop06.jpg"),word:"爱的教育:丰子恺艺术启蒙课",authorname:"丰子恺",money:"40.80"},
      {id:50,img:require("../assets/img/shop05.jpg"),word:"草木有趣:跟着二十四节气过日子",authorname:"殷若衿",money:"34.80"},
      {id:51,img:require("../assets/img/shop04.jpg"),word:"不租房的606天",authorname:"郑辰雨",money:"31.20"},
    ],
    lists13:[
      {id:52,word:"引力定制",img:require("../assets/img/shop05.jpg"),money:"99.80"},
      {id:53,word:"砥砺奋进的七十年",img:require("../assets/img/shop06.jpg"),money:"44.80"},
      {id:54,word:"创业史",img:require("../assets/img/shop03.jpg"),money:"56.80"},
      {id:55,word:"我们的身体",img:require("../assets/img/shop02.jpg"),money:"33.80"},
      {id:56,word:"二十四史",img:require("../assets/img/shop08.jpg"),money:"38.80"},
      {id:57,word:"山海经",img:require("../assets/img/shop01.jpg"),money:"88.80"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,     // 购物车
    address,  // 地址管理
    order,    // 订单数据
  }
})
