export default [
    {
        path:"/address",
        name:"地址",
        component:() => import("../../components/address/index.vue")
    },
    {
        path:"/addressAdd",
        name:"新增地址",
        component:() => import("../../components/address/add.vue")
    },
    {
        path:"/addressEdit",
        name:"修改地址",
        component:() => import("../../components/address/edit.vue")
    }
]