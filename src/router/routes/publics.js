export default [
    {
        path:"/guidepage",
        name:"引导页",
        component:() => import("../../components/public/guidepage.vue")
    },
    {
        path:"/advertpage",
        name:"广告页",
        component:() => import("../../components/public/advertpage.vue"),
        // 独享路由守卫、
        beforeEnter: (to, from, next) => {
            // localStorage 关闭浏览器数据存在，只有清除数据缓存才消失
            if(localStorage.advertpage){
                // 1.有数据，进入广告页
                next();
            }else{
                // 2.没有数据，进入引导页
                localStorage.advertpage = true;
                next("/guidepage");
            }
        }
    },
    {
        path:"/evaluate",
        name:"用户评价",
        component:() => import("../../components/public/evaluate.vue")
    }
]