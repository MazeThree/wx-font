import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        useid:"110",
        name:"Maze",
        class_id:"111",
        test_id:"111"
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        getname(state){
            return state.name;
        },
        getid(state){
            return state.useid;
        },
        class_id(state){
            return state.class_id;
        },
        test_id(state){
            return state.test_id;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        setName({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setusename", name);
        },
        setid({commit,state}, id){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setuseid", id);
        },
        setclass_id({commit,state}, class_id){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setclassid", class_id);
        },
        settest_id({commit,state}, test_id){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("settestid", test_id);
        }
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // name传递过来的数据
        setusename(state, name){
            state.name = name;//将传参设置给state的city
        },
        setuseid(state,id){
            state.useid = id;
        },
        setclassid(state,class_id){
            state.class_id = class_id;
        },
        settestid(state,test_id){
            state.test_id = test_id;
        }
    }
});

export default store;