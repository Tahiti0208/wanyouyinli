export default[
    {
        path:"/my",
        name:"我",
        component:() => import("../../views/my.vue")
    },
    {
        path:"/login",
        name:"登录",
        component:() => import("../../components/my/login.vue")
    },
    {
        path:"/register",
        name:"注册",
        component:() => import("../../components/my/register.vue")
    },

]