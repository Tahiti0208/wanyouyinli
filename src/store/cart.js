export default{
    // 命名空间
    namespaced: true,
    state:{
        // 购物车数据列表
        lists:[],
        // 商品数量
        num:0,
    },
    mutations:{
        // 加入购物车
        add(state,obj){
            let index = state.lists.findIndex(val => val.id == obj.id);
            if(index != "-1"){ // 存在，数量加一
                state.lists[index].num += 1;
                state.num = state.lists[index].num;// 修改数量
            }else{ // 不存在添加数据
                obj.isSelect = true; // 默认选中
                state.lists.push(obj);
                state.num = 1;// 数量
            }
        },
        edit(state,obj){
            Object.assign(state.lists,obj);
        }
    },
    actions:{}
}