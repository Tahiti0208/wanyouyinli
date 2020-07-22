export default[
    {
        path:"/card",
        name:"优惠券",
        component:() => import("../../components/discount/card.vue")
    },
    {
        path:"/gift",
        name:"礼品卡",
        component:() => import("../../components/discount/gift.vue")
    },
]