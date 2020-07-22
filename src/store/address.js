// 地址数据状态
export default {
    namespaced:true,//命名空间
    state:{
        lists:[
            {
                id: '1',
                name: '李四',
                tel: '18000000000',
                address: '广东省广州市天河区珠吉路 60 号',
                isDefault: true,
                province:"广东省",
                city:"广州市",
                county:"天河区",
                areaCode:"440106",
                addressDetail:"珠吉路 60 号"
            }
        ],
    },
    mutations:{
        // 添加数据
        add(state,obj){
            // 去除默认选项
            state.lists.forEach(item => {
                item.isDefault = false;
            })
            // console.log(obj);
            // 默认选项
            obj.isDefault = true;
            obj.id = state.lists.length + 1;
            // 添加地址
            state.lists.push(obj); 
        },
        // 修改数据
        edit(state,obj){
            // 找到数据下标
            let index = state.lists.findIndex(item => item.id == obj.id);
            Object.assign(state.lists[index],obj);
        },
        // 修改默认id
        editId(state,id){
            // 去除默认选项
            state.lists.forEach(item => {
                item.isDefault = item.id == id ? true : false;
            })

        }
    },
    actions:{}
}