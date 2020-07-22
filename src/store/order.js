export default {
    namespaced:true,//命名空间
    state:{
        lists:[
            // 订单完整性，不可修改
            // {
            //     orderId:"1536423764527635472",//订单固定id
            //     address:{  //地址

            //     },
            //     goodslist:[ //商品列表

            //     ],
            //     type:1 //状态 1 待支付 2 待收货 3 已完成
            // },
        ],
        typeList:["全部订单","待支付","待收货","已完成"],
        active:0
    },
    mutations:{
        add(state,obj){
            state.lists.push(obj);
        },
        editId(state,obj){
            // 修改数据
            // 源数据匹配，相同id类型不同修改，类型为6删除数据。
            for(let i=0; i<obj.length; i++){  // 界面修改数据
                for(let j=0; j<state.lists.length; j++){ // vuex原本订单数据
                    // 状态中类型6删除数据
                    if(obj[i].orderId == state.lists[j].orderId && obj[i].type == 6){
                        state.lists.splice(j,1);
                    // 修改数据id等于当前vuexid，类型不相同，重新赋值
                    }else if(obj[i].orderId == state.lists[j].orderId){
                        state.lists[j].type = obj[i].type;
                    }
                }
            }
        }
    },
    actions:{}
}