<template>
    <div>
        <div class="head">head</div>
        <div class="content">
            <!-- 左边开始 -->
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <!-- 左边结束 -->
            
            <!-- 右边开始 -->
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <h2>{{item.name}}</h2>
                        <ul>
                            <li v-for="num in item.bookname" :key="num">
                                <img :src="item.src">
                                <div>{{num}}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 右边结束 -->
        </div>
    </div>
</template>

<script>
    // npm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'
    export default {
            data(){
                return {  
                    left:["文学艺术","人文社科","少儿图书","经济金融","教育考试","生活悠闲","科技技术","电子书","新华定制","精准扶贫","学习办公","3C电器"],
                    right:[
                        {name:"文学",bookname:["中国文字","外国文字","诗词曲赋","纪实文学","文学理论","散文随笔"],src:require("../../assets/img/category01.jpg")},
                        {name:"哲学宗教",bookname:["中国哲学","西方哲学","哲学总论","马列著作","逻辑学","宗教","伦理学","美学"],src:require("../../assets/img/category02.jpg")},
                        {name:"少儿图书",bookname:["益智游戏","书法绘画","艺术培养","识字说话","科普百科","低幼读物","儿童绘本"],src:require("../../assets/img/category03.jpg")},
                        {name:"经济金融",bookname:["中国经济","世界经济","工业经济","贸易","交通经济","企业经济","产业经济"],src:require("../../assets/img/category04.jpg")},
                        {name:"教育考试",bookname:["小学数学","小学语文","小学教材","初中语文","初中数学","初中英语","初中理化","初中教材","高中语文","高中数学","高中外语","高中理化"],src:require("../../assets/img/category05.jpg")},
                        {name:"生活悠闲",bookname:[1,2,3,4,5,6,7],src:require("../../assets/img/category02.jpg")},
                        {name:"科技技术",bookname:[1,2,3,4,5,6,7],src:require("../../assets/img/category03.jpg")},
                        {name:"电子书",bookname:[1,2,3,4,5,6,7],src:require("../../assets/img/category04.jpg")},
                        {name:"新华定制",bookname:[1,2,3,4,5,6,7],src:require("../../assets/img/category01.jpg")},
                        {name:"精准扶贫",bookname:[1,2,3,4,5,6,7],src:require("../../assets/img/category02.jpg")},
                        {name:"学习办公",bookname:[1,2,3,4,5,6,7],src:require("../../assets/img/category03.jpg")},
                        {name:"3C电器",bookname:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],src:require("../../assets/img/category04.jpg")},
                    ],
                    listHeight:[],//记录高度
                    scrollY:0
                }
            },
            // props:["left","right"],
            methods: {
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, // 拥有触发事件
                        probeType:3 // 滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3 // 滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)
                },
                onScrollfun(pos){
                    console.log(pos.y);
                    this.scrollY = Math.abs(Math.round(pos.y));// 滚动条y轴
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; // 设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i=0; i<rightItems.length; i++){
                        let item = rightItems[i];
                        height += item.clientHeight-1; // 对象高度
                        this.listHeight.push(height);
                    }
                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);
                        // this.currentIndex = index; //左侧效果
                    }
                }   
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(() => {
                    this._initScroll(); // 调用滚动效果
                    this._getHeight();// 获取右边列表内容高度
                })
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i=0; i<this.listHeight.length; i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }
                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
}
// 头部样式
.head{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.content{
    display: flex;
    position: absolute;
    /* 定位里面不写左右样式，不写高度，自动获取高度 */
    top:44px;
    bottom: 0px;
    background-color: #eeeeee;
    width: 100%;
    overflow: hidden;
}
// 左边样式
.left{
    flex: 0 0 80px;
    width: 80px;
    background-color: #F7F7F7;
    margin-bottom: 50px;
}
.left li{
    width: 100%;
    height: 100%;
    color:#999;
    font-size:14px;
}
.left li.current{
    background-color: white;
    color:#C62F2E;
}
.left li span{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
// 右边样式
.right{
    flex:1;
    background-color: white;
    margin-bottom: 50px;
    li.right-item-hook{
        overflow: hidden;
        text-align: center;
        // &:last-child{
        //     height: 800px;
        // }
        h2{
            line-height: 57px;
            font-size: 12px;
            color: #323232;
        }
        >ul{
            width: 100%;
            >li{
                width: 33.33%;
                float: left;
                text-align: center;
                font-size: 12px;
                color: #ccc;
                img{
                    width: 70px;
                    height: 70px;
                    margin: 0 auto;
                }
            }
        }
    }
}
</style>